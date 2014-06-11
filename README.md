Debug WebSQL
=========

Simple script that logs every WebSQL SQL query to console.log.  Include it in your browser
scripts (e.g. with browserify, or using the browserified `dist/debug-websql.js` file) and it'll work right away.

Installation
-----

    $ npm install debug-websql

Format
--------

```
<dbname>: <readTransaction|r/w transaction> #<transactionId>: <sql> with args <args>
```

Sample
-------


Sample output from the [PouchDB](https://github.com/pouchdb/pouchdb) test suite:

```
_pouch_test_basics: r/w transaction #1: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
_pouch_test_basics: readTransaction #2: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
_pouch_test_basics: r/w transaction #3: DROP TABLE IF EXISTS 'document-store' with args []
_pouch_test_basics: r/w transaction #3: DROP TABLE IF EXISTS 'by-sequence' with args []
_pouch_test_basics: r/w transaction #3: DROP TABLE IF EXISTS 'attach-store' with args []
_pouch_test_basics: r/w transaction #3: DROP TABLE IF EXISTS 'metadata-store' with args []
_pouch_test_basics: r/w transaction #4: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
_pouch_test_basics: r/w transaction #5: SELECT json FROM 'document-store' WHERE id = ? with args ["C507A197-7896-8238-940A-612DC760FC66"]
_pouch_test_basics: r/w transaction #5: SELECT seq FROM 'by-sequence' WHERE doc_id_rev=? with args ["C507A197-7896-8238-940A-612DC760FC66::1-fcb655891e426b750dc310d02d2aacf5"]
_pouch_test_basics: r/w transaction #5: INSERT INTO 'by-sequence' (doc_id_rev, json, deleted) VALUES (?, ?, ?); with args ["C507A197-7896-8238-940A-612DC760FC66::1-fcb655891e426b750dc310d02d2aacf5","{\"test\":\"somestuff\",\"_id\":\"C507A197-7896-8238-940A-612DC760FC66\",\"_rev\":\"1-fcb655891e426b750dc310d02d2aacf5\"}",0]
_pouch_test_basics: r/w transaction #5: SELECT update_seq FROM 'metadata-store' with args []
_pouch_test_basics: r/w transaction #6: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
_pouch_test_basics: readTransaction #7: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
_pouch_test_basics: r/w transaction #8: DROP TABLE IF EXISTS 'document-store' with args []
_pouch_test_basics: r/w transaction #8: DROP TABLE IF EXISTS 'by-sequence' with args []
_pouch_test_basics: r/w transaction #8: DROP TABLE IF EXISTS 'attach-store' with args []
_pouch_test_basics: r/w transaction #8: DROP TABLE IF EXISTS 'metadata-store' with args []
_pouch_test_basics: r/w transaction #9: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
_pouch_test_basics: r/w transaction #10: SELECT json FROM 'document-store' WHERE id = ? with args ["61849499-9CF7-10E8-A6E8-8077D8ABCB14"]
_pouch_test_basics: r/w transaction #10: SELECT seq FROM 'by-sequence' WHERE doc_id_rev=? with args ["61849499-9CF7-10E8-A6E8-8077D8ABCB14::1-23472bcbd5ad8855940ae6ae392403cc"]
_pouch_test_basics: r/w transaction #10: INSERT INTO 'by-sequence' (doc_id_rev, json, deleted) VALUES (?, ?, ?); with args ["61849499-9CF7-10E8-A6E8-8077D8ABCB14::1-23472bcbd5ad8855940ae6ae392403cc","{\"test\":\"somestuff\",\"_id\":\"61849499-9CF7-10E8-A6E8-8077D8ABCB14\",\"_rev\":\"1-23472bcbd5ad8855940ae6ae392403cc\"}",0]
_pouch_test_basics: r/w transaction #10: SELECT update_seq FROM 'metadata-store' with args []
_pouch_test_basics: r/w transaction #11: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
_pouch_test_basics: readTransaction #12: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
_pouch_test_basics: r/w transaction #13: DROP TABLE IF EXISTS 'document-store' with args []
_pouch_test_basics: r/w transaction #13: DROP TABLE IF EXISTS 'by-sequence' with args []
_pouch_test_basics: r/w transaction #13: DROP TABLE IF EXISTS 'attach-store' with args []
_pouch_test_basics: r/w transaction #13: DROP TABLE IF EXISTS 'metadata-store' with args [] 
``` 
