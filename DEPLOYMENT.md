# 香息指南部署地址

## 主域名

- `https://miana.top/`

代码中的 `metadataBase` 和结构化数据主站地址已经改为 `https://miana.top`。

## Path 地址

- `https://miana.top/aromatherapy`

项目已新增 `/aromatherapy` 页面，内容与首页一致，方便你用主域名下的固定路径访问香薰站点。

## 三级域名地址

建议使用：

- `https://xiangxi.miana.top/`

代码无法直接创建 DNS 记录。你需要在域名 DNS 服务商或部署平台里添加：

- 类型：`CNAME`
- 主机记录：`xiangxi`
- 记录值：你的部署平台提供的域名，例如 Vercel/Netlify/服务器反代域名

如果你的部署平台要求绑定域名，也需要在平台后台添加 `xiangxi.miana.top`。
