node-red-contrib-td
========================

このノードは、<a href="http://www.treasuredata.com/" target="_new">TreasureData</a>に書き込む<a href="http://nodered.org" target="_new">Node-RED</a>ノードです。

[![NPM](https://nodei.co/npm/node-red-contrib-td.png?downloads=true)](https://nodei.co/npm/node-red-contrib-td/)

前提条件
-------

node-red-contrib-tdは、<a href="http://nodered.org" target="_new">Node-RED</a>のインストールが必要です。

インストール
-------

Node-REDをインストールしたルートディレクトリで以下のコマンドを実行します。

    npm install node-red-contrib-td

Node-REDインスタンスを再起動すると、パレットにtdノードが表示されて使用可能になります。

概要
-------

このノードは、データを取得するノードとデータを挿入するノードの2つを提供します。

#### td in ノード

prestoクエリを使用してTreasure Dataからデータを取得します。

`msg.payload`にprestoクエリを設定します。

**Tip**: Prestoクエリの記述方法については、こちらの[Presto Query Engine Introduction](https://support.treasuredata.com/hc/en-us/articles/360001457427)を参照してください。

#### td out ノード

指定するテーブルにデータを挿入します。

`msg.payload`に挿入するデータを設定します。

**Tip**: 挿入するデータはJSON形式で設定します。
```
{"name":"test", "num":1234}
```

謝辞
-------

node-red-contrib-tdは、次のオープンソースソフトウェアを使用しています。

- [td](https://github.com/treasure-data/td-client-node): TreasureData用のNode.jsクライアントライブラリ

ライセンス
-------

こちらを参照してください。[license](https://github.com/joeartsea/node-red-contrib-td/blob/master/LICENSE) (Apache License Version 2.0).

貢献
-------

[GitHub issues](https://github.com/joeartsea/node-red-contrib-td/issues)への問題提起、Pull requestsのどちらもあなたの貢献を歓迎します。


開発者
-------

開発者がnode-red-contrib-tdのソースを改変する場合、以下のコードを実行してクローンを作成します。

```
cd ~\.node-red\node_modules
git clone https://github.com/joeartsea/node-red-contrib-td.git
cd node-red-contrib-td
npm install
```
