# 🚀 Shadowrocket Config

> YouTube Premium + Locket Gold + PicsArt Pro + Duolingo Super + ADBlock

[🇻🇳 Tiếng Việt](#-tiếng-việt) | [🇨🇳 中文](#-中文) | [🇯🇵 日本語](#-日本語)

---

## 🇻🇳 Tiếng Việt

### ✨ Tính năng

| App          | Tính năng mở khóa                                      | Script                          |
| ------------ | ------------------------------------------------------ | ------------------------------- |
| **YouTube**  | Premium (không quảng cáo, phát nền, PiP, chặn Sponsor) | `youtube.response.js`           |
| **Locket**   | Gold (vĩnh viễn đến năm 9999)                          | `Locket.js` + `deleteHeader.js` |
| **PicsArt**  | Pro (mở khóa công cụ AI + Premium)                     | `PicsArt.js`                    |
| **Duolingo** | Super (học không giới hạn, không quảng cáo)            | `duolingo.js`                   |
| **ADBlock**  | Chặn quảng cáo toàn hệ thống iOS (cập nhật mỗi ngày)   | Rule-Set online                 |

### 📦 Cài đặt

1. Tải app **Shadowrocket** trên App Store
2. Mở Shadowrocket → **Config** → bấm **(+)** → dán link sau:
   ```
   https://raw.githubusercontent.com/dangdinhluc/shadowrocket/main/shadowrocket.config
   ```
3. Bấm **Download** → chọn file config vừa tải → bấm **Use**
4. Vào **Settings → Certificate** → cài đặt và tin cậy chứng chỉ CA
5. Bật VPN → Mở YouTube, Locket, PicsArt, Duolingo kiểm tra ✅

### 📂 Cấu trúc thư mục

```
├── shadowrocket.config     # File cấu hình chính
└── js/
    ├── youtube.response.js # YouTube Premium (227KB - Protobuf decoder)
    ├── Locket.js           # Locket Gold
    ├── deleteHeader.js     # Chống cache RevenueCat cho Locket
    ├── PicsArt.js          # PicsArt Pro
    ├── duolingo.js         # Duolingo Super
    ├── sub-store-0.min.js  # Sub-Store giao diện
    ├── sub-store-1.min.js  # Sub-Store lõi
    └── cron-sync-artifacts.min.js  # Sub-Store đồng bộ
```

### ⚙️ Tuỳ chỉnh YouTube

Trong file `shadowrocket.config`, dòng `argument` của YouTube hỗ trợ các tham số sau:

| Tham số          | Mặc định | Mô tả                             |
| ---------------- | -------- | --------------------------------- |
| `lyricLang`      | `"vi"`   | Ngôn ngữ lời bài hát              |
| `captionLang`    | `"vi"`   | Ngôn ngữ phụ đề mặc định          |
| `blockUpload`    | `true`   | Ẩn nút tải video lên              |
| `blockImmersive` | `true`   | Ẩn chế độ xem toàn màn hình mới   |
| `blockSponsor`   | `true`   | Chặn quảng cáo do YouTuber tự nói |
| `blockShorts`    | `false`  | Xoá hoàn toàn video Shorts        |

### ⚠️ Lưu ý

- Cần cài đặt **chứng chỉ CA** của Shadowrocket để MITM hoạt động
- Bộ ADBlock tải danh sách từ mạng, lần đầu cần có internet
- Sub-Store là tuỳ chọn, có thể xoá nếu không cần quản lý proxy

---

## 🇨🇳 中文

### ✨ 功能

| 应用         | 解锁功能                                        | 脚本                            |
| ------------ | ----------------------------------------------- | ------------------------------- |
| **YouTube**  | Premium（去广告、后台播放、画中画、跳过赞助商） | `youtube.response.js`           |
| **Locket**   | Gold（永久有效至9999年）                        | `Locket.js` + `deleteHeader.js` |
| **PicsArt**  | Pro（解锁AI工具和高级功能）                     | `PicsArt.js`                    |
| **Duolingo** | Super（无限学习、无广告）                       | `duolingo.js`                   |
| **ADBlock**  | 全系统广告拦截（每日自动更新）                  | 在线规则集                      |

### 📦 安装方法

1. 在 App Store 下载 **Shadowrocket**
2. 打开 Shadowrocket → **配置** → 点击 **(+)** → 粘贴以下链接：
   ```
   https://raw.githubusercontent.com/dangdinhluc/shadowrocket/main/shadowrocket.config
   ```
3. 点击 **下载** → 选择刚下载的配置文件 → 点击 **使用**
4. 进入 **设置 → 证书** → 安装并信任 CA 证书
5. 开启 VPN → 打开 YouTube、Locket、PicsArt、Duolingo 验证 ✅

### ⚙️ YouTube 自定义参数

| 参数             | 默认值  | 说明            |
| ---------------- | ------- | --------------- |
| `lyricLang`      | `"vi"`  | 歌词语言        |
| `captionLang`    | `"vi"`  | 默认字幕语言    |
| `blockUpload`    | `true`  | 隐藏上传按钮    |
| `blockImmersive` | `true`  | 隐藏沉浸式模式  |
| `blockSponsor`   | `true`  | 跳过赞助商广告  |
| `blockShorts`    | `false` | 完全移除 Shorts |

### ⚠️ 注意事项

- 需要安装 Shadowrocket 的 **CA 证书** 才能使 MITM 正常工作
- ADBlock 规则从网络加载，首次使用需要网络连接
- Sub-Store 为可选组件，不需要管理代理节点可删除

---

## 🇯🇵 日本語

### ✨ 機能

| アプリ       | 解除機能                                                           | スクリプト                      |
| ------------ | ------------------------------------------------------------------ | ------------------------------- |
| **YouTube**  | Premium（広告なし、バックグラウンド再生、PiP、スポンサーブロック） | `youtube.response.js`           |
| **Locket**   | Gold（9999年まで永久有効）                                         | `Locket.js` + `deleteHeader.js` |
| **PicsArt**  | Pro（AIツールとプレミアム機能を解除）                              | `PicsArt.js`                    |
| **Duolingo** | Super（無制限学習、広告なし）                                      | `duolingo.js`                   |
| **ADBlock**  | iOS全体の広告ブロック（毎日自動更新）                              | オンラインルールセット          |

### 📦 インストール方法

1. App Store から **Shadowrocket** をダウンロード
2. Shadowrocket を開く → **設定** → **(+)** をタップ → 以下のリンクを貼り付け：
   ```
   https://raw.githubusercontent.com/dangdinhluc/shadowrocket/main/shadowrocket.config
   ```
3. **ダウンロード** をタップ → ダウンロードした設定ファイルを選択 → **使用** をタップ
4. **設定 → 証明書** → CA証明書をインストールして信頼する
5. VPN をオン → YouTube、Locket、PicsArt、Duolingo を開いて確認 ✅

### ⚙️ YouTube カスタマイズパラメータ

| パラメータ       | デフォルト | 説明                       |
| ---------------- | ---------- | -------------------------- |
| `lyricLang`      | `"vi"`     | 歌詞の言語                 |
| `captionLang`    | `"vi"`     | デフォルト字幕言語         |
| `blockUpload`    | `true`     | アップロードボタンを非表示 |
| `blockImmersive` | `true`     | 没入型モードを非表示       |
| `blockSponsor`   | `true`     | スポンサー広告をスキップ   |
| `blockShorts`    | `false`    | Shorts を完全に削除        |

### ⚠️ 注意事項

- MITM を動作させるには Shadowrocket の **CA証明書** のインストールが必要です
- ADBlock ルールはネットワークから読み込まれ、初回使用時にはインターネット接続が必要です
- Sub-Store はオプションです。プロキシノード管理が不要な場合は削除可能です

---

## 📜 Credits

- [duyvinh09/Module_IOS](https://github.com/duyvinh09/Module_IOS) — YouTube, Locket, PicsArt scripts
- [app2smile/rules](https://github.com/app2smile/rules) — Spotify scripts
- [sub-store-org/Sub-Store](https://github.com/sub-store-org/Sub-Store) — Sub-Store
- [Johnshall/Shadowrocket-ADBlock-Rules-Forever](https://github.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever) — ADBlock rules

## ⚖️ Disclaimer

This project is for **educational and research purposes only**. Please support the developers by purchasing official subscriptions.
