<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recommend-card</title>

    <!-- Icons -->
    <!-- <script defer src="../../node_modules/@fortawesome/fontawesome-free/js/all.js"></script> -->
    <link rel="stylesheet" href="../../../../node_modules/@fortawesome/fontawesome-free/css/all.css" />
    <!-- Bootstrap -->
    <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <script src="../../../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- 字型 -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
    <!-- <link rel="stylesheet" href="./Navbar.scss" /> -->
    <link rel="stylesheet" href="./Recommend-card.css" />
</head>

<!-- 切版思路：從手機到桌面 -->

<!-- 切版觀念 -->
<!-- 1. RWD 切版思維『從手機出發到桌面』和『桌面出發到手機』擇一 -->
<!-- 2. RWD 切版思維『min-width』or『max-width』擇一-->
<!-- 3. 『容器』不設高，只設寬：意思是高度由『內容物』而決定（內容物多自然就增高，少自然就減少，但是容器可以設最小高度） -->
<!-- 4. 『內容物』不設寬，只設高：意思是寬度設『百分比』吃容器寬、或『格線系統』，高度一般情況也不設，吃『文字大小』-->
<!-- 5. 『版面位置』使用 padding、margin 來調整 -->
<!-- 6. 『使用 Bootstrap BreakPoint 時』，當 RWD 到大尺寸時有時會殘留小尺寸的設定屬性，可以先重置在設定，例如：m-auto m-lg-0 me-lg-auto -->


<!-- product-list 推薦區照片牆 -->

<body class="wrapper">
    <div class="container">
        <div class="row box-1">
            <div class="col-md-8  col-12 img-block ps-md-0">
                <img src="../../../images/navbar-ex-1.jpg">
                <p>婚禮系列 / WEDDING</p>
            </div>
            <div class="col-md-4  col-12 img-block pe-md-0">
                <img src="../../../images/navbar-ex-2.jpg">
                <p>婚禮系列 / WEDDING</p>
            </div>
            <div class="col-md-5 col-12  img-block ps-md-0">
                <img src="../../../images/navbar-ex-2.jpg">
                <p>婚禮系列 / WEDDING</p>
            </div>
            <div class="col-md-3 col-12 img-block">
                <img src="../../../images/navbar-ex-2.jpg">
                <p> 婚禮系列 / WEDDING</p>
            </div>
            <div class="col-md-4 col-12 img-block pe-md-0">
                <img src="../../../images/navbar-ex-2.jpg">
                <p>婚禮系列 / WEDDING</p>
            </div>
        </div>
    </div>


    <!-- // TODO: vanilla-tilt 卡片特效 -->
    <div class="row"></div>

    <!-- // TODO: 商品卡片 -->
    <!-- class 只下排版 -->
    <div class="container px-md-0">
        <div class=" d-flex pt-3 px-md-0 product-card justify-content-between">
            <div class="p-2 inside-b border">
                <div class="product-card-header position-relative">
                    <div class="ratio ratio-4x3">
                        <img src="../../../images/navbar-ex-1.jpg" alt="">
                    </div>
                    <i class="fas fa-heart position-absolute"></i>
                </div>
                <div class="card-body text-center">
                    <p class="card-title">婚禮／Wedding-1</p>
                    <p class="card-text ">色彩豐富、溫款且對比自然為人像時尚和大自然
                        攝影帶來生命力</p>
                    <div class="yellow-circle d-flex justify-content-around align-items-center"><img
                            src="../../../icons/yellow-circle.png" alt="">NT 20</div>
                </div>
            </div>
            <div class="p-2 inside-b border">
                <div class="product-card-header position-relative">
                    <div class="ratio ratio-4x3">
                        <img src="../../../images/navbar-ex-1.jpg" alt="">
                    </div>
                    <i class="fas fa-heart position-absolute"></i>
                </div>
                <div class="card-body text-center">
                    <p class="card-title">婚禮／Wedding-1</p>
                    <p class="card-text ">色彩豐富、溫款且對比自然為人像時尚和大自然
                        攝影帶來生命力</p>
                    <div class="yellow-circle d-flex justify-content-around align-items-center"><img
                            src="../../../icons/yellow-circle.png" alt="">NT 20</div>
                </div>
            </div>
            <div class="p-2 inside-b border">
                <div class="product-card-header position-relative">
                    <div class="ratio ratio-4x3">
                        <img src="../../../images/navbar-ex-1.jpg" alt="">
                    </div>
                    <i class="fas fa-heart position-absolute"></i>
                </div>
                <div class="card-body text-center">
                    <p class="card-title">婚禮／Wedding-1</p>
                    <p class="card-text ">色彩豐富、溫款且對比自然為人像時尚和大自然
                        攝影帶來生命力</p>
                    <div class="yellow-circle d-flex justify-content-around align-items-center"><img
                            src="../../../icons/yellow-circle.png" alt="">NT 20</div>
                </div>
            </div>
            <div class="p-2 inside-b border">
                <div class="product-card-header position-relative">
                    <div class="ratio ratio-4x3">
                        <img src="../../../images/navbar-ex-1.jpg" alt="">
                    </div>
                    <i class="fas fa-heart position-absolute" onClick{st}></i>
                </div>
                <div class="card-body text-center">
                    <p class="card-title">婚禮／Wedding-1</p>
                    <p class="card-text ">色彩豐富、溫款且對比自然為人像時尚和大自然
                        攝影帶來生命力</p>
                    <div class="yellow-circle d-flex justify-content-around align-items-center"><img
                            src="../../../icons/yellow-circle.png" alt="">NT 20</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 把之前做好的元件貼過來 建資料夾 -->
    <!-- position: fixed -> viewport -->
    <!-- position: sticky -> reliatve / parent container (overflow: scroll)  -->
    <!-- position: static -> default -->
    <!-- position: relative -> left, right, top, bottom -->
    <!-- position: absolute -> left, right, top, bottom -->

    <!-- margin: auto -->
    <!-- flex: align-content-center -->

</body>

</html>