# blog.sena-v.com

## branch
-------------------------------
### master
pushを感知したらオートデプロイ

### customise_blog
リリースokの場合、PRでmasterにマージする

## post
記事追加用。更新前にmasterをマージする
※markdownURLに半角スペース等が入らないよう注意

※MDはnotionで書いてpostへ配置

-------------------------------

### develop

```
# start server
yarn develop

# test server
open http://localhost:8000

# graphQL serve
open http://localhost:8000/___graphql

```

### deploy

```
# build
yarn build

# serve
yarn start

## 将来的にgithub Actionsにてビルド予定
```

graphQL
gatsby-source-filesystem => markdown, img
