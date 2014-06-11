'use strict';

var argsarray = require('argsarray');

function createTransaction(db, readonly, args) {
  var transactionMethod = db[readonly ? 'readTransaction' : 'transaction'];
  var transaction = transactionMethod.apply(db, args);
  var prefix = readonly ? 'readTransaction' : 'r/w transaction';
  return {
    executeSql : function (sql, sqlArgs, success, failure) {
      console.log(prefix + ': ' + sql + (sqlArgs ? ' with args ' + JSON.stringify(sqlArgs) : ''));
      return transaction.executeSql(sql, sqlArgs, success, failure);
    }
  };
}
if (process && process.browser && global.openDatabase) {
  var oldOpenDatabase = global.openDatabase;
  global.openDatabase = argsarray(function (args) {
    var db = oldOpenDatabase.apply(null, args);
    return {
      transaction : argsarray(function (args) {
        return createTransaction(db, false, args);
      }),
      readTransaction : argsarray(function (args) {
        return createTransaction(db, true, args);
      })
    };
  });
}
