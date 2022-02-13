<!DOCTYPE html>

<?php include "../../components/Head/_Head.php" ?>

<body>

    <!-- navbar -->
    <?php include "../../components/Navbar/_Navbar.php" ?>

    <!-- breadcrumb -->
    <?php include "../../components/Breadcrumb/_Breadcrumb.php" ?>

    <div class="container-fluid teach">
        <!-- 第一頁 -->
        <div class="row justify-content-center align-items-center page-one">
            <!-- 標題 -->
            <div class="col-12 col-sm-4 p-3 page-one-left">
                <h1 class="text-center">COLORFUL</h1>
                <br />
                <p class="text-center">A Better Way to Organize Your Recipe</p>
            </div>

            <!-- 右側圖 -->
            <div class="col-12 col-sm-8 row page-one-right">
                <!-- iphone - 1 -->
                <div class="col-12 col-sm-6 text-center iphone">
                    <div class="iphone-screen">
                        <img src="../../images/iphone-p1.png" alt="">
                    </div>
                    <!-- 螢幕內容全部用這個包 -->
                    <!-- <div class="screen-content">
                        <div class="product">
                            <img src="../../images/product-img.jpeg" alt="">
                        </div>
                    </div> -->
                </div>
                <!-- iphone - 2 -->
                <div class="col-12 col-sm-6 text-center iphone">
                    <div class="iphone-screen">
                        <img src="../../images/iphone-p1.png" alt="">
                    </div>
                    <!-- 螢幕內容全部用這個包 -->
                    <div class="screen-content">
                        <img src="../../images/product-img.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!--第二頁-->
        <!-- flex container -->
        <div class="row page-two">
            <!-- flex item -->
            <div class="col-6 text-light">
                <h1 class="teach-font">How to Install Lightroom Presets <br />
                    for Desktop and Mobile?</h1>

                <div class="shape-ex3">
                    <p>PDF download</p>
                </div>
            </div>
            <!-- flex item -->
            <div class="col-6 px-0">
                <!-- 這樣會吃到原圖的大小 -->
                <!-- 因為我們要 RWD ，所以 圖片寬度要跟著 col-6 變化 -->
                <div class="lightroom-awesome">
                    <img src="./../../images/iphone-p2.jpg" />
                </div>
            </div>



        </div>

        <!--第三頁-->
        <div class="row page-three">

            <h1 class="video-teach">Video teach</h1>

            <div class="row">
                <!--第一個視頻BOX-->
                <!-- <div class="col-12 col-md-6 vd-box"></div> -->
                <div class="col-12  vd-box ">
                    <div class="box bg-light px-3 py-3">
                        <div class="ratios ">
                            <iframe style=" width: 100%" src="https://www.youtube.com/embed/-EKH1f1DdC8" frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                        <h1>
                            Photographer's retouching process
                        </h1>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eveniet
                            natus expedita laboriosam ratione atque sapiente porro numquam enim neque dolor
                            rem,
                            fuga eos, maxime velit quibusdam veritatis recusandae harum voluptatum.</h4>
                        </h3>
                    </div>
                </div>
                <!--第二個視頻BOX-->
                <div class="col-6  vd-box ">
                    <div class="box bg-light px-3 py-3">
                        <div class="ratios ">
                            <iframe style=" width: 100%" src="https://www.youtube.com/embed/-EKH1f1DdC8" frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                        <div>
                            <h1>Photographer's retouching process</h1>
                            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eveniet
                                natus expedita laboriosam ratione atque sapiente porro numquam enim neque dolor
                                rem,
                                fuga eos, maxime velit quibusdam veritatis recusandae harum voluptatum.</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!--第四頁-->
        <div class="page-four px-0">
            <!-- margin: -12 -->
            <div class="row">
                <div class="col px-0">
                    <img class="image-4" src="./../../images/R.jpg" />
                </div>
            </div>
        </div>

        <!-- <div class="row vh-100">
            <section id="LP4">
                <h1>測試用</h1>
                <img class="test" src="./../../images/R.jpg" />
            </section>
        </div> -->

    </div>

    <!-- main -->
    <?php include "../../components/TeachMain/_TeachMain.php" ?>

    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>

</body>