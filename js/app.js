// 导入 Buffer polyfill（浏览器环境需要）
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

// 应用状态
let currentDate = new Date();
let entries = {};
let settings = {
    endpoint: '',
    accessKey: '',
    secretKey: '',
    bucket: '',
    region: 'cn-beijing'
};

// 导入 AWS SDK
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// 导入 flatpickr 日期选择器
import flatpickr from 'flatpickr';

// 默认事项模板
const defaultTemplates = [
    '上班',
    '摸鱼',
    '睡觉',
    '游戏'
];

// 当前下拉菜单
let currentDropdownMenu = null;

// 禁止缩放
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
document.addEventListener('touchmove', e => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
document.addEventListener('wheel', e => {
    if (e.ctrlKey || e.metaKey) e.preventDefault();
}, { passive: false });
document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) e.preventDefault();
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadSettings();
    loadLocalData();
    initDateDisplay();
    renderEntries();
    initEventListeners();
    autoFetchFromS3();
});

// 初始化主题（跟随系统）
function initTheme() {
    // 检查系统主题偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
}

// 加载设置
function loadSettings() {
    const saved = localStorage.getItem('diary-s3-settings');
    if (saved) {
        settings = JSON.parse(saved);
        populateSettingsForm();
    }
}

// 填充设置表单
function populateSettingsForm() {
    document.getElementById('s3-endpoint').value = settings.endpoint || '';
    document.getElementById('s3-access-key').value = settings.accessKey || '';
    document.getElementById('s3-secret-key').value = settings.secretKey || '';
    document.getElementById('s3-bucket').value = settings.bucket || '';
    document.getElementById('s3-region').value = settings.region || '';
}

// 保存设置
function saveSettings() {
    settings = {
        endpoint: document.getElementById('s3-endpoint').value.trim(),
        accessKey: document.getElementById('s3-access-key').value.trim(),
        secretKey: document.getElementById('s3-secret-key').value.trim(),
        bucket: document.getElementById('s3-bucket').value.trim(),
        region: document.getElementById('s3-region').value.trim()
    };
    localStorage.setItem('diary-s3-settings', JSON.stringify(settings));
    showToast('设置已保存');
    closeModal('settings-modal');
}

// 加载本地数据
function loadLocalData() {
    const saved = localStorage.getItem('diary-entries');
    if (saved) {
        entries = JSON.parse(saved);
    }
}

// 保存本地数据
function saveLocalData() {
    localStorage.setItem('diary-entries', JSON.stringify(entries));
}

// 初始化日期显示
// flatpickr 实例
let flatpickrInstance = null;

function initDateDisplay() {
    // 检查 DOM 元素是否存在
    const dateInput = document.getElementById('date-picker-input');
    if (!dateInput) {
        console.error('日期选择器输入框不存在');
        return;
    }
    
    // console.log('初始化 flatpickr...');
    
    // 初始化 flatpickr 日期选择器
    try {
        flatpickrInstance = flatpickr(dateInput, {
            dateFormat: 'Y-m-d',
            defaultDate: currentDate,
            onChange: function(selectedDates, dateStr) {
                // console.log('日期变更:', dateStr);
                if (selectedDates.length > 0) {
                    currentDate = selectedDates[0];
                    renderEntries();
                }
            },
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ['日', '一', '二', '三', '四', '五', '六'],
                    longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                },
                months: {
                    shorthand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                }
            }
        });
        
        // console.log('flatpickr 初始化成功:', flatpickrInstance);
    } catch (error) {
        console.error('flatpickr 初始化失败:', error);
    }
    
    updateDateDisplay();
}

// 更新日期显示
function updateDateDisplay() {
    if (flatpickrInstance) {
        flatpickrInstance.setDate(currentDate, false);
    }
}

// 格式化日期
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 渲染输入框
function renderEntries() {
    const container = document.getElementById('entries-container');
    container.innerHTML = '';
    
    const dateKey = formatDate(currentDate);
    const dayEntry = entries[dateKey];
    const dayEntries = (dayEntry && dayEntry.data) || Array(13).fill('');
    
    for (let i = 0; i < 13; i++) {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry-item';
        
        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'entry-input-wrapper';
        
        const input = document.createElement('textarea');
        input.className = 'entry-input' + (i === 12 ? ' large' : '');
        input.rows = i === 12 ? 6 : 2;
        input.value = dayEntries[i] || '';
        input.dataset.index = i;
        // 移除 placeholder
        
        input.addEventListener('input', (e) => {
            updateEntry(i, e.target.value);
        });
        
        inputWrapper.appendChild(input);
        
        // 最后一个输入框不添加下拉按钮
        if (i < 12) {
            const dropdownBtn = document.createElement('button');
            dropdownBtn.className = 'dropdown-trigger';
            dropdownBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
            dropdownBtn.title = '选择默认事项';
            
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // 检查是否已经打开了这个按钮的下拉菜单
                if (currentDropdownMenu) {
                    // 如果已经打开，关闭它
                    currentDropdownMenu.remove();
                    currentDropdownMenu = null;
                } else {
                    // 否则打开下拉菜单
                    showDropdown(dropdownBtn, i, input);
                }
            });
            
            inputWrapper.appendChild(dropdownBtn);
        }
        
        entryDiv.appendChild(inputWrapper);
        container.appendChild(entryDiv);

        if (i === 3 || i === 7) {
            const separator = document.createElement('div');
            separator.className = 'entry-separator';
            container.appendChild(separator);
        }
    }
}

// 更新条目
function updateEntry(index, value) {
    const dateKey = formatDate(currentDate);
    if (!entries[dateKey]) {
        entries[dateKey] = {
            data: Array(13).fill(''),
            lastModified: Date.now()
        };
    }
    entries[dateKey].data[index] = value;
    entries[dateKey].lastModified = Date.now();
    saveLocalData();
}

// 获取当前日期的下拉选项（默认模板 + 当天已写入的条目）
function getDropdownOptions() {
    const dateKey = formatDate(currentDate);
    const dayEntry = entries[dateKey];
    const todayItems = [];
    if (dayEntry && dayEntry.data) {
        dayEntry.data.forEach(item => {
            if (item && item.trim() && !todayItems.includes(item.trim()) && !defaultTemplates.includes(item.trim())) {
                todayItems.push(item.trim());
            }
        });
    }
    return [...todayItems, ...defaultTemplates];
}

// 显示下拉菜单
function showDropdown(button, index, input) {
    const menu = document.createElement('div');
    menu.className = 'dropdown-menu';
    
    const options = getDropdownOptions();
    
    options.forEach(template => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = template;
        item.addEventListener('click', () => {
            input.value = template;
            updateEntry(index, template);
            menu.remove();
            currentDropdownMenu = null;
        });
        menu.appendChild(item);
    });
    
    // 添加清空选项
    const clearItem = document.createElement('div');
    clearItem.className = 'dropdown-item';
    clearItem.textContent = '清空';
    clearItem.style.color = '#ef4444';
    clearItem.addEventListener('click', () => {
        input.value = '';
        updateEntry(index, '');
        menu.remove();
        currentDropdownMenu = null;
    });
    menu.appendChild(clearItem);
    
    // 先添加到 DOM 以获取实际宽度
    menu.style.visibility = 'hidden';
    document.body.appendChild(menu);
    
    const menuWidth = menu.offsetWidth;
    const inputRect = input.getBoundingClientRect();
    let menuLeft = inputRect.right - menuWidth;
    if (menuLeft < 8) {
        menuLeft = 8;
    }
    menu.style.left = `${menuLeft}px`;
    menu.style.top = `${inputRect.bottom + 4}px`;
    menu.style.visibility = 'visible';
    
    currentDropdownMenu = menu;
}

// 初始化事件监听器
function initEventListeners() {
    // 前一天
    document.getElementById('prev-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateDisplay();
        renderEntries();
    });
    
    // 后一天
    document.getElementById('next-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateDisplay();
        renderEntries();
    });
    
    // 设置按钮
    document.getElementById('settings-btn').addEventListener('click', () => {
        openModal('settings-modal');
    });
    
    // 关闭设置
    document.getElementById('close-settings').addEventListener('click', () => {
        closeModal('settings-modal');
    });
    
    // 保存设置
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    
    // 检查连接
    document.getElementById('check-connection').addEventListener('click', async () => {
        // 先保存当前设置
        saveSettings();
        
        try {
            showLoading('正在检查连接...');
            const success = await checkS3Connect((error) => {
                console.error('连接检查失败:', error);
            });
            
            hideLoading();
            if (success) {
                showToast('连接成功！');
            } else {
                showToast('连接失败，请检查配置');
            }
        } catch (error) {
            hideLoading();
            console.error('检查连接时出错:', error);
            showToast('检查连接时出错: ' + error.message);
        }
    });
    
    // 同步按钮
    document.getElementById('sync-btn').addEventListener('click', syncToS3);
    
    // 点击模态框背景关闭
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        // 关闭下拉菜单
        if (currentDropdownMenu) {
            // 如果点击不在下拉菜单内
            if (!currentDropdownMenu.contains(e.target)) {
                currentDropdownMenu.remove();
                currentDropdownMenu = null;
            }
        }
    });
}

// 打开模态框
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// 关闭模态框
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// 显示加载遮罩
function showLoading(text = '同步中...') {
    document.getElementById('loading-text').textContent = text;
    document.getElementById('loading-overlay').classList.add('active');
}

// 隐藏加载遮罩
function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('active');
}

// 显示提示消息
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// 检查 S3 配置
function isS3Configured() {
    return settings.endpoint && settings.endpoint.trim() && 
           settings.accessKey && settings.accessKey.trim() && 
           settings.secretKey && settings.secretKey.trim() && 
           settings.bucket && settings.bucket.trim();
}

// 检查 S3 连接
async function checkS3Connect(callbackFunc) {
    if (!isS3Configured()) {
        const error = new Error('S3 配置不完整');
        if (callbackFunc) callbackFunc(error);
        return false;
    }
    
    try {
        const s3Client = createS3Client();
        
        const confCmd = {
            Bucket: settings.bucket,
            MaxKeys: 10
        };
        
        const results = await s3Client.send(new ListObjectsV2Command(confCmd));
        
        if (!results || !results.$metadata || !results.$metadata.httpStatusCode) {
            throw new Error('无效的 S3 响应');
        }
        
        if (results.$metadata.httpStatusCode !== 200) {
            throw new Error(`HTTP 状态码: ${results.$metadata.httpStatusCode}`);
        }
        
        return true;
    } catch (err) {
        console.error('S3 连接检查失败:', err);
        if (callbackFunc) callbackFunc(err);
        return false;
    }
}

// 同步到 S3
async function syncToS3() {
    if (!isS3Configured()) {
        showToast('请先配置 S3 设置');
        openModal('settings-modal');
        return;
    }
    
    try {
        showLoading('正在同步...');
        
        // 1. 先从 S3 拉取最新数据（包含云端修改时间）
        const cloudLastModified = await fetchFromS3();
        
        // 2. 获取当前日期的数据
        const dateKey = formatDate(currentDate);
        const currentEntry = entries[dateKey];
        const localLastModified = currentEntry?.lastModified || 0;
        
        // 3. 比较修改时间：如果云端更新则跳过上传
        if (cloudLastModified > localLastModified && cloudLastModified > 0) {
            hideLoading();
            showToast('云端数据更新，已跳过上传');
            return;
        }
        
        // 4. 上传当前日期的数据到 S3
        await uploadToS3(currentEntry?.data || Array(13).fill(''));
        
        hideLoading();
        showToast('同步成功');
    } catch (error) {
        hideLoading();
        console.error('同步失败:', error);
        showToast('同步失败: ' + error.message);
    }
}

// 从 S3 拉取数据（智能合并）
async function fetchFromS3() {
    if (!isS3Configured()) {
        // console.log('S3 未配置，跳过拉取');
        return 0;
    }
    
    // console.log('开始从 S3 拉取数据');
    // console.log('S3 配置:', {
    //     endpoint: settings.endpoint,
    //     bucket: settings.bucket,
    //     region: settings.region
    // });
    
    try {
        const s3Client = createS3Client();
        const dateKey = formatDate(currentDate);
        const fileName = `${dateKey}.md`;
        
        const command = new GetObjectCommand({
            Bucket: settings.bucket,
            Key: fileName
        });
        
        // console.log('发送 S3 请求:', command.input);
        const response = await s3Client.send(command);
        
        // console.log('S3 响应状态:', response.$metadata.httpStatusCode);
        
        // 获取云端文件的最后修改时间
        const cloudLastModified = response.LastModified ? response.LastModified.getTime() : 0;
        
        // 处理响应体
        const body = await response.Body?.transformToString();
        if (body) {
            console.log('从 S3 获取的 MD 内容:', body);
            
            // 解析 MD 内容为条目数组
            const cloudEntries = parseMdToEntries(body);
            
            // 获取本地现有数据
            const localEntry = entries[dateKey];
            const localEntries = (localEntry && localEntry.data) || Array(13).fill('');
            
            // 获取本地修改时间
            const localLastModified = localEntry?.lastModified || 0;
            
            // 如果云端数据更新（云端时间 > 本地时间），直接覆盖本地所有数据
            if (cloudLastModified > localLastModified) {
                entries[dateKey] = {
                    data: cloudEntries,
                    lastModified: cloudLastModified
                };
                console.log('云端数据更新，已覆盖本地数据');
            } else {
                // 本地更新更晚或相同，保留本地数据（智能合并：保留本地非空行）
                const mergedEntries = mergeEntries(localEntries, cloudEntries);
                entries[dateKey] = {
                    data: mergedEntries,
                    lastModified: localLastModified
                };
                // console.log('本地数据更新更晚，保留本地数据');
            }
            
            saveLocalData();
            renderEntries();
            // console.log('S3 数据拉取成功（已智能合并）');
        }
        
        return cloudLastModified;
    } catch (error) {
        console.error('从 S3 拉取数据失败:', error);
        // console.error('错误详情:', {
        //     name: error.name,
        //     message: error.message,
        //     stack: error.stack,
        //     $metadata: error.$metadata
        // });
        if (error.name !== 'NoSuchKey') {
            throw error;
        } else {
            // console.log('文件不存在，这是首次同步的正常情况');
        }
        
        return 0;
    }
}

// 智能合并本地和云端数据
function mergeEntries(localEntries, cloudEntries) {
    const merged = [];
    
    for (let i = 0; i < 13; i++) {
        const localValue = localEntries[i] || '';
        const cloudValue = cloudEntries[i] || '';
        
        // 如果本地有内容（非空），保留本地；否则使用云端数据
        if (localValue.trim() !== '') {
            merged.push(localValue);
        } else {
            merged.push(cloudValue);
        }
    }
    
    return merged;
}

// 上传到 S3
async function uploadToS3(data) {
    if (!isS3Configured()) {
        throw new Error('请先配置 S3 设置');
    }
    
    try {
        const s3Client = createS3Client();
        const dateKey = formatDate(currentDate);
        const fileName = `${dateKey}.md`;
        
        // 将条目数组转换为 MD 内容
        const mdContent = entriesToMd(data);
        
        const command = new PutObjectCommand({
            Bucket: settings.bucket,
            Key: fileName,
            Body: mdContent,
            ContentType: 'text/markdown',
            // 启用服务端加密（SSE-OSS）
            ServerSideEncryption: 'AES256'
        });
        
        await s3Client.send(command);
    } catch (error) {
        console.error('上传到 S3 失败:', error);
        throw error;
    }
}

// 自动从 S3 拉取
async function autoFetchFromS3() {
    if (isS3Configured()) {
        try {
            showLoading('正在加载数据...');
            await fetchFromS3();
            hideLoading();
        } catch (error) {
            hideLoading();
            console.error('自动拉取失败:', error);
            // 自动拉取失败不影响使用
        }
    }
}

// S3 客户端单例实例
let s3ClientInstance = null;
let lastConfigHash = null;

// 生成配置哈希值，用于检测配置是否变化
function getConfigHash() {
    return `${settings.endpoint}-${settings.region}-${settings.accessKey}-${settings.secretKey}`;
}

// 创建 S3 客户端（单例模式）
function createS3Client() {
    const currentConfigHash = getConfigHash();
    
    // 如果配置没有变化且已有实例，直接返回
    if (s3ClientInstance && lastConfigHash === currentConfigHash) {
        return s3ClientInstance;
    }
    
    let endpoint = settings.endpoint;
    // 强制使用 HTTPS 确保传输层加密
    if (!endpoint.startsWith('https://')) {
        if (endpoint.startsWith('http://')) {
            endpoint = endpoint.replace('http://', 'https://');
        } else {
            endpoint = 'https://' + endpoint;
        }
    }
    
    s3ClientInstance = new S3Client({
        region: settings.region,
        endpoint: endpoint,
        forcePathStyle: false,
        credentials: {
            accessKeyId: settings.accessKey,
            secretAccessKey: settings.secretKey
        }
    });
    
    lastConfigHash = currentConfigHash;
    return s3ClientInstance;
}

// 将条目数组转换为 MD 内容
function entriesToMd(entriesArray) {
    let mdContent = `# ${formatDate(currentDate)} 日记\n\n`;
    
    // 添加前12个输入框的内容（每行一个）
    for (let i = 0; i < 12; i++) {
        const content = entriesArray[i] || '';
        mdContent += `${content}\n\n`;
    }
    
    // 添加今日感想部分
    const thoughts = entriesArray[12] || '';
    mdContent += `## 今日感想\n\n${thoughts}\n`;
    
    return mdContent;
}

// 解析 MD 内容为条目数组
function parseMdToEntries(mdContent) {
    const entriesArray = Array(13).fill('');
    
    // 简单解析 MD 内容
    const lines = mdContent.split('\n');
    let contentLines = [];
    let inMainContent = false;
    let inThoughts = false;
    
    lines.forEach(line => {
        // 跳过空行和标题行
        if (line.trim() === '' || line.startsWith('# ')) {
            return;
        }
        
        // 检查是否是今日感想标题
        if (line.startsWith('## 今日感想')) {
            inMainContent = false;
            inThoughts = true;
            return;
        }
        
        // 收集主要内容（前12个输入框）
        if (!inThoughts) {
            inMainContent = true;
            contentLines.push(line);
        } else {
            // 收集今日感想内容（第13个输入框）
            if (entriesArray[12]) {
                entriesArray[12] += '\n' + line;
            } else {
                entriesArray[12] = line;
            }
        }
    });
    
    // 将前12行内容分配到对应的输入框
    for (let i = 0; i < 12 && i < contentLines.length; i++) {
        entriesArray[i] = contentLines[i].trim();
    }
    
    // 确保今日感想内容被正确处理
    if (entriesArray[12]) {
        entriesArray[12] = entriesArray[12].trim();
    }
    
    return entriesArray;
}
