<!-- 
  // FIXME: >=768px 整個 main 爆版 - 2/7 已修改
  // FIXME: >=992px 付款資訊 sticky 爆版 - 2/7 已修改
  // FIXME: 整個 main 的 margin-top 不夠 - 2/7 已修改
  // FIXME: 信用圖片大小，會隨版面縮放而過度放大模糊，兩張信用卡圖片不一樣大 - 待處理
  // FIXME: 字體大小不一致 - 待處理
  // FIXME: 沒有寫 .scss 調整 - 待處理 -->

<main class="col-12 col-md-10 member-payment-main">

  <!-- title -->
  <div class="row justify-content-evenly">
    <div class="col-12 col-md-10 me-md-3 mt-5 mx-4">
      <p class="h3">付款資訊</p>
    </div>
  </div>

  <!-- Top Section -->
  <div class="row justify-content-evenly">
    <div class="col-12 col-md-4 mt-4">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fab fa-apple m-2"></i>Apple Pay</li>
        <li class="list-group-item"><i class="fab fa-google m-2"></i>Google Pay</li>
        <li class="list-group-item"><i class="fab fa-cc-visa m-2"></i>**** 1234</li>
      </ul>
    </div>
    <div class="col-auto col-md-5 col-lg-4 mx-5 mt-4">
      <img src="http://lcus1storage.azureedge.net/web/v3/images/global/US_BC_Static_315x198.jpg" alt="" class="img-fluid">
    </div>
  </div>

  <!-- Top Section - Button-->
  <div class="row justify-content-evenly">
    <div class="col-auto col-md-10 me-md-3 my-5">
      <button type="button" class="btn btn-warning rounded-pill px-4">修改</button>
      <button type="button" class="btn btn-warning rounded-pill mx-2 px-4">新增</button>
    </div>
  </div>

  <!-- Bottom Section -->
  <div class="row justify-content-center">
    <div class="col-auto col-md-5 col-lg-4 mt-5">
      <img src=" https://www.visa.com.tw/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-gold-card-498x280.png" alt="" class="img-fluid">
    </div>

    <div class="col-auto col-md-5 col-lg-6 mt-5">
      <div class="input-group">
        <input type="text" class="form-control mb-4" placeholder="Card Number" aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
      <div class="input-group">
        <input type="text" class="form-control mb-4" placeholder="Exp Month" aria-label="Recipient's username" aria-describedby="button-addon2">
        <input type="text" class="form-control mb-4" placeholder="Exp Date" aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
      <div class="input-group">
        <input type="text" class="form-control mb-4" placeholder="CVV" aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
    </div>
  </div>

  <!-- Bottom Section - Button -->
  <div class="row justify-content-evenly">
    <div class="col-auto col-md-10 me-md-3 mt-1">
      <button type="button" class="btn btn-warning rounded-pill px-4">儲存</button>
    </div>
  </div>

</main>