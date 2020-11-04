---
title: Windows - Cmder alias command
date: 2020-11-05
published: true
tags: ['command-line', 'cmder']
cover_image: https://images.unsplash.com/photo-1573867975080-15a3d9445345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
canonical_url: https://hizbe.dev
description: "Saya akan membagikan apa yang saya ketahui tentang membuat alias command di cmder pada OS Windows agar kinerja development kita lebih efektif."

---

<i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
<h2>Command alias - cmder Windows</h2>

Pada artikel seri ini saya akan menyampaikan bagaimana caranya membuat sebuah alias command untuk cmder di Windows. 

Anda Laravel developer? Jika iya, pasti tau caranya membuat new project menggunakan *composer*. Bagaimana perintahnya? Benar berikut perintah yang biasa digunakan.
```bash
composer create-project --prefer-dist laravel/laravel nama-project
```

Hal tersebut bisa dipersingkat, dan saya contohkan menjadi
```bash
laravel_new nama-project
```

Sungguh amazing bukan? mari ikuti langkah berikut!

## 1.  Buka lokasi program cmder

Pada kasus yang saya miliki cmder milik saya, saya install di directory `C:\Users\username\Desktop\Development\cmder` jadi cari letak cmder anda, kemudian buka directory cmder tersebut.

## 2. Edit config *user_aliases.cmd*

Kemudian dilanjutkan dengan mengedit **file user_aliases.cmd** yang berada pada directory `config`, bebas mau mengedit menggunakan code editor apapun baik IDE maupun CLI seperti nano salah satunya, saya gunakan vscode untuk mengeditnya.

Berikut isi file `user_aliases.cmd`
```bash
;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here
e.=explorer .
gl=git log --oneline --all --graph --decorate  $*
ls=ls --show-control-chars -F --color $*
pwd=cd
clear=cls
history=cat -n "%CMDER_ROOT%\config\.history"
unalias=alias /d $1
vi=vim $*
cmderr=cd /d "%CMDER_ROOT%"
```

Tambahakan baris kode berikut
```bash
laravel_new=composer create-project --prefer-dist laravel/laravel
```

Sehingga tampak keseluruhannya seperti ini
```bash
;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here
e.=explorer .
gl=git log --oneline --all --graph --decorate  $*
ls=ls --show-control-chars -F --color $*
pwd=cd
clear=cls
history=cat -n "%CMDER_ROOT%\config\.history"
unalias=alias /d $1
vi=vim $*
cmderr=cd /d "%CMDER_ROOT%"
laravel_new=composer create-project --prefer-dist laravel/laravel
```

Kemudian save. Jika program *cmder* sedang berjalan, maka tutup *cmder* dan jalankan kembali. Silahkan jalankan perintah
```bash
laravel_new nama-project
```

Jika berhasil, anda luar biasa!
Jika ada kendala, silahkan diskusikan di kolom komentar atau kirim pesan melalui media sosial saya (cek di halaman about).

Tambahkan alias yang anda inginkan, anda menggunakan ReactJS? biasa menggunakan
```bash
npx create-react-app nama-project
```

Bisa anda buat alias menjadi
```bash
react_new nama-project
```
Jangan lupa tutup *cmder* kemudian jalankan kembali setiap menambahkan alias baru.

Terimakasih, selamat mencoba.

See you on next article! 😇