---
title: "[JavaScript]なろうランキングをAPIで一括取得する"
date: "2020-11-19"
slug: "narou-rank-get"
---
APIが使える環境があり、定期的にそれを使っているならちょっとコード化するだけで<br>
やりたいことが数秒短縮できる、みたいな記事です。<br>

## やろうと思った経緯
夏頃ステイホームの暇さに煽られ、kindlePaperWhiteを購入しました。<br>
暇つぶしに「小説家になろう」を読み続け数ヶ月、有名所を読み終えたため<br>
まだ見ぬ掘り出しモノを探すためランキングをローラーするようになりました。<br>

何度もサイトにアクセスしているため、いちいちアクセスするのが面倒になったのと<br>
(**単純にランキングが多少見にくいみたいなところもある**)<br>
現プロジェクトで使っているAPIのcall側が複雑で分かりにくいスパゲッティ実装であり<br>
復習を兼ねてかんたんな実装を試してみたかったため、<br>
見たいランキングだけnodeで取得してtext化するモジュールを作成しました。<br>

## やりたいこと
①パラメータ設定済みのAPIを叩きJSONを取得<br>
②適当なファイルに出力<br>

### APIを叩きJSONを取得
rpmのrequestを入れて完成まで行ったのですがrequestは今年の2月頃から非推奨のため<br>
axiosに変更しました。request使用が簡単すぎたので大丈夫かな？と思ったのですが<br>
使ってみたら現場と同じだったり、Promiseだけでほぼ差異はありませんでした。<br>

### 適当なファイルに出力
今回はcli出力だと見辛いかな？程度の文字数だけどリッチに見せたいような事もないので<br>
簡易的にtextで出力するようにしました。<br>

## 実装
ソース：https://github.com/sena-v/narouRankingToText<br>


```js
const axiosBase = require('axios') // ①に使用
const fs = require("fs"); // ②に使用

// urlと検索パラメータを保管
const url = 'https://api.syosetu.com/novelapi/api/';
const weeklyURL = '?genre=201&order=weeklypoint&of=t-n-w-s-k-gf-gl-l-nu';
const monthlyURL = '?genre=201&order=monthlypoint&of=t-n-w-s-k-gf-gl-l-nu';

const axios = axiosBase.create({
baseURL: url,
headers: {
'Content-Type': 'application/json',
'X-Requested-With': 'XMLHttpRequest',
"User-Agent": "Mozilla/5.0",
},
responseType: 'json'
});

let outputText = null

const fileOutput = (text) => {

// weekly取得時は出力せずreturn
if(outputText === null) {
fs.writeFileSync("output.txt", '')
outputText = text;
return}

outputText = (outputText + text)
const arrText = outputText.split('\\n')
console.log(arrText)

try {
for(let txt of arrText) {
fs.appendFile("output.txt",txt+"\r\n",()=>{})
}

console.log("write end")
} catch (e) {
console.log(e)
}
}

const narouListGet = (adress) =>
axios.get("/" + adress).then((data) => fileOutput(JSON.stringify(data.data)))

narouListGet(weeklyURL)
narouListGet(monthlyURL)
```

楽さを重視したのでtext出力にしましたが、JSON加工だけできれば後フロントとの繋ぎだけなので<br>
fsについては今回深く理解する必要はないかなと思ったため上書き更新による実装になっています。<br>

## 実行結果
![kekka](../images/posts-image/2020-11-19-01.png)

読んでみようかな、となる判断材料になる箇所だけ抜き出す形式にしたため、検索件数を増やすとか、<br>
別ランキングを取得するところもパラメータ変更で対応できる形式となります。<br>

### 止まったところ
#### api側使用について
userAgentが未設定の場合エラーページのhtmlがJSON返還されるため、<br>
axiosのheaderに適当な値を追加してgetする形式としました。<br>

#### fsモジュールappendFileの引数不足
fs.appendFile()は引数を3個取り、3個目がcallback形式でエラー出力に使用されるため<br>
今回は特にエラーを考えない形で空関数を設定し回避しました。<br>

## まとめ
サイトopen→weekly一覧を撫でる→monthly一覧を撫でる、を1コマンドでできるようになったので<br>
復習ついでとしては地味に時間短縮できるものができました。<br>

・今回の実装だけの話<br>
投稿系サイトにありえる「更新が止まっている物を読み始めても途中で止まり意味がない」という問題を<br>
今回はweekly/monthlyに上がってくる＝更新止まっていない、としてケアしていますが、<br>
暇があったらnarou.rbと連携して読了済み小説のタグ抽出から好きな小説の傾向を判断して<br>
自動取得するとかの拡張もいいかもしれないなと思いました。<br>

## 参考
[[axios]axios の導入と簡単な使い方](https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9)
[[node.js] テキストファイルを読みこみ](https://qiita.com/amanatsu5151/items/0d2e7ba8d31f3eece660)