---
title: Export file Excel di Laravel
date: 2020-08-25
published: true
tags: ['Laravel', 'Laravel7', 'Coding']
# cover_image: https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
canonical_url: https://hizbe-blog.netlify.app
description: "Bagaimana cara mengekspor data dari database ke bentuk file excel? Kita akan bahas dasar atau basic nya disini menggunakan sebuah package. Lets do it!"

---

<i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
<h2>Mari Ekspor file excel di Laravel 📁 - Part #1</h2>

Pada artikel ini kita akan bahas bagaimana cara sederhananya ekspor data ke file excel dari database di Laravel menggunakan sebuah package [**Laravel-Excel**](https://github.com/maatwebsite/Laravel-Excel), okay langsung saja kita mulai.

## 1.  Instalasi

Pertamakali yang harus kita lakukan yaitu tidak lain adalah instalasi. Cukup mudah kita ketikkan command berikut di terminal/commandline kita, tentunya di dalam folder projek Laravel yang sudah kita install ya.

```bash
    composer require maatwebsite/excel
```

Kemudian kita tambahkan baris kode
```php
    Maatwebsite\Excel\ExcelServiceProvider::class,
```
di dalam file `config/app.php`.

```php
    'providers' => [
        /*
        * Package Service Providers...
        */
        Maatwebsite\Excel\ExcelServiceProvider::class,
    ]
```

Sama halnya dengan kode berikut
```php
    'Excel' => Maatwebsite\Excel\Facades\Excel::class,
```

```php
    'aliases' => [
        ...
        'Excel' => Maatwebsite\Excel\Facades\Excel::class,
    ]
```

Kemudian buka lagi terminal/commandline kita, lalu ketikkan perintah berikut

```bash
    php artisan vendor:publish --provider="Maatwebsite\Excel\ExcelServiceProvider"
```

Yups anda selesai melakukan instalasinya.

## 2.  Membuat file Export

Yaa mari kita buat file Export nya dengan perintah berikut di terminal/commandline kita

```bash
    php artisan make:export UsersExport --model=User
```
Sedikit saya jelaskan, `UsersExport` adalah nama file dan class Export yang akan kita buat nantinya, bisa anda sesuaikan dengan kebutuhan anda, misal ingin mengekspor data `Book` bisa ditulis `BooksExport`.

Kemudian untuk `--model=User` adalah model yang akan kita kaitkan atau gunakan di dalam file Export yang akan kita buat, jadi sesuaikan dengan milik kawan-kawan ya.

Nantinya file Export yang kita buat terdapat pada folder `app/Exports`, akhirnya kita berhasil membuat file dan class nya.

## 3.  Export data - Export File

Yaa betul sekali, pada tahap ini kita akan langsung mengekspor data dari database, caranya cukup mudah. Tambahkan baris kode pada file Export yang telah kita buat sebelumnya hingga tampak seperti di bawah ini.

```php
    <?php

    namespace App\Exports;

    use App\User;
    use Maatwebsite\Excel\Concerns\FromCollection;

    class UsersExport implements FromCollection
    {
        public function collection()
        {
            return User::all();
        }
    }
```

Nahh anda dapat mengganti `use App\Users;` dan `User::all();` sesuai dengan kebutuhan projek anda.
Sedikit saya jelaskan,

```php
    public function collection()
    {
        return User::all();
    }
```
baris kode berikut untuk mengambil seluruh data dari database melalui model `User` dan mengekspornya menjadi file excel, tapi belum cukup sampai disini. Kita belum bisa untuk mengunduh file excelnya.

## 4.  Download File - Controller

Pada tahap ini kita akan setting file controller kita supaya bisa mengunduh file dari data excel yang telah kita buat di file Export sebelumnya.

```php
    <?php

    namespace App\Http\Controllers;

    use App\Exports\UsersExport;
    use Maatwebsite\Excel\Facades\Excel;

    class UsersController extends Controller 
    {
        public function export() 
        {
            return Excel::download(new UsersExport, 'users.xlsx');
        }
    }
```
Diatas adalah contoh bagaimana kita mengunduh filenya tepatnya pada `function export`, dan di
```php
    return Excel::download(new UsersExport, 'users.xlsx');
```
kita lihat pada `new UsersExport` bisa kita sesuaikan dengan file Export yang akan kita ekspor datanya ke dalam sebuah file yang bernama `users.xlsx`, nama file `users.xlsx` bisa kita ganti sesuka kita, dan untuk formatnya `.xlsx` bisa kita ganti juga sesuai format yang tersedia seperti `.csv .tsv .ods .xls .html` dan yang lainnya, format lainnya bisa lihat di [dokumentasinya](https://docs.laravel-excel.com/3.1/exports/export-formats.html)

## 5.  Download File - Route

Voilaa! sebentar lagi selesai, tahap sebelum akhir pada artikel ini adalah membuat route nya, tidak bisa kita mengunduh file nya tanpa ada alamat url yang kita akses kan. Langsung saja, saya percaya teman-teman sudah sangat mudah membuat route, tapi tetap akan saya jelaskan disini 😅.

```php
    Route::get('users/export/', 'UsersController@export');
```

Jadi `'users/export/'` adalah alamat url yang akan kita akses nantinya untuk mengunduh file excel. Dan `'UsersController@export'` adalah **controller** yang kita miliki dengan `@export` adalah method atau function yang terdapat di file controller kita tadi.

## 6.  Download File - Via browser

Yeaayyy kita berhasil membuatnya, mari kita uji apakah berhasil? silahkan jalankan Laravel projek kawan-kawan dan tambahkan `/users/export` pada route link browser anda. Jika berhasil terdownload berarti anda sangat memahami artikel ini, namun bila anda belum paham silahkan tanyakan pada kolom komentar ya 😉.

See you on next article! 😇