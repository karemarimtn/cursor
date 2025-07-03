# MCP Guide - Model Context Protocol 資料サイト

MCPについてまとめたリッチなホームページです。モダンで美しいデザインと多機能なインターフェースを提供します。

## 📋 特徴

### 🎨 デザイン機能
- **モダンなUI/UX**: 美しいグラデーション、カード、アニメーション
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **ダークモード**: 🌙/☀️ ボタンで切り替え可能
- **アニメーション効果**: スクロールに応じた要素の表示

### 🔧 機能
- **スムーズスクロール**: 目次からセクションへの滑らかな移動
- **検索機能**: コンテンツ内検索（リアルタイム）
- **進捗表示**: ページ読み進み度の可視化
- **印刷対応**: 🖨️ ボタンでプリント最適化
- **スクロール・トゥ・トップ**: ↑ ボタンで即座にトップへ
- **モバイルメニュー**: ハンバーガーメニュー対応

### 📱 ユーザビリティ
- **アクティブセクション**: 現在位置のハイライト
- **設定の保存**: ダークモード設定の記憶
- **アクセシビリティ**: キーボードナビゲーション対応
- **パフォーマンス最適化**: 遅延読み込み、効率的なアニメーション

## 📂 ファイル構成

```
.
├── index.html          # メインHTMLファイル
├── styles.css          # CSSスタイルシート
├── script.js           # JavaScript機能
├── MCP資料.md         # 元の資料（Markdown形式）
└── README.md          # このファイル
```

## 🚀 デプロイ方法

### 1. ローカルでの表示

最も簡単な方法：

```bash
# Python 3を使用
python -m http.server 8000

# または Node.js を使用
npx serve .

# ブラウザで http://localhost:8000 を開く
```

### 2. GitHub Pagesでの公開

1. GitHubにリポジトリを作成
2. ファイルをアップロード
3. Settings → Pages → Source を "Deploy from a branch" に設定
4. Branch を "main" に設定
5. 数分後に `https://yourusername.github.io/repository-name` でアクセス可能

### 3. Netlifyでの公開

1. [Netlify](https://netlify.com) にアカウント作成
2. "New site from Git" を選択
3. GitHubリポジトリを接続
4. 自動デプロイ設定完了

### 4. Vercelでの公開

1. [Vercel](https://vercel.com) にアカウント作成
2. "New Project" → GitHubリポジトリを選択
3. そのままデプロイ

### 5. 他のホスティングサービス

以下のサービスでも簡単に公開できます：
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **Surge.sh**

## 🛠️ カスタマイズ

### カラーテーマの変更

`styles.css` の `:root` セクションで色を変更：

```css
:root {
  --primary-color: #6366f1;    /* メインカラー */
  --secondary-color: #8b5cf6;  /* セカンダリカラー */
  --accent-color: #06b6d4;     /* アクセントカラー */
  /* ... その他の色設定 */
}
```

### コンテンツの編集

`index.html` のコンテンツセクションを直接編集するか、`MCP資料.md` を更新してHTMLを再生成。

### 機能の追加/削除

`script.js` の初期化関数で機能をオン/オフ：

```javascript
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initActiveSection();
    // initDarkMode();      // ダークモードを無効化
    // initSearch();        // 検索機能を無効化
    // ... その他の機能
});
```

## 🔧 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (カスタムプロパティ)
  - Animations & Transitions
  - Media Queries (レスポンシブ)
- **JavaScript (ES6+)**:
  - Intersection Observer API
  - Local Storage API
  - Service Worker (PWA対応)

## 📊 パフォーマンス

- **軽量**: 外部依存なし、純粋なHTML/CSS/JavaScript
- **高速読み込み**: 最適化された画像とフォント
- **SEO対応**: メタタグ、構造化データ対応
- **PWA対応**: オフライン表示可能（Service Worker）

## 🌐 ブラウザ対応

- **モダンブラウザ**: Chrome、Firefox、Safari、Edge の最新版
- **モバイル**: iOS Safari、Android Chrome
- **IE11**: 基本機能のみ対応（高度な機能は非対応）

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。自由に使用、修正、配布できます。

## 🤝 貢献

改善提案やバグ報告は歓迎です：

1. Issues を作成
2. Pull Request を送信
3. フィードバックを提供

## 📞 サポート

質問や問題がある場合：

1. README.md を確認
2. Issues で検索
3. 新しい Issue を作成

---

**🌟 このサイトがMCPの理解に役立てば幸いです！** 

http://localhost:8000 