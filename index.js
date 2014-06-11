'use strict';

var argsarray = require('argsarray');

var transactionIds = 0;

function createTransaction(db, dbName, readonly, args) {
  var transactionId = ++transactionIds;
  var prefix = dbName + ': ' + (readonly ? 'readTransaction' : 'r/w transaction') + ' #' + transactionId;
  var transactionMethod = db[readonly ? 'readTransaction' : 'transaction'];

  var callback = args[0];
  if (callback) {
    args[0] = function (tx) {
      var proxyTransaction = {
        executeSql : function (sql, sqlArgs, success, failure) {
          console.log(prefix + ': ' + sql + (sqlArgs ? ' with args ' + JSON.stringify(sqlArgs) : ''));
          tx.executeSql(sql, sqlArgs, success, failure);
        }
      };
      callback(proxyTransaction);
    };
  }
  transactionMethod.apply(db, args);
}
if (process && process.browser && global.openDatabase) {
  var oldOpenDatabase = global.openDatabase;
  global.openDatabase = argsarray(function (args) {
    var db = oldOpenDatabase.apply(null, args);
    var dbName = args[0];
    return {
      transaction : argsarray(function (args) {
        return createTransaction(db, dbName, false, args);
      }),
      readTransaction : argsarray(function (args) {
        return createTransaction(db, dbName, true, args);
      })
    };
  });
}
