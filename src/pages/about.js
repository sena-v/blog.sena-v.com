import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>
      sena-vの技術ブログです。
      <br />
      たまに購入した物の記事や、忘備録的なアウトプットについても記事にする予定です。
    </p>
    <br />
    <hr width="80%" style={{ textAlign:"center", borderColor: `#FFFFFF`}}/>
    <h2>プライバシーポリシー・免責事項</h2>
    <hr width="80%" style={{ textAlign:"center", borderColor: `#FFFFFF`}}/>
    <p style={{ fontSize: `13px` }}>
      ①個人情報の利用目的
      <br />
      <br />
      sena-v.com(以下当ブログ)では、メールでのお問い合わせ、メールマガジンへの登録などの際に、
      <br />
      名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
      <br />
      <br />
      これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、
      <br />
      個人情報をご提供いただく際の目的以外では利用いたしません。
      <br />
      <br />
      <br />
      ②個人情報の第三者への開示
      <br />
      <br />
      当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
      <br />
      ・本人のご了解がある場合
      <br />
      ・法令等への協力のため、開示が必要となる場合
      <br />
      ・個人情報の開示、訂正、追加、削除、利用停止
      <br />
      <br />
      ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、
      <br />
      ご本人であることを確認させていただいた上、速やかに対応させていただきます。
      <br />
      <br />
      <br />
      ③広告の配信について
      <br />
      <br />
      当サイトは第三者配信の広告サービス「Google Adsense
      グーグルアドセンス」を利用しています。
      <br />
      広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
      <br />
      Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「広告
      – ポリシーと規約 – Google」をご覧ください。
      <br />
      <br />
      また、当ブログでは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定された
      <br />
      アフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
      <br />
      第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、
      <br />
      訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。
      <br />
      <br />
      <br />
      ④アクセス解析ツールについて
      <br />
      <br />
      当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
      <br />
      このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。<br />
      このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br />
      この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br />
      この規約に関して、詳しくは<a href="https://support.google.com/analytics/community?hl=ja">ここ</a>をクリックしてください。<br />
      <br /><br />
      ⑤免責事項
      <br />
      <br />
      当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。<br />
      記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。<br />
      <br />
      当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、<br />
      サービス等について一切の責任を負いません。当サイトのコンテンツ・情報につきまして、<br />
      可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。<br />
      <br />
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      <br />
    </p>
    <br />
    <br />
    <hr width="80%" style={{ textAlign:"center", borderColor: `#FFFFFF`}}/>
    <h2>お問い合わせ</h2>
    <hr width="80%" style={{ textAlign:"center", borderColor: `#FFFFFF`}}/>
    <div
      style={{
        border: `solid`,
        marginLeft: `10px`,
        textAlign: `center`,
        marginBottom: `0px`,
        width: `780px`,
      }}
    >
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ padding: `30px`, marginBottom: `0px` }}
      >
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p style={{ marginBottom: `0px` }}>
          <label>
            Message <br />
            <textarea
              style={{ width: "700px", height: `400px`, resize: `none` }}
              name="message"
            ></textarea>
            <button type="submit">Send</button>
          </label>
        </p>
      </form>
    </div>
  </Layout>
)

export default AboutPage
