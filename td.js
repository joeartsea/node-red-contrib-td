/**
 * Copyright 2014 Atsushi Kojo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function (RED) {
  'use strict';
  var td = require('td');
  var request = require('request');

  function TdNode(n) {
    RED.nodes.createNode(this, n);
    this.database = n.database;
    this.table = n.table;
  }

  RED.nodes.registerType('td', TdNode, {
    credentials: {
      account: { type: 'text' },
      writekey: { type: 'password' }
    }
  });

  function TdOutNode(n) {
    RED.nodes.createNode(this, n);
    this.td = n.td;
    this.database = n.database;
    this.table = n.table;
    this.tdConfig = RED.nodes.getNode(this.td);

    if (this.tdConfig) {
      var node = this;
      var apiUrl = "https://in.treasuredata.com/js/v3/event/";
      var credentials = RED.nodes.getCredentials(this.td);

      node.on('input', function (msg) {
        node.status({ fill: 'blue', shape: 'dot', text: 'sending' });
        request.post({
          rejectUnauthorized: false,
          url: apiUrl + this.database + '/' + this.table,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-TD-WRITE-KEY': credentials.writekey
          },
          body: JSON.stringify(msg),
          json: true
        }, function (err, response, body) {
          if (err) {
            node.error(err.toString());
            node.status({ fill: 'red', shape: 'ring', text: 'failed' });
          }
          node.status({});
        });
      });
    } else {
      this.error("missing td configuration");
    }
  }
  RED.nodes.registerType("td out", TdOutNode);
}
