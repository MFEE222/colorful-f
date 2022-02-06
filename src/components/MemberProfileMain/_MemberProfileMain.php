<main class="col-12 col-md-10 member-profile-main">

    <!-- title -->
    <div class="row mb-3">
        <div class="col-12 col-md-auto me-md-3">
            <h1>個人資料</h1>
            <h2>完成填寫個人資料可享有更多會員專屬權益</h2>
        </div>
        <div class="col-auto avator">
            <div class="ratio ratio-1x1">
                <img src="../../images/product-img.jpeg" alt="">
            </div>
        </div>
    </div>
    <!-- form -->
    <form>
        <!-- name -->
        <div class="row mb-3">
            <label for="member-name" class="col-auto col-md-1 col-form-label">姓名</label>
            <div class="col">
                <input type="text" name="member-name" class="form-control">
            </div>
        </div>
        <!-- gender -->
        <fieldset class="row mb-3">
            <legend class="col-auto col-md-1 col-form-label">性別</legend>
            <div class="col align-self-center">
                <div class="form-check ps-0 d-inline py-2">
                    <input type="radio" name="gender" id="gender-male" value="male">
                    <label for="gender-male" class="form-check-label">男生</label>
                </div>
                <div class="form-check ps-0 d-inline py-2">
                    <input type="radio" name="gender" id="gender-female" value="female">
                    <label for="gender-female" class="form-check-label">女生</label>
                </div>
                <div class="form-check ps-0 d-inline py-2">
                    <input type="radio" name="gender" id="gender-private" value="private">
                    <label for="gender-private" class="form-check-label">不公開</label>
                </div>
            </div>
        </fieldset>
        <!-- birthday -->
        <div class="row mb-3">
            <label id="birthday" class="col-auto col-md-1 col-form-label">生日</label>
            <div class="col">
                <input type="date" name="birthday" id="birthday" class="form-control">
            </div>
        </div>
        <!-- phone -->
        <div class="row mb-3">
            <label for="phone" class="col-auto col-md-1 col-form-label">手機</label>
            <div class="col">
                <input type="text" name="phone" id="phone" maxlength="10" class="form-control">
            </div>
        </div>
        <!-- email -->
        <div class="row mb-3">
            <label for="email" class="col-auto col-md-1 col-form-label">Email</label>
            <div class="col">
                <input type="email" name="email" id="email" class="form-control" placeholder="example@mail.com">
            </div>
        </div>
        <!-- submit -->
        <button type="submit" class="btn">儲存</button>
    </form>


</main>

<div class="container mt-4 mt-lg-0 d-none">
    <div class="row">
        <div class="col-12 col-lg-9 mb-2">
            <p class="h3">個人資料</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <img src="../../images/navbar-ex-1.jpg" alt="" class="img-thumbnail">
        </div>
        <div class="col-12 col-lg-9 mb-2">
            <p class="ms-1">完成填寫個人資料可享有更多會員專屬權益</p>
        </div>
        <div class="col-12 col-lg-9 mb-2">
            <form>
                <!-- 姓名 -->
                <div class="row mb-3">
                    <label for="full-name" class="col-12 col-md-1 col-form-label">姓名</label>
                    <div class="col">
                        <input type="text" name="full-name" class="form-control">
                    </div>
                </div>
                <!-- 性別 -->
                <fieldset class="row mb-3">
                    <legend class="col-12 col-md-1 col-form-label">性別</legend>

                </fieldset>
                <!-- 生日 -->

                <!-- 手機 -->

                <!-- 信箱 -->

                <!-- 儲存 -->
                <button type="submit" class="btn">儲存</button>
            </form>
        </div>
    </div>
</div>