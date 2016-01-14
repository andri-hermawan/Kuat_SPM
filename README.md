##USER ROLE
###Accounting
```
email: accounting@satunol.com
password: satunol.com
```
###Project Manager
```
email: pm@satunol.com
password: satunol.com
```
###Developer
```
email: developer@satunol.com
password: satunol.com
```
###Superman
```
email: ojahan@satunol.com
password: satunol.com
```

##Cara menjalankan
Req.
- nodeJs, min version 5.0.0
- mongoDB

####start with####
```node .```
atau jika menggunan ```slc pm``` jika ingin menggunaan strongloop process manager.

#Struktur Project#
Directory server dan common digunakan adalah milik middleware loopback, sedangkan directory client khusus untuk angular frontend. Agar static file mengarah ke directory client, disisi server perlu disesuaikan pada fil server/middleware.json
```
 "files": {
    "loopback#static": {
      "params": "$!../client/src"
    }
  }
```
Dan pada server/boot/root.js baris 
```
router.get('/', server.loopback.status());
```
dihapus atau di comment. Baris tersebut hanya untuk mengintercept route.

####Angular service
Koneksi ke loopback REST API dapat langsung menggunakan http request, namun untuk mempermudah dapat menggunakan service strongloop dengan menjalankan:
```
lb-ng server/server.js client/src/js/lb-services.js
```