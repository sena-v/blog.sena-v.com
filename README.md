# blog.sena-v.com

## branch
-------------------------------
### master
pushを感知したらオートデプロイ

### customise_blog
リリースokの場合、PRでmasterにマージする

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
