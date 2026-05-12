const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 清理旧的构建目录
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });
console.log('Created dist directory');

// 复制样式文件
const srcCss = path.join(__dirname, 'styles', 'main.css');
const destCss = path.join(distDir, 'main.css');
fs.copyFileSync(srcCss, destCss);
console.log('Copied main.css to dist');

// 复制 flatpickr 样式文件
const flatpickrCss = path.join(__dirname, 'node_modules', 'flatpickr', 'dist', 'flatpickr.min.css');
const destFlatpickrCss = path.join(distDir, 'flatpickr.min.css');
fs.copyFileSync(flatpickrCss, destFlatpickrCss);
console.log('Copied flatpickr.min.css to dist');

// 执行 esbuild
execSync('esbuild js/app.js --bundle --outfile=dist/bundle.js --target=es6', { stdio: 'inherit' });

console.log('Build completed successfully');
