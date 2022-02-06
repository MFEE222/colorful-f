// FIXME: >=768px 整個 main 爆版
// FIXME: >=992px 付款資訊 sticky 爆版
// FIXME: 整個 main 的 margin-top 不夠
// FIXME: 信用圖片大小，會隨版面縮放而過度放大模糊，兩張信用卡圖片不一樣大
// FIXME: 字體大小不一致
// FIXME: 沒有寫 .scss 調整

<main class="col-12 col-lg-10">
    <div class="container mt-4 mt-lg-0 ">
        <div class="row">
            <div class="col-12 col-lg-9 mb-4">
                <p class="h3">付款資訊</p>
            </div>

            <div class="col-12 col-lg-6 mb-2 p-0">
                <ul class="list-group list-group-flush ms-1">
                    <li class="list-group-item"><i class="fab fa-apple mx-2"></i>Apple Pay</li>
                    <li class="list-group-item"><i class="fab fa-google mx-2"></i>Google Pay</li>
                    <li class="list-group-item"><i class="fab fa-cc-visa mx-2"></i>**** 1234</li>
                </ul>
            </div>
            <div class="col-12 col-lg-4">
                <img src="http://lcus1storage.azureedge.net/web/v3/images/global/US_BC_Static_315x198.jpg" alt=""
                    class="w-100">
            </div>

            <div class="col-12 col-lg-6 mb-2 mt-5 mt-lg-5">
                <button type="button" class="btn btn-warning rounded-pill mx-2 px-4">修改</button>
                <button type="button" class="btn btn-warning rounded-pill mx-2 px-4">新增</button>
            </div>

            <div class="row mt-5 align-items-end">
                <div class="col-12 col-lg-5 mb-4 pt-5">
                    <img src="https://www.visa.com.tw/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-gold-card-498x280.png"
                        alt="" class="w-100">
                </div>

                <div class="col-12 col-lg-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Card Number"
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Exp Month"
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                        <input type="text" class="form-control" placeholder="Exp Date" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="CVV" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                    </div>
                </div>

                <div class="col-12 col-lg-6 mt-4">
                    <button type="button" class="btn btn-warning rounded-pill mx-2 px-4">儲存</button>
                </div>

            </div>
        </div>
    </div>
</main>