<!-- 頁頭 -->
<header class="navbar sticky-top">
    <!-- container 只是一個有 RWD 和預設 margin, padding 的容器 -->
    <div class="container-lg">
        <!-- Menu Bar -->
        <div class="position-absolute d-lg-none ms-2 sticky-top" id="menu-bar">
            <a href=".multi-link" , data-bs-toggle="collapse" type="button" aria-expand="false"
                aria-controls="link-group">
                <i class="fas fa-bars"></i>
            </a>
        </div>
        <!-- Logo -->
        <div class="m-auto ms-lg-0" id="logo">
            <img src="../../../images/colorful-logo.png" alt="" />
        </div>

        <!-- fixed icon -->
        <ul class="nav d-lg-none" id="d-none-icon">
            <li class="me-2">
                <a class="nav-icon fs-6" href="#" id="link-icon-heart">
                    <i class="fas fa-search"></i>
                </a>
            </li>
            <li class="">
                <a class="nav-icon fs-6" href="#" id="link-icon-cart">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </li>
        </ul>

        <!-- Link Group -->
        <ul class="nav collapse text-center multi-link list-unstyled" id="link-group">
            <li class="col-12 col-lg-auto col-lg-auto nav-item mx-lg-3">
                <a class="nav-link fs-6" id="link-product">Product</a>
                <div class="sm-link d-lg-none">
                    <div class="container">
                        <ul>
                            <li>
                                <a class="nav-link d-inline-block" href="">Wedding</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Portrait</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Food</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Scenery</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Negative</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="col-12 col-lg-auto nav-item mx-lg-3">
                <a class="nav-link fs-6" id="link-tutorial">Tutorial</a>
                <div class="sm-link d-lg-none">
                    <div class="container">
                        <ul>
                            <li>
                                <a class="nav-link d-inline-block" href="">Tutorials</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">FQA</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="col-12 col-lg-auto nav-item mx-lg-3">
                <a class="nav-link fs-6" id="link-about">About us</a>
                <div class="sm-link d-lg-none">
                    <div class="container">
                        <ul>
                            <li>
                                <a class="nav-link d-inline-block" href="">
                                    About us</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Design concept</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="col-12 col-lg-auto nav-item mx-lg-3">
                <a class="nav-link fs-6" id="link-support">Support</a>
                <div class="sm-link d-lg-none">
                    <div class="container">
                        <ul>
                            <li>
                                <a class="nav-link d-inline-block" href="">Customer service</a>
                            </li>
                            <li>
                                <a class="nav-link d-inline-block" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>

        <!-- link icons -->
        <ul class="nav flex-nowrap text-center collapse d-lg-flex multi-link" id="icon-group">
            <li class="col nav-item mx-md-1 mx-lg-2">
                <a class="nav-icon fs-6" href="#" id="link-icon-envelope">
                    <i class="fas fa-envelope"></i>
                </a>
            </li>
            <li class="col nav-item mx-md-1 mx-lg-2">
                <a class="nav-icon fs-6" href="#" id="link-icon-heart">
                    <i class="fas fa-heart"></i>
                </a>
            </li>
            <li class="col nav-item mx-md-1 mx-lg-2">
                <a class="nav-icon fs-6" href="#" id="link-icon-user">
                    <i class="fas fa-user"></i>
                    <!-- 登入 -->
                    <!-- <i class="fas fa-sign-in-alt"></i> -->
                    <!-- 登出 -->
                    <!-- <i class="fas fa-sign-out-alt"></i> -->
                </a>
            </li>
            <li class="col nav-item mx-md-1 mx-lg-2">
                <a class="nav-icon fs-6" href="#" id="link-icon-cart">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </li>
        </ul>
    </div>
</header>
<div>
    <div class="container-lg  d-lg-block bg-color" id="tmp-hide">
        <!-- <div class="row"> -->
        <ul class="showbox-link">
            <li><a class="nav-link" href="#">婚禮 / Wedding</a></li>
            <li>
                <a class="nav-link" href="#">人像 / Portrait</a>
            </li>
            <li><a class="nav-link" href="#">食物 / Food</a></li>
            <li><a class="nav-link" href="#">風景 / Scenery</a></li>
            <li>
                <a class="nav-link" href="#">底片 / Negative</a>
            </li>
        </ul>
        <!-- </div> -->
    </div>
</div>

