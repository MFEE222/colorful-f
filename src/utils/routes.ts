//==================================================
// Object 
//==================================================
const routes = {
    landing: '/',
    home: '/home',
    team: '/team',
    teach: '/teach',
    game: '/game',
    error: '*',
    auth: include('/auth', {
        self: '',
        signin: 'signin/',
        signup: 'signup/',
        forgot: 'forgot/',
        reset: 'reset/'
    }),
    product: include('/product', {
        self: '',
        food: 'food/',
        wedding: 'wedding/',
        film: 'film/',
        scenery: 'scenery/',
        portrait: 'portrait/',
        newest: 'newest/',
        detail: 'detail/:detail'
    }),
    member: include('/member', {
        self: '',
        profile: 'profile/',
        order: include('order/', {
            self: '',
            id: ':id'
        }),
        download: include('download/', {
            self: '',
            id: ':id'
        }),
        favorite: include('favorite/', {
            self: '',
            id: ':id'
        }),
        review: include('review/', {
            self: '',
            id: ':id'
        }),
        mail: include('mail/', {
            self: '',
            id: ':id',
        }),
        payment: 'payment/',
    }),
    cart: include('/cart', {
        self: '',
        checkout: 'checkout/'
    }),
} as const;

//==================================================
// Type
//==================================================
type R = {
    [key: string]: any;
};

//==================================================
// Function
//==================================================
function include(index: string, route: R = {}): R {
    const res: R = {};
    for (const key in route) {
        switch (typeof route[key]) {
            case 'string':
                const p = route[key] as string;
                if (p.charAt(0) === '/') {
                    res[key] = p;
                }
                else if (index.charAt(0) === '/') {
                    res[key] = index.concat('/', p);
                }
                else if (index.charAt(index.length - 1) === '/') {
                    res[key] = index.concat(p);
                }
                break;
            case 'object':
                res[key] = include(index, route[key] as R);
                break;
        }
    }

    return res;
}
export function reverse(url: string, params: R): string {
    let res = '';
    for (const key in params) {
        res = url.replace(`:${key}`, params[key] as string);
    }
    return res;
}
//==================================================
// Export
//================================================== 
// console.log('routes :>> ', routes);
export default routes;

