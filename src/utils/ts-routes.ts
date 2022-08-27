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
        signin: 'signin/',
        signup: 'signup/',
        forgot: 'forgot/',
        reset: 'reset/'
    }),
    product: include('/product', {
        all: '',
        id: ':id',
        food: 'food/',
        wedding: 'wedding/',
        film: 'film/',
        scenery: 'scenery/',
        portrait: 'portrait/',
        newest: 'newest/'
    }),
    member: include('/member', {
        all: '',
        profile: 'profile/',
        order: include('order/', {
            all: '',
            id: ':id'
        }),
        download: include('download/', {
            all: '',
            id: ':id'
        }),
        favorite: include('favorite/', {
            all: '',
            id: ':id'
        }),
        review: include('review/', {
            all: '',
            id: ':id'
        }),
        mail: include('mail/', {
            all: '',
            id: ':id',
        }),
        payment: 'payment/',
    }),
    cart: include('/cart', {
        all: '',
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

