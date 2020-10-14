---
title: Export file Excel di Laravel - Mapping Data
date: 2020-09-27
published: true
tags: ['Laravel', 'Laravel7', 'Coding']
cover_image: ./images/Larexcel-2.png
canonical_url: https://hizbe.dev
description: "Kita akan bahas ekspor ke Excel dengan kolom tertentu saja, tidak semua kolom ter export. Let's do it!"

---

<i class="fa fa-quote-left fa-3x fa-pull-left" aria-hidden="true"></i>
<h2>Mari Ekspor excel dengan kolom tertentu (Mapping Data) 🏷️ - Part #2</h2>

Pada artikel seri sebelum ini kita sudah membahas bagaimana caranya mengekspor data dari database ke file Excel, naahh pada artikel ini kita akan belajar cara mengekspornya dengan kolom-kolom tertentu saja.

## 1.  Daftarkan WithMapping

Untuk mengambil data yang akan kita ekspor nantinya dengan kolom tertentu yang kita inginkan, kita harus menambahkan sebuah interface yaitu `WithMapping` ke class File Export.

Yang sebelumnya di file `UsersExport` seperti ini.
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

Maka kita tambahkan `WithMapping`
```php
    use Maatwebsite\Excel\Concerns\WithMapping;

    class UsersExport implements FromCollection, WithMapping
```

sehingga menjadi tampak seperti ini.
```php
    <?php

    namespace App\Exports;

    use App\User;
    use Maatwebsite\Excel\Concerns\FromCollection;
    use Maatwebsite\Excel\Concerns\WithMapping;

    class UsersExport implements FromCollection, WithMapping
    {
        public function collection()
        {
            return User::all();
        }
    }
```

## 2. Gunakan function map():array

Selanjutnya kita tambahkan `function map` dengan tipe array ke dalam class `UserExport`.
```php
    public function map($user):array
    {
        return [
            //data yang dari kolom tabel database yang akan diambil
        ];
    }
```

Misal kita memiliki tabel `users` di database kita, di dalam tabel `users` terdapat 8 field column tuh, yaitu: `id | name | email | password | address | phone | created_at | updated_at`.
Yang kita perlu export datanya ke file excel hanya `name | email | address | phone`, maka 4 field column itu akan kita mapping.

Sehingga pada `function map` akan tampak seperti ini.
```php
    public function map($user):array
    {
        return [
            //data yang dari kolom tabel database yang akan diambil
            $user->name,
            $user->email,
            $user->address,
            $user->phone,
        ];
    }
```

Dan keseluruhan file `UsersExport` akan tampak seperti ini.
```php
    <?php

    namespace App\Exports;

    use App\User;
    use Maatwebsite\Excel\Concerns\FromCollection;
    use Maatwebsite\Excel\Concerns\WithMapping;

    class UsersExport implements FromCollection, WithMapping
    {
        public function collection()
        {
            return User::all();
        }
    }

    public function map($user):array
    {
        return [
            //data yang dari kolom tabel database yang akan diambil
            $user->name,
            $user->email,
            $user->address,
            $user->phone,
        ];
    }
```

## 3. Jangan lupa kita uji

Selanjutnya yaitu kita uji. Akses route yang sudah didaftarkan, lihat hasil unduhan file excel nya, kemudian buka. Apakah berhasil? Jika Ya, berarti anda luarbiasa. Jika belum berhasil silahkan tanyakan via kolom komentar ya.

Selesai!<br>
Next kita akan tambahkan header atau heading. Apalah namanya gak penting.

Playlist Laravel-Excel:

1.  [Mari Ekspor file excel di Laravel 📁 - Part #1](https://hizbe.dev/export-file-excel-di-laravel/)
2.  [Mari Ekspor excel dengan kolom tertentu (Mappind Data) 🏷️ - Part #2](https://hizbe.dev/export-file-excel-di-laravel-mapping-data/)
3.  [Mari kita tambahkan headings di file Excelnya (Add Heading) 🧱 - Part #3](https://hizbe.dev/export-file-excel-di-laravel-add-heading/)


Atau bisa simak dalam sebuah video, silahkan klik pada salah satu tautan dibawah yaa 👇

Playlist Video Laravel-Excel:

1.  [Laravel - #1 Export file (basic)](https://youtu.be/usVc9IgHpk4)

See you on next article! 😇