node-red-contrib-td
========================

[**Japanese**](./README_ja.md)


A <a href="http://nodered.org" target="_new">Node-RED</a> node to write to <a href="http://www.treasuredata.com/" target="_new">TreasureData</a>.

[![NPM](https://nodei.co/npm/node-red-contrib-td.png?downloads=true)](https://nodei.co/npm/node-red-contrib-td/)


Pre-requisites
-------

The node-red-contrib-td requires <a href="http://nodered.org" target="_new">Node-RED</a> to be installed.

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-td

Restart your Node-RED instance, the td node appears in the palette and ready for use.

Overview
-------

Provides two nodes: a node that query tables, and a node that insert objects.

#### td in node

Use presto query to get data from Treasure Data.

Set presto query in `msg.payload`.

**Tip**: For information on how to write queries in Presto refer to this [Presto Query Engine Introduction](https://support.treasuredata.com/hc/en-us/articles/360001457427).

#### td out ndoe

Inserts objects into the specified table.

Set the objects to be inserted into `msg.payload`.

**Tip**: Set the data to be inserted in JSON format.
```
{"name":"test", "num":1234}
```


Acknowledgements
----------------

The node-red-contrib-td uses the following open source software:

- [td](https://github.com/treasure-data/td-client-node) - Node.js Client Library for Treasure Data.


License
-------

See [license](https://github.com/joeartsea/node-red-contrib-td/blob/master/LICENSE) (Apache License Version 2.0).


Contributing
-------

Both submitting issues to [GitHub issues](https://github.com/joeartsea/node-red-contrib-td/issues) and Pull requests are welcome to contribute.


Developers
-------

If the developer wants to modify the source of node-red-contrib-td, run the following code to create a clone.

```
cd ~\.node-red\node_modules
git clone https://github.com/joeartsea/node-red-contrib-td.git
cd node-red-contrib-td
npm install
```
