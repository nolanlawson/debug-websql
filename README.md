Debug WebSQL
=========

Simple script that logs every WebSQL SQL query to console.log.  Include it in your browser
scripts (e.g. with browserify, or using the browserified `dist/debug-websql.js` file) and it'll work right away.

Sample output (from the [PouchDB](https://github.com/pouchdb/pouchdb)) test suite:

```
r/w transaction: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
readTransaction: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
r/w transaction: DROP TABLE IF EXISTS 'document-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'by-sequence' with args []
r/w transaction: DROP TABLE IF EXISTS 'attach-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'metadata-store' with args []
r/w transaction: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
r/w transaction: SELECT json FROM 'document-store' WHERE id = ? with args ["8E0881A1-0687-F797-BFB9-D4F6946B3C26"]
r/w transaction: SELECT seq FROM 'by-sequence' WHERE doc_id_rev=? with args ["8E0881A1-0687-F797-BFB9-D4F6946B3C26::1-f716d0eee7426dcaf6395ebed97ca94b"]
r/w transaction: INSERT INTO 'by-sequence' (doc_id_rev, json, deleted) VALUES (?, ?, ?); with args ["8E0881A1-0687-F797-BFB9-D4F6946B3C26::1-f716d0eee7426dcaf6395ebed97ca94b","{\"test\":\"somestuff\",\"_id\":\"8E0881A1-0687-F797-BFB9-D4F6946B3C26\",\"_rev\":\"1-f716d0eee7426dcaf6395ebed97ca94b\"}",0]
r/w transaction: SELECT update_seq FROM 'metadata-store' with args []
r/w transaction: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
readTransaction: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
r/w transaction: DROP TABLE IF EXISTS 'document-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'by-sequence' with args []
r/w transaction: DROP TABLE IF EXISTS 'attach-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'metadata-store' with args []
r/w transaction: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
r/w transaction: SELECT json FROM 'document-store' WHERE id = ? with args ["69E70FF5-CFCF-86B2-9E02-9D3994FC46B3"]
r/w transaction: SELECT seq FROM 'by-sequence' WHERE doc_id_rev=? with args ["69E70FF5-CFCF-86B2-9E02-9D3994FC46B3::1-fd7134b9229b06bc341f102403cf8846"]
r/w transaction: INSERT INTO 'by-sequence' (doc_id_rev, json, deleted) VALUES (?, ?, ?); with args ["69E70FF5-CFCF-86B2-9E02-9D3994FC46B3::1-fd7134b9229b06bc341f102403cf8846","{\"test\":\"somestuff\",\"_id\":\"69E70FF5-CFCF-86B2-9E02-9D3994FC46B3\",\"_rev\":\"1-fd7134b9229b06bc341f102403cf8846\"}",0]
r/w transaction: SELECT update_seq FROM 'metadata-store' with args []
r/w transaction: SELECT sql FROM sqlite_master WHERE tbl_name = 'metadata-store' with args []
readTransaction: SELECT 'by-sequence'.seq AS seq, 'by-sequence'.deleted AS deleted, 'by-sequence'.json AS data, 'document-store'.json AS metadata FROM 'document-store' JOIN 'by-sequence' ON 'by-sequence'.seq = 'document-store'.winningseq WHERE 'document-store'.id=? with args ["_local/_pouch_dependentDbs"]
r/w transaction: DROP TABLE IF EXISTS 'document-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'by-sequence' with args []
r/w transaction: DROP TABLE IF EXISTS 'attach-store' with args []
r/w transaction: DROP TABLE IF EXISTS 'metadata-store' with args [] 
``` 