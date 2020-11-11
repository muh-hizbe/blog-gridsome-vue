---
title: Laravel login with email or username - in one field
date: 2020-11-11
published: true
tags: ['Laravel', 'Auth', 'Coding']
cover_image: https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80
canonical_url: https://hizbe.dev
description: "Saya ingin membagikan apa yang saya ketahui tentang membuat auth login dengan username atau email dalam 1 field yang sama."

---

<i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
<h2>Laravel auth - Login dengan username atau email</h2>

Pada artikel ini saya akan menyampaikan berdasarkan apa yang saya dapatkan dan ketahui perihal fitur auth login dengan username atau email dalam 1 field seperti gambar diatas contohnya, pada gambar tersebut hanya ada 2 field disana, yaitu **Email or phone number** dan **Password**. Kurang lebih seperti itu yang akan kita buat, tapi dengan **Email or username** dan **Password**. Kita akan pelajari terkait *LoginController* nya saja.

Saya asumsikan anda sudah punya project laravel, dan dengan file **LoginController.php** tentunya. Bila belum ada silahkan buat.
```bash
composer create-project --prefer-dist laravel/laravel nama-project
```

```bash
php artisan make:controller LoginController
```

Dan siapkan lingkungan auth lainnya. Seperti database dan model nya.

Saya gunakan *invokable method* di LoginController, karena hanya terdapat satu method saja, makanya saya gunakan invokable method.

## 1.  Buka file **_LoginController.php_**

## 2.  Buat validasi request
Buat validasi request, bebas mau cara seperti apapun. Berikut validasi yang saya buat dengan 2 buah field yang divalidasi yaitu **'emailOrUsername'** dan **'password'**. Kalian tau lah **'emailOrUsername'** nantinya akan kita gunakan untuk login dengan email atau username.
```php
$validator = Validator::make($request->all(),[
    'emailOrUsername' => 'required|string',
    'password' => 'required|string',
]);
```

## 3.  Filter login type
```php
$login_type = filter_var($request->input('emailOrUsername'), FILTER_VALIDATE_EMAIL )
    ? 'email'
    : 'username';
```
Pada code diatas kita memfilter dari field input *'emailOrUsername'* apakah berupa format email yang valid. Bila sesuai dengan format email maka varibel `$login_type` akan bernilai `'email'` atau tepatnya `$login_type = 'email'`. Bila tidak sesuai dengan format email yang valid maka varibel `$login_type` akan bernilai `'username'` atau tepatnya `$login_type = 'username'`.

## 4.  Menambahkan nilai kedalam array request
```php
$request->merge([
    $login_type => $request->input('emailOrUsername')
]);
```
Sebelumnya kita hanya memfilter nilai dari variabel `$login_type` saja. Namun hal itu tidak cukup, kita harus menambahkannya kedalam array $request yang sebelumnya hanya berisi <span class="underline text-purple-500">**_'emailOrUsername'_**</span> dan <span class="underline text-purple-500">**_'password'_**</span> bisa dilihat pada validasi request sehingga sekarang berisi <span class="underline text-purple-500">**_'emailOrUsername'_**</span>,<span class="underline text-purple-500">**_'password'_**</span> dan nilai dari variabel `$login_type` dengan value dari request <span class="underline text-purple-500">**_'emailOrUsername'_**</span>. Kenapa hal ini dibutuhkan? karena pada proses auth kita perlu mengecek field request dengan data yang ada di tabel users database kita atau apalah yang anda gunakan.

## 5.  Cek auth
```php
if (auth()->attempt($request->only($login_type, 'password'))){
    // Logic setelah berhasil login mau ngapain
}
else {
    // Logic ketika gagal login mau ngapain
}
```
Bisa kita lihat pada `$request->only($login_type, 'password')`, tepatnya pada `$login_type` yang value dari variabel ini menyesuaikan dari hasil filter, Sehingga apabila kita lakukan `dd($request->all());` sebelum masuk pengecekan auth akan menghasilkan :
```php
// bila hasil filter berupa email valid
"emailOrUsername": "hizbe",
"password": "password",
"email": "hizbe@example.com"

// bila hasil filter bukan berupa email valid
"emailOrUsername": "hizbe",
"password": "password",
"username": "hizbe"
```
Nah apabila kita tidak melakukan tahap `4. Menambahkan nilai kedalam array request` maka ketika kita lakukan hal diatas akan meghasilkan :
```php
// bila hasil filter berupa email valid
"emailOrUsername": "hizbe",
"password": "password",

// bila hasil filter bukan berupa email valid
"emailOrUsername": "hizbe",
"password": "password",
```
Kemana email atau username? Padahal sudah kita lakukan filter, iya kita sudah lakukan filter tapi tidak kita masukkan kedalam array `$request`.

<hr>

Berikut keseluruhan code LoginController saya:
```php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function __invoke (Request $request)
    {
        $validator = Validator::make($request->all(),[
            'emailOrUsername' => 'required|string',
            'password' => 'required|string',
        ]);

        $login_type = filter_var($request->input('emailOrUsername'), FILTER_VALIDATE_EMAIL )
            ? 'email'
            : 'username';

        $request->merge([
            $login_type => $request->input('emailOrUsername')
        ]);

        if (auth()->attempt($request->only($login_type, 'password'))){
            // Logic setelah berhasil login mau ngapain
        }
        else {
            // Logic ketika gagal login mau ngapain
        }
    }
}

```

Selamat mencoba, ada pertanyaan silahkan diskusikan di kolom komentar atau kirim pesan melalui media sosial saya (cek di halaman about).

Terimakasih, selamat berexplorisasi.

See you on another article! 😇