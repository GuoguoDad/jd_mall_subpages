# 前言
该工程为android_mall的react-native子页面工程，基于0.70.1版本
- 用户设置

# 用户设置
<img src="images/userSetting.png" title="" alt="image" width="351">

# 目录说明：
```
├── android                    原生android工程
├── bundle                     打包生成目录
├── dist                       打包生成的中间目录
├── ios                        原生ios工程
├── mock                       模拟接口目录
├── src
│   ├── components             通用组件目录
│   ├── config                 环境配置
│   ├── http                   封装的axios库
│   ├── images                 图片
│   ├── kit                    工具
│   ├── pages                  页面目录
│   │   └── test-page          测试
│   ├── store
│   ├── index.tsx
│   └── routes.ts              路由信息
├── typings
│   └── global.d.ts            全局类型声明
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .prettierrc
├──  index.js                   入口
├── .package.json
├── .readme.md
└── .tsconfig.json
```

安装依赖
```bash
npm run install
```
运行安卓
```bash
npm run android
```
运行苹果
```bash
npm run ios
```

# 打包
```bash
npm run build
```

# 配置规则
1、设置页面: https://com.aries.com?pageCode=rn&bundleName=app&initRouteName=UserSetting
- 参数说明: bundleName(为后期多bundle留标识)

