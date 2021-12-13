<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ config('app.name') }}</title>

    <link rel="shortcut icon" href="{{ asset('/img/apple-touch-icon.png') }}" type="image/x-icon">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <link href="{{ asset('/plugins/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/animate.css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/aos/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/swiper/swiper-bundle.min.css') }}" rel="stylesheet">


    <link rel="stylesheet" href="{{ asset('/css/style.css') }}"> 


<body>
    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}?v=<?= date('U') ?>"></script>


    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <script src="{{ asset('/plugins/purecounter/purecounter.js') }}"></script>
    <script src="{{ asset('/plugins/aos/aos.js') }}"></script>
    <script src="{{ asset('/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('/plugins/glightbox/js/glightbox.min.js') }}"></script>
    <script src="{{ asset('/plugins/swiper/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('/plugins/php-email-form/validate.js') }}"></script>

    <script src="{{ asset('/js/main.js') }}"></script>

</body>

</html>