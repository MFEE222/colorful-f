//==================================================
// Object 
//==================================================
const Routes = {
    LANDING: include('/'),
    HOME: include('/home'),
    TEAM: include('/team'),
    TEACH: include('/teach'),
    GAME: include('/game'),
    ERROR: include('*'),
    AUTH: include('/auth', {
        SIGNIN: 'signin/',
        SIGNUP: 'signup/',
        FORGOT: 'forgot/',
        RESET: 'reset/'
    }),
    PRODUCT: include('/product', {
        DETAIL: 'detail/:id',
        FOOD: 'food/',
        WEDDING: 'wedding/',
        FILM: 'film/',
        SCENERY: 'scenery/',
        PORTRAIT: 'portrait/',
        NEWEST: 'newest/'
    }),
    MEMBER: include('/member', {
        PROFILE: 'profile/',
        ORDERS: 'orders/',
        ORDER: 'order/',
        DOWNLOAD: 'download/',
        FAVORITE: 'favorite/',
        REVIEWS: 'reviews/',
        REVIEW: 'review/:id',
        PAYMENT: 'payment/',
        MAILS: 'mails/',
        MAIL: 'mail/:id',
    }),
    CART: include('/cart', {
        CHECKOUT: 'checkout/'
    }),
};

console.log('Routes :>> ', Routes);

//==================================================
// Type
//==================================================
type R = {
    [key: string]: string
};

//==================================================
// Function
//==================================================
function include(index: string, route: R = {}): R {
    const res: R = {};
    res.INDEX = index;
    for (const key in route) {
        // absolute path
        if (route[key].charAt(0) === '/')
            res[key] = route[key];
        // prefiex with index (relative)
        else
            res[key] = index.concat('/', route[key]);
    }
    for (const key in res) {
        Object.defineProperty(res, key, {
            writable: false,
        });
    }
    return res;
}
//==================================================
// Export
//================================================== 
export default Routes;