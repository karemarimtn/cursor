# MCP Guide - Model Context Protocol 資料サイト

🌐 **ライブサイト**: [GitHub Pagesで公開中](https://your-username.github.io/your-repository-name)

## 📋 概要

Model Context Protocol (MCP) について詳しく解説するリッチなWebサイトです。

### 🎯 主な特徴
- **モダンなデザイン**: 美しいグラデーション、カード、アニメーション
- **レスポンシブ**: モバイル、タブレット、デスクトップ対応
- **インタラクティブ**: 検索、ダークモード、スムーズスクロール
- **高機能**: 進捗バー、印刷対応、アクセシビリティ

## 📂 ファイル構成

```
/
├── index.html          # メインHTMLファイル
├── styles.css          # CSSスタイルシート  
├── script.js           # JavaScript機能
├── README.md           # このファイル
└── MCP資料/           # 元の開発ファイル
```

## 🚀 GitHub Pagesでの公開手順

### 1. ファイルをGitHubにプッシュ

```bash
git add .
git commit -m "Add MCP guide website"
git push origin main
```

### 2. GitHub Pages設定

1. GitHubリポジトリページへ移動
2. **Settings** タブをクリック
3. 左メニューから **Pages** を選択
4. **Source** を "Deploy from a branch" に設定
5. **Branch** を "main" (または "master") に設定
6. **Root** を "/ (root)" に設定
7. **Save** をクリック

### 3. サイトの確認

数分後に以下のURLでアクセス可能：
```
https://your-username.github.io/your-repository-name
```

## 🛠️ トラブルシューティング

### 404エラーが出る場合

✅ **解決済み**: ファイルをルートディレクトリに移動済み

その他確認事項：
- [ ] `index.html` がルートディレクトリにある
- [ ] ファイルがコミット・プッシュされている
- [ ] GitHub Pages設定が正しい
- [ ] 少し時間を置いて再アクセス

### よくある問題

1. **ファイルが表示されない**
   - → ファイル名の大文字小文字を確認
   - → ブラウザキャッシュをクリア

2. **スタイルが適用されない**  
   - → `styles.css` がルートディレクトリにあるか確認

3. **JavaScript機能が動かない**
   - → `script.js` がルートディレクトリにあるか確認

## 📱 ローカルでのテスト

```bash
# Python 3を使用
python -m http.server 8000

# ブラウザで http://localhost:8000 を開く
```

## 🎨 カスタマイズ

### カラーテーマ変更

`styles.css` の `:root` セクション：

```css
:root {
  --primary-color: #6366f1;    /* メインカラー */
  --secondary-color: #8b5cf6;  /* セカンダリカラー */
  --accent-color: #06b6d4;     /* アクセントカラー */
}
```

### 機能の有効/無効

`script.js` の初期化関数：

```javascript
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();      // スムーズスクロール
    initDarkMode();          // ダークモード  
    initSearch();            // 検索機能
    // 他の機能...
});
```

## 📞 サポート

問題がある場合：
1. このREADMEを確認
2. GitHubのIssuesで質問
3. [GitHub Pages公式ドキュメント](https://docs.github.com/pages)を参照

---

**�� MCPの理解にお役立てください！** 
