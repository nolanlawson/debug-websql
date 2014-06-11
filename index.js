'use strict';

var argsarray = require('argsarray');

if (process && process.browser && global.openDatabase) {
  var oldOpenDatabase = global.openDatabase;
  global.openDatabase = argsarray(function (args) {
    var db = oldOpenDatabase.apply(null, args);
    return {
      transaction : function (sql, sqlArgs, success, failure) {
        console.log('r/w transaction: ' + sql + (sqlArgs ? ' with args ' + JSON.stringify(sqlArgs) : ''));
        return db.transaction(sql, sqlArgs, success, failure);
      },
      readTransaction : function (sql, sqlArgs, success, failure) {
        console.log('readTransaction: ' + sql + (sqlArgs ? ' with args ' + JSON.stringify(sqlArgs) : ''));
        return db.transaction(sql, sqlArgs, success, failure);
      }
    };
  });
}
