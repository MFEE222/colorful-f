import { include, reverse } from 'named-urls';
export { reverse } from 'named-urls';

export const domain = process.env.REACT_APP_API_URL || 'http://localhost:3006';

export const asset = include('/', {
    static: ':static',
    images: include('images/', {
        static: ':static',
        all: include('all/', {
            static: ':static',
        }),
        newest: include('newest/', {
            static: ':static',
        }),
        food: include('food/', {
            static: ':static',
        }),
        wedding: include('wedding/', {
            static: ':static',
        }),
        film: include('film/', {
            static: ':static',
        }),
        scenery: include('scenery/', {
            static: ':static',
        }),
        portrait: include('portrait/', {
            static: ':static',
        }),
    }),
    uploads: include('uploads/', {
        profile: include('profile/', {
            static: ':static',
        }),
        reviews: include('reviews/', {
            static: ':static',
        }),
    }),
});

export const api = include('/api', {
    auth: include('auth/', {
        get: '',
        health: include('health/', {
            get: '',
        }),
        token: include('token/', {
            get: '',
        }),
        singin: include('signin/', {
            post: '',
        }),
        signup: include('signup/', {
            post: '',
            token: include(':token', {
                get: '',
            }),
        }),
        forgot: include('forgot/', {
            post: '',
            token: include(':token/', {
                get: '',
                post: '',
            }),
        }),
        reset: include('reset-password/', {
            post: '',
        }),
        signout: include('signout/', {
            delete: '',
        }),
        edit: include('edit/', {
            personal: include('personal-info/', {
                post: '',
            }),
            email: include('email/', {
                post: '',
                token: include(':token/', {
                    get: '',
                }),
            }),
            avatar: include('avatar/', {
                post: '',
            }),
        }),
        google: include('google/', {
            signin: include('signin/', {
                post: '',
            }),
        }),
    }),
    // TODO: adjust http method
    product: include('products/', {
        self: '',
        tags: 'list/',
        series: 'list/',
        recommend: 'recommend/',
        review: 'review/',
    }),
    cart: include('cart/', {
        self: '',
    }),
    member: include('member/', {
        review: include('review/', {
            images: 'img/',
            update: include('update/', {
                self: '',
                detail: 'detail/',
            }),
            download: 'download/',
        }),
        // FIXME: adjust url
        profile: include('profile/', {
            post: '',
            get: '',
        }),
        order: include('order/', {
            get: '',
            post: '',
            detail: include('detail/', {
                get: '',
            }),
            payment: include('payment/', {
                post: '',
            }),
        }),
    }),
    download: include('download/', {
        get: '',
    }),
});

export function url(route, params) {
    return domain + reverse(route, params);
}

export const secret = {
    google: {
        client: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    },
};

export const cdn = {
    google: {
        gsi: process.env.REACT_APP_GOOGLE_SIGNIN_CDN,
    },
};

export const local = {
    cart: 'colorful-cart',
};

// Object.keys(api).forEach((key) => {
//     console.log('api[key] :>> ', api[key]);
// });
