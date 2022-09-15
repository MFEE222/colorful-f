import { include } from 'named-urls';

export function route(url) {
    return url.split('/').filter((r) => r !== '');
}

export const routes = {
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
        reset: 'reset/',
    }),
    product: include('/product', {
        self: '',
        food: 'food/',
        wedding: 'wedding/',
        film: 'film/',
        scenery: 'scenery/',
        portrait: 'portrait/',
        newest: 'newest/',
        detail: 'detail/:detail',
    }),
    member: include('/member', {
        self: '',
        profile: 'profile/',
        order: include('order/', {
            self: '',
            id: ':id',
        }),
        download: include('download/', {
            self: '',
            id: ':id',
        }),
        favorite: include('favorite/', {
            self: '',
            id: ':id',
        }),
        review: include('review/', {
            self: '',
            id: ':id',
        }),
        mail: include('mail/', {
            self: '',
            id: ':id',
        }),
        payment: 'payment/',
    }),
    cart: include('/cart', {
        self: '',
        checkout: 'checkout/',
    }),
};
