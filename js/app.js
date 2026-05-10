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
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// 默认事项模板
const defaultTemplates = [
    '今日目标',
    '工作任务',
    '学习计划',
    '运动记录',
    '饮食习惯',
    '睡眠状况',
    '心情记录',
    '重要事项',
    '待办事项',
    '阅读记录',
    '社交活动',
    '反思总结',
    '明日计划'
];

// 日期选择器状态
let datePickerOpen = false;
let datePickerDate = new Date();
let datePickerView = 'days'; // 'days'、'year'、'month'
let currentDropdownMenu = null;

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
function initDateDisplay() {
    updateDateDisplay();
    
    // 点击日期显示日期选择器
    const dateDisplay = document.getElementById('current-date');
    dateDisplay.addEventListener('click', (e) => {
        toggleDatePicker();
    });
}

// 切换日期选择器
function toggleDatePicker() {
    if (datePickerOpen) {
        hideDatePicker();
    } else {
        showDatePicker();
    }
}

// 显示日期选择器
function showDatePicker() {
    datePickerDate = new Date(currentDate);
    datePickerView = 'days'; // 确保打开时显示日视图
    
    // 移除已存在的日期选择器
    hideDatePicker();
    
    // 创建日期选择器
    const datePicker = document.createElement('div');
    datePicker.className = 'date-picker';
    datePicker.id = 'date-picker';
    datePicker.innerHTML = createDatePickerHTML();
    
    // 添加到日期显示容器
    const dateDisplay = document.getElementById('current-date');
    dateDisplay.style.position = 'relative';
    dateDisplay.appendChild(datePicker);
    
    // 绑定事件
    bindDatePickerEvents(datePicker);
    
    // 最后设置为打开状态
    datePickerOpen = true;
}

// 隐藏日期选择器
function hideDatePicker() {
    const datePicker = document.getElementById('date-picker');
    if (datePicker) {
        datePicker.remove();
    }
    datePickerOpen = false;
}

// 创建日期选择器 HTML
function createDatePickerHTML() {
    const year = datePickerDate.getFullYear();
    const month = datePickerDate.getMonth();
    const today = new Date();
    
    // 生成星期标题
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    let weekdaysHTML = weekdays.map(day => 
        `<div class="date-picker-weekday">${day}</div>`
    ).join('');
    
    // 生成日期
    let daysHTML = '';
    
    if (datePickerView === 'days') {
        // 获取月份信息
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDay = firstDay.getDay(); // 0-6, 0 is Sunday
        const daysInMonth = lastDay.getDate();
        
        // 空白填充
        for (let i = 0; i < startDay; i++) {
            daysHTML += '<div class="date-picker-day empty"></div>';
        }
        
        // 日期
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isSelected = formatDate(date) === formatDate(currentDate);
            const isToday = formatDate(date) === formatDate(today);
            
            let classes = 'date-picker-day';
            if (isSelected) classes += ' selected';
            if (isToday) classes += ' today';
            
            daysHTML += `<div class="${classes}" data-day="${day}">${day}</div>`;
        }
    }
    
    // 年视图的年范围
    const yearStart = Math.floor(year / 12) * 12;
    const yearEnd = yearStart + 11;
    
    return `
        <div class="date-picker-header">
            <button class="date-picker-prev-btn" title="上一年" data-action="prev">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <div class="date-picker-current">
                <button class="date-picker-year-btn" data-view="year">${year}年</button>
                <button class="date-picker-month-btn" data-view="month">${month + 1}月</button>
            </div>
            <button class="date-picker-next-btn" title="下一年" data-action="next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
        
        <!-- 年视图 -->
        <div class="date-picker-view" style="display: ${datePickerView === 'year' ? 'block' : 'none'};">
            <div class="date-picker-year-range">${yearStart}-${yearEnd}</div>
            <div class="date-picker-grid date-picker-year-grid">
                ${generateYearGridHTML(yearStart, year)}
            </div>
        </div>
        
        <!-- 月视图 -->
        <div class="date-picker-view" style="display: ${datePickerView === 'month' ? 'block' : 'none'};">
            <div class="date-picker-grid date-picker-month-grid">
                ${generateMonthGridHTML(month)}
            </div>
        </div>
        
        <!-- 日视图 -->
        <div class="date-picker-view" style="display: ${datePickerView === 'days' ? 'block' : 'none'};">
            <div class="date-picker-weekdays">${weekdaysHTML}</div>
            <div class="date-picker-days">${daysHTML}</div>
        </div>
    `;
}

// 生成年份网格HTML
function generateYearGridHTML(yearStart, currentYear) {
    let html = '';
    for (let i = 0; i < 12; i++) {
        const year = yearStart + i;
        const isSelected = year === currentYear;
        html += `<button class="date-picker-grid-btn ${isSelected ? 'active' : ''}" data-year="${year}">${year}</button>`;
    }
    return html;
}

// 生成月份网格HTML
function generateMonthGridHTML(currentMonth) {
    let html = '';
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    for (let i = 0; i < 12; i++) {
        const isSelected = i === currentMonth;
        html += `<button class="date-picker-grid-btn ${isSelected ? 'active' : ''}" data-month="${i}">${months[i]}</button>`;
    }
    return html;
}

// 绑定日期选择器事件
function bindDatePickerEvents(datePicker) {
    // 左右箭头按钮
    datePicker.querySelector('.date-picker-prev-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (datePickerView === 'days') {
            // 减少一个月
            datePickerDate.setMonth(datePickerDate.getMonth() - 1);
        } else if (datePickerView === 'year') {
            // 减少一年
            datePickerDate.setFullYear(datePickerDate.getFullYear() - 12);
        } else {
            // 月份视图，减少一年
            datePickerDate.setFullYear(datePickerDate.getFullYear() - 1);
        }
        updateDatePicker();
    });
    
    datePicker.querySelector('.date-picker-next-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (datePickerView === 'days') {
            // 增加一个月
            datePickerDate.setMonth(datePickerDate.getMonth() + 1);
        } else if (datePickerView === 'year') {
            // 增加一年
            datePickerDate.setFullYear(datePickerDate.getFullYear() + 12);
        } else {
            // 月份视图，增加一年
            datePickerDate.setFullYear(datePickerDate.getFullYear() + 1);
        }
        updateDatePicker();
    });
    
    // 年份按钮
    const yearBtn = datePicker.querySelector('.date-picker-year-btn');
    if (yearBtn) {
        yearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            datePickerView = 'year';
            updateDatePicker();
        });
    }
    
    // 月份按钮
    const monthBtn = datePicker.querySelector('.date-picker-month-btn');
    if (monthBtn) {
        monthBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            datePickerView = 'month';
            updateDatePicker();
        });
    }
    
    // 年份选择
    datePicker.querySelectorAll('[data-year]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const year = parseInt(btn.dataset.year);
            datePickerDate.setFullYear(year);
            datePickerView = 'month'; // 选择年份后跳到月份选择
            updateDatePicker();
        });
    });
    
    // 月份选择
    datePicker.querySelectorAll('[data-month]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const month = parseInt(btn.dataset.month);
            datePickerDate.setMonth(month);
            datePickerView = 'days'; // 选择月份后跳到日视图
            updateDatePicker();
        });
    });
    
    // 选择日期
    datePicker.querySelectorAll('.date-picker-day:not(.empty)').forEach(day => {
        day.addEventListener('click', (e) => {
            e.stopPropagation();
            const dayNum = parseInt(day.dataset.day);
            currentDate = new Date(datePickerDate.getFullYear(), datePickerDate.getMonth(), dayNum);
            updateDateDisplay();
            renderEntries();
            hideDatePicker();
        });
    });
}

// 更新日期选择器
function updateDatePicker() {
    const datePicker = document.getElementById('date-picker');
    if (datePicker) {
        datePicker.innerHTML = createDatePickerHTML();
        bindDatePickerEvents(datePicker);
    }
}

// 更新日期显示
function updateDateDisplay() {
    document.getElementById('current-date').textContent = formatDate(currentDate);
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
    const dayEntries = entries[dateKey] || Array(13).fill('');
    
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
    }
}

// 更新条目
function updateEntry(index, value) {
    const dateKey = formatDate(currentDate);
    if (!entries[dateKey]) {
        entries[dateKey] = Array(13).fill('');
    }
    entries[dateKey][index] = value;
    saveLocalData();
}

// 显示下拉菜单
function showDropdown(button, index, input) {
    // 关闭日期选择器（如果打开）
    if (datePickerOpen) {
        hideDatePicker();
    }
    
    const menu = document.createElement('div');
    menu.className = 'dropdown-menu';
    
    // 找出最长的文本
    let maxLength = 0;
    defaultTemplates.forEach(template => {
        if (template.length > maxLength) {
            maxLength = template.length;
        }
    });
    if ('清空'.length > maxLength) {
        maxLength = '清空'.length;
    }
    
    // 计算宽度
    const estimatedWidth = maxLength * 16 + 32; // 每个字符约16px + padding
    
    defaultTemplates.forEach(template => {
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
    
    // 计算位置 - 右对齐输入框的末尾
    const inputRect = input.getBoundingClientRect();
    menu.style.right = `${window.innerWidth - inputRect.right}px`;
    menu.style.top = `${inputRect.bottom + 4}px`;
    menu.style.width = `${estimatedWidth}px`;
    
    document.body.appendChild(menu);
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
    
    // 点击其他地方关闭日期选择器和下拉菜单
    document.addEventListener('click', (e) => {
        // 关闭日期选择器
        if (datePickerOpen) {
            const datePicker = document.getElementById('date-picker');
            const dateDisplay = document.getElementById('current-date');
            
            // 如果点击不在日期选择器内，且不在日期显示区域
            if (datePicker && !datePicker.contains(e.target) && !dateDisplay.contains(e.target)) {
                hideDatePicker();
            }
        }
        
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
        
        // 1. 先从 S3 拉取最新数据
        await fetchFromS3();
        
        // 2. 获取当前日期的数据
        const dateKey = formatDate(currentDate);
        const currentData = entries[dateKey] || Array(13).fill('');
        
        // 3. 上传当前日期的数据到 S3
        await uploadToS3(currentData);
        
        hideLoading();
        showToast('同步成功');
    } catch (error) {
        hideLoading();
        console.error('同步失败:', error);
        showToast('同步失败: ' + error.message);
    }
}

// 从 S3 拉取数据
async function fetchFromS3() {
    if (!isS3Configured()) {
        console.log('S3 未配置，跳过拉取');
        return;
    }
    
    console.log('开始从 S3 拉取数据');
    console.log('S3 配置:', {
        endpoint: settings.endpoint,
        bucket: settings.bucket,
        region: settings.region
    });
    
    try {
        const s3Client = createS3Client();
        const dateKey = formatDate(currentDate);
        const fileName = `${dateKey}.md`;
        
        const command = new GetObjectCommand({
            Bucket: settings.bucket,
            Key: fileName
        });
        
        console.log('发送 S3 请求:', command.input);
        const response = await s3Client.send(command);
        
        console.log('S3 响应状态:', response.$metadata.httpStatusCode);
        
        // 处理响应体
        const body = await response.Body?.transformToString();
        if (body) {
            console.log('从 S3 获取的 MD 内容:', body);
            
            // 解析 MD 内容为条目数组
            const entriesArray = parseMdToEntries(body);
            entries[dateKey] = entriesArray;
            
            saveLocalData();
            renderEntries();
            console.log('S3 数据拉取成功');
        }
    } catch (error) {
        console.error('从 S3 拉取数据失败:', error);
        console.error('错误详情:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            $metadata: error.$metadata
        });
        // 首次同步时文件不存在是正常的
        if (error.name !== 'NoSuchKey') {
            throw error;
        } else {
            console.log('文件不存在，这是首次同步的正常情况');
        }
    }
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
            ContentType: 'text/markdown'
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

// 创建 S3 客户端
function createS3Client() {
    let endpoint = settings.endpoint;
    if (!endpoint.startsWith('http://') && !endpoint.startsWith('https://')) {
        endpoint = 'https://' + endpoint;
    }
    
    return new S3Client({
        region: settings.region,
        endpoint: endpoint,
        forcePathStyle: false,
        credentials: {
            accessKeyId: settings.accessKey,
            secretAccessKey: settings.secretKey
        }
    });
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

// 生成预签名 URL
async function generatePresignedUrl(fileName, operation) {
    const s3Client = createS3Client();
    
    if (operation === 'getObject') {
        const command = new GetObjectCommand({
            Bucket: settings.bucket,
            Key: fileName
        });
        return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    } else {
        const command = new PutObjectCommand({
            Bucket: settings.bucket,
            Key: fileName,
            Body: "",
            ContentType: 'application/json'
        });
        return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    }
}

// 工具函数：SHA256 哈希
async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    return hashBuffer;
}

// 工具函数：HMAC-SHA256
async function hmacSha256(message, key) {
    const encoder = new TextEncoder();
    const keyData = typeof key === 'string' ? encoder.encode(key) : key;
    const messageData = encoder.encode(message);
    
    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
    return signature;
}

// 工具函数：十六进制编码
function hexEncode(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}