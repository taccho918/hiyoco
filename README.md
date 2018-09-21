# hiyoco

[![CircleCI](https://circleci.com/gh/nomlab/hiyoco.svg?style=svg)](https://circleci.com/gh/nomlab/hiyoco)

hiyocoは，複数のサービスによって構成されたアプリケーションであり，以下の機能をもつ．
1.  Google カレンダーから予定を取得
2.  取得した予定を，slackの特定のチャンネルに投稿
3.  取得した予定の内容を，AIY Voice Kit を利用して発言

hiyocoは，以下のサービスによって構成されている．

1. calendar_watcher
   + Google カレンダーから予定の取得を行うサービスである．
   + また，他のサービスに取得した予定を送信する．

2. informant
   + calendar_watcherから取得した予定を，Slackに投稿するサービスである．

3. sounder
   + calendar_wathcerから取得した予定の内容を，AIY Voice Kit を利用して発言するサービスである．
   + 動作環境として，AIY Voice Kit 上で動かすことを前提とする．

各サービス間での連携はgRPCによって実現されている．
hiyocoと各サービスの関係の概念図を以下に示す．

![hiyoco](hiyoco.png)

# Requirements
+ Ruby 2.4.3(for calendar_watcher)
+ Python 3.x(for informant and sounder)
+ AIY Voice Kit(for sounder)

# Setup for production

TBA...

# Setup for development
1. ソースコードの取得
```
  $ git clone https://github.com/nomlab/hiyoco
```

2. 各サービスのセットアップ

必要なサービスのセットアップを行う．
各サービスのセットアップ方法は，hiyoco/servicesの各サービスのディレクトリのREADMEに記されている．
具体的なリンクを以下に示す．

+ calendar\_watcher: https://github.com/nomlab/hiyoco/tree/master/services/calendar_watcher
+ informant: https://github.com/nomlab/hiyoco/tree/master/services/informant
+ sounder: https://github.com/nomlab/hiyoco/tree/master/services/sounder

# Usage
TBA...

# Directory Structure
```
    hiyoco
    ├── docs/
    ├── proto/
    └── services/
```

+ docs
  + .protoファイルから生成したドキュメントを格納する．
+ proto
  + 各サービスが利用する.protoファイルを格納する．
+ services
  + hiyocoを構成するサービスを格納する．
  
# Build and Test
## Generate Markdown documents from .proto files
`.proto`ファイルに記述されたコメントから，Markdownドキュメントを生成する．ドキュメント生成には，`protoc-gen-doc` を用いる．`protoc-gen-doc` とは，[Google Protocol Buffers](https://developers.google.com/protocol-buffers/) の compiler ( `protoc` ) のドキュメント生成用プラグインである．本リポジトリにおいてドキュメントを生成するには， `generate_docs.sh` または Circle CI を用いる2つの方法がある．生成されたドキュメントは `proto/docs` ディレクトリに格納される．

### Using generate_docs.sh
[`proto/generate_docs.sh`](https://github.com/nomlab/hiyoco/blob/master/proto/generate_docs.sh) から Markdown ドキュメントを生成する方法は以下の2つ．

1. 公式の `protoc-gen-doc` のDocker imageを用いる．      
参照先: [https://hub.docker.com/r/pseudomuto/protoc-gen-doc/](https://hub.docker.com/r/pseudomuto/protoc-gen-doc/)

2. ローカルにインストールした `protoc-gen-doc` を用いる．   
参照先: [https://github.com/pseudomuto/protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)

**Usage**  
`hiyoco/proto` ディレクトリで `./generate_docs.sh` を実行する．
```
$ chmod +x generate_docs.sh

# 実行方法は以下の3通りである．
$ ./generate_docs.sh          # Use official docker image
$ ./generate_docs.sh --local  # Use locally-installed protoc-gen-doc
$ ./generate_docs.sh --debug  # Invoke shell prompt in docker container for debug
```

### Using Circle CI
Circle CI は上記の `generate_docs.sh` を利用している．このため，編集された `.proto` ファイルが本リポジトリに push されると，Circle CIが `generate_docs.sh` を実行することによって `hiyoco/docs` 以下にある Markdown ドキュメントが更新される．Circle CI の設定は `config.yml` に記されている．
