import http.server
import socketserver
import os

# 设置服务器端口
PORT = 8001

# 更改当前工作目录到项目根目录
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# 创建服务器处理器
Handler = http.server.SimpleHTTPRequestHandler

# 创建并启动服务器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"服务器运行在 http://localhost:{PORT}")
    print(f"请在浏览器中打开 http://localhost:{PORT} 访问应用")
    print("按 Ctrl+C 停止服务器")
    httpd.serve_forever()
