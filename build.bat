@echo off
node_modules\.bin\esbuild js/app.js --bundle --outfile=dist/bundle.js --target=es6
echo 构建完成！