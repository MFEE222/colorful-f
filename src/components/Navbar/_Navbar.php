<header class="navbar">
        <!-- container 只是一個有 RWD 和預設 margin, padding 的容器 -->
        <div class="container-lg">
            <!-- Menu Bar -->
            <div class="position-absolute d-lg-none ms-2" id="menu-bar">
                <a href=".multi-link" , data-bs-toggle="collapse" type="button" aria-expand="false"
                    aria-controls="link-group">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
            <!-- Logo -->
            <div class="mx-auto m-lg-0 me-lg-auto" id="logo">
                <img src="../../images/colorful-logo.png" alt="">
            </div>
            <!-- Link Group -->
            <ul class="nav collapse text-center multi-link" id="link-group">
                <li class="col-12 col-lg-auto col-lg-auto nav-item mx-lg-3">
                    <a class="nav-link fs-6" id="link-product">Product</a>
                </li>
                <li class="col-12 col-lg-auto nav-item mx-lg-3">
                    <a class="nav-link fs-6" id="link-tutorial">Tutorial</a>
                </li>
                <li class="col-12 col-lg-auto nav-item mx-lg-3">
                    <a class="nav-link fs-6" id="link-about">About us</a>
                </li>
                <li class="col-12 col-lg-auto nav-item mx-lg-3">
                    <a class="nav-link fs-6" id="link-support">Support</a>
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