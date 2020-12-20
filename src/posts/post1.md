---
title: "JavaScriptでobjectを利用し関数を部品として使用する"
date: "2020-09-06"
slug: "js-class-object"
---

<!-- ![aaaaaa](../images/icon.png) -->

JavaScriptで複数のモジュールを組み合わせて使用しており、設計上の理由で変数を特定のモジュールに入れないといけないが、メインモジュールからそのモジュールを参照すると変数がクロージャのためundefinedになってしまう。

上記をケアするためclassを使用せず、オブジェクト形式で式と変数を持つ形で実装したときのメモ

## モジュールがclassになっているといい所
* 継承ができる
* 名付けにより用途がわかりやすくなる
* 初めてコードを見た人にも分かりやすい

## モジュールがObjectになっているといいところ
* 実装が楽
* 変数が増えれば増えるほど複雑になりがち
* 構造が独自になるので再利用が難しい

ある程度開発に慣れてくるとモジュール＝classみたいな考え方になってしまい、
簡易的な構造の処理が外出ししたいときでも記述量が多くなってしまうため、開発速度が遅くなるよりはオブジェクト形式で実装した方が早いという判断。

```js
// 計算用のモジュールをいくつか入れる
const parts = {
  binaryFlag: true,
  hexadecimalFlag: false,

  // 1回実行毎に2進数と16進数を切り替える
  changeType : () => {
    if(binaryFlag === 'true') {
      binaryFlag = false
      hexadecimalFlag = true
    }else{
      binaryFlag = true
      hexadecimalFlag = false
    }
  },

  changeDecimalToOtherType : (num) => {
    if(binaryFlag === 'true') num.toString(2)
    else num.toString(16)
  }
}
```

モジュール内フラグへ外部からparts.changeType()を実行し、フラグ切り替えの構造で実装を行った。

モジュールロード時にparts.changeDecimalToOtherType(10)を実行した場合、binaryでの変換が実行されるため10 = 1010となり、parts.changeType()実行でhexadecimalFlagがtrueとなるため10 = Aの実行結果が表示される。

基本的には継承・可読性・インスタンス化を考えるとclassを使用したいけどサクッと書けるので
選択肢として持っておきたい。