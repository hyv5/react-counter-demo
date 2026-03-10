# 🎯 React Counter Demo

一个简单的 React 计数器应用，用于测试完整的 CI/CD 流程。

## ✨ 功能

- ➕ 增加计数
- ➖ 减少计数（最小为 0）
- 🔄 重置计数
- 🎨 漂亮的渐变背景和毛玻璃效果

## 🌐 在线演示

**https://hyv5.github.io/react-counter-demo/**

## 🚀 技术栈

- **React 19** - 最新版本
- **Vite 7** - 快速构建工具
- **GitHub Actions** - 自动化 CI/CD
- **GitHub Pages** - 静态网站托管

## 📦 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🔧 CI/CD 流程

每次推送到 `main` 分支时会自动触发：

1. ✅ 安装依赖
2. ✅ 构建项目
3. ✅ 部署到 GitHub Pages
4. ✅ 生成构建摘要

查看 [Actions](https://github.com/hyv5/react-counter-demo/actions) 了解构建状态。

## 📝 项目结构

```
react-counter-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD 配置
├── src/
│   ├── App.jsx           # 主组件（Counter 逻辑）
│   ├── App.css           # 样式
│   └── main.jsx          # 入口文件
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 预览

![Demo](https://via.placeholder.com/600x400/667eea/ffffff?text=React+Counter+Demo)

---

**Created with ❤️ using React + Vite + GitHub Actions + GitHub Pages**
