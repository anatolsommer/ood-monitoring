/*!
 * ood-monitoring
 * Copyright(c) 2016 Anatol Sommer <anatol@anatol.at>
 * MIT Licensed
 */
/* globals require,exports */
/* jshint strict:global */

'use strict';

var http=require('http'), server;

exports.load=function(log, api, config) {
  server=http.createServer(function requestHandler(req, res) {
    var stats=[0, 0, 0];

    api.status(function(err, status) {
      if (err) {
        res.statusCode=500;
        return res.end();
      }
      Object.keys(status).forEach(function(app) {
        var state=status[app].master.state;
        app=status[app];
        if (state==='fatal') {
          ++stats[1];
          ++stats[0];
        } else if (state==='running' || state==='starting') {
          ++stats[0];
        }
        stats[2]+=app.errors;
      });
      stats=stats.map(function(cnt) {
        return '['+cnt+']';
      }).join('');
      res.write(stats);
      res.end();
    });
  });
  server.listen(config.port, '127.0.0.1');
};

exports.unload=function() {
  server.close();
};
