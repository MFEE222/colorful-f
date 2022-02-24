export const routes = {
    // main
    _home: '/',
    _auth: '/auth',
    _product: '/product',
    _member: '/member',
    _team: '/team',
    _teach: '/teach',
    _cart: '/cart',
    _error: '*',
    // auth
    _signin: '/signin',
    _signup: '/signup',
    _forgot: '/forgot',
    // product
    _productDetail: '/detail',
    _productList: '/list',
    // member
    _profile: '/profile',
    _orderList: '/order-list',
    _orderDetail: '/order-detail',
    _download: '/download',
    _favorite: '/favorite',
    _review: '/review',
    _reviewDetail: '/review-detail',
    _mail: '/mail',
    _mailDetail: '/mail-detail',
    _payment: '/payment',
    _collect: '/collect',
    // test
    _test: '/test',

    // 第一層路由
    get home() {
        return this._home;
    },
    get auth() {
        return this._auth;
    },
    get product() {
        return this._product;
    },
    get member() {
        return this._member;
    },
    get team() {
        return this._team;
    },
    get teach() {
        return this._teach;
    },
    get cart() {
        return this._cart;
    },
    get error() {
        return this._error;
    },
    // 第二層路由
    // auth
    get signin() {
        return this._auth + this._signin;
    },
    get signup() {
        return this._auth + this._signup;
    },
    get forgot() {
        return this._auth + this._forgot;
    },
    // product
    get productDetail() {
        return this._product + this._productDetail;
    },
    get productList() {
        return this._product + this._productList;
    },
    // member
    get profile() {
        return this._member + this._profile;
    },
    get orderList() {
        return this._member + this._orderList;
    },
    get orderDetail() {
        return this._member + this._orderDetail;
    },
    get download() {
        return this._member + this._download;
    },
    get favorite() {
        return this._member + this._favorite;
    },
    get review() {
        return this._member + this._review;
    },
    get reviewDetail() {
        return this._member + this._reviewDetail;
    },
    get mail() {
        return this._member + this._mail;
    },
    get mailDetail() {
        return this._member + this._mailDetail;
    },
    get payment() {
        return this._member + this._payment;
    },
    get collect() {
        return this._member + this._collect;
    },
    get test() {
        return this._test;
    },
};
