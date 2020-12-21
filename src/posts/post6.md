---
title: "自分がReactを選ぶべきだと思うただ1つの理由"
date: "2020-12-01"
slug: "reason-react-recommend"
---

今後何を勉強するかを分析して、対応幅が広くなりそうなReactをやろうと思った。<br>
Vueと同じくフレームワークだったりCliツールだったり色々あるので、<br>
React内の各ツールとVueの現状を比較しながらReactをやろうという方向に考えを持っていくために色々調べてみることにした。<br><br>

# React

![](../images/2020-12-01-01.png)![](../images/2020-12-01-02.jpg)<br>

Vueと比べてJavaScriptがメインの開発であるため、初学者が取り組む場合JavaScript学習から始める必要がある。<br>
(非同期、イベント駆動、基本的なESバージョン差の吸収ができないと厳しいかも)<br>
学習コストが高い以外、特に弱点みたいなものはない印象。<br><br>

Reactを使うデメリット(ちょっと古めの記事)から見ても、Reactの問題というよりは当時導入事例が少なかった事が大きいので、<br>
現在知見は量がありNode.jsが書ける人は抵抗なく入れると思われる。<br><br>

開発する場合CRA(create-react-app)によるプロジェクト生成・Next.js(フレームワーク)他<br>ボイラープレートを使用した環境構築をすることになるが、CRAだとクライアントサイドでのレンダリングが基本になりSEOの面で弱いため、<br>
Nextを使用してSSR(Server Side Rendering)またはSSG(Static Site Genelator)によりSEOに強いサイトを作成することが一般的。<br><br>

CRAはNextにある機能を後で導入したくなった場合カスタマイズが面倒だったり、実運用に必要な機能は要拡張だったりするので、<br>手軽に・かつSEOを気にしない機能を作る場合以外のプロジェクトであまりおすすめできない印象がある。<br><br>

* 特に抵抗ないならNextを使っとこう
* TypeScript学習をしておくと最新フロントエンド環境に追いつける
<br><br>

参考リンク<br>
[Next.jsの特徴と採用するメリットについて考えてみた](https://freelance-jak.com/technology/react/2325/)<br>
[Next.js 4年目の知見：SSRはもう古い、VercelにAPIサーバを置くな](https://qiita.com/jagaapple/items/faf125e28f8c2860269c)：機能レベルの知識視点。<br>
[なぜNext.jsを採用するのか？](https://mottox2.com/posts/429)：CRAとNext.jsの比較<br>
[CRA (Create React App), Next.JS, Gatsby【 どう使い分けるのか？】](https://watablogtravel.com/cra-create-react-app-next-js-gatsby%E3%80%90-%E3%81%A9%E3%81%86%E4%BD%BF%E3%81%84%E5%88%86%E3%81%91%E3%82%8B%E3%81%AE%E3%81%8B%EF%BC%9F%E3%80%91/)<br><br>

# Vue.js

![](../images/2020-12-01-03.png)
![](../images/2020-12-01-04.jpg)<br>

Reactと比べて単一コンポーネントにhtml/css/JavaScriptが纏まっている。<br>
そのため機能が分割されておりシンプルなコードにしやすく理解が楽になる。
<br><br>
またTypeScriptとの相性があまり良くない。クリティカルに言及している記事はないっぽいけど、
お悩み相談の記事に書いてある事に加えて<br>2019年版Vue.jsTipsから解釈すると、Vue.js自体JavaScriptが動的であることを生かしたフレームワークであるため、型が発生することで<br>本来存在していない要対応の問題が出てきてしまう問題はあると思う。
<br><br>
使用するボイラープレートによっては上の限りではないけど、はじめからどっちでも良いのであればわざわざ問題を抱える必要がないと判断し<br>公式導入できるReact + TypeScriptにシフトするプロジェクトが多い気はする。
<br><br>
加えて、Tips記事へのリアクションでも多く見られる「Vuexを入れるならNuxt以外のフレームワークを使うべき」という部分と<br>「大規模になるならVuexを入れたほうがいい」という考え方が競合するので、<br>個人勉強レベルで「なんとなく入れてみたorなんとなく入れなかった」で学習難度に差が出るのも気になった。<br><br>

* 初学者が集まるプロジェクトならVueの方が楽。2が主流だがVue-Cli3の発展に期待。
* Vuexが曲者。導入する場合は上と異なり分かる人がいないときつくなりそうなイメージ
<br><br>

追記：Veuxについてはツイッターで流れてきたLINEのPotato4dさんのスライドが参考になりました。<br>
　　　Vue3はより使われるようになると思うので、ベスプラが固まってきたタイミングを見て検討するのがベターかも。<br><br>

参考リンク
[【Vue.js】vue-cliとNuxt.jsの比較まとめ](https://qiita.com/beanbeenzou/items/772b42687810539b9237)：自動ルーティングの有無、状態管理の有無<br>
[Nuxt.jsに飛びつく前に~Nuxt.jsを習得するための前提技術と、その勉強方法の紹介~](https://qiita.com/newt0/items/763b0c228a8451c68865)<br>
[2019年版Vue.jsを使ってる人には必ず知っていてほしいVue.jsの武器とドキュメントに書かれていないコンポーネントやメンテナンスの際に役立つTips](https://qiita.com/kahirokunn/items/6b4834b9a13406535f32)<br>
[【Vue.js】Vuexの「状態管理」はいったい何の状態を管理しているのか調べた](https://www.i-ryo.com/entry/2019/12/03/063040)<br>
[開発はVue.jsでしたいけど、TypeScriptを入れたい問題をどうするかフロントエンド開発のお悩み相談](https://logmi.jp/tech/articles/322416)<br><br><br>

# 採用事例系
Vueはフロントエンドエンジニアが多い企業(特にWebデザイナー・コーダー)で導入されることが多く、<br>動きが多くなったり連携するモジュールが多くなりそうな場合はReactを採用している会社が多い印象を受けた。

[DMM採用事例2018](https://logmi.jp/tech/articles/320546)：基本Nuxt、Nextも使ってみているためどっちでもという感じではある<br>
[Yahoo採用事例2018](https://techblog.yahoo.co.jp/advent-calendar-2018/yahoo-frontend/)：Nextが多い<br>
[Next採用事例まとめ](https://dyno.design/articles/corporate-sites-nextjs/)：参考程度。大手でも結構使ってるよ、的な<br>
[ホットペッパービューティーコスメ](https://codezine.jp/article/detail/12700)：チャレンジ気味なAMP開発でVueなくReactを選んだ<br><br>

# 結論
* 小中規模のプロジェクトの場合ほぼ差は出ない。メンバーの習熟度を見て選択する。
* React→<u>大規模になると状態管理的に優勢</u>。React Nativeを勉強すればスマホアプリも作れる。
* Vue→学習コストが低いので小規模で収まることが確実なら工数少なくできる。Vuexが辛い。

大規模なプロジェクトの採用シェアが高く、小中規模の差が出にくいのでちょっと遠回りしてもJavaScriptを学ぶ→Reactを勉強する方向が<br>一番メリットが大きそう。Node.jsにも発展できればAPIもかけてほぼなんでも作れるようになるので、<br>案件に配属される予定があるのであればVue、個人開発or学習目線で実施するならReactが良いと思う。

学習レベルは上の通り、プロジェクトにおいてはVuexを使う場合工数かければ頑張ってできないことはないと思うので<br><u>**React-TypeScriptの採用知見がとても多い事**</u>が一番のReact採用理由だと思う。<br><br>

## その他
[あらためてReactとVueを比較してみる〔2020年最新版〕](https://freelance-jak.com/technology/react/2472/)<br>
[React（Web）とReact Native（with expo）の同じところ違うところ](https://tech.asoview.co.jp/entry/2019/12/10/085554)