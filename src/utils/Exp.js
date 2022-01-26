// export default class User {
//     constructor() {
//         this.user = 'liz';
//     }

//     whoUser() {
//         console.log('this is user', this.user);
//     }
// }

export function whoUser() {
    console.log('this is user', this.user);
}

export default {
    user: 'liz',
    whoUser,
};

// export function foo1() {}

// export function foo2() {}

// export default () {}

// import { foo1, foo2 } from 'Exp';

// import FOO3 from 'Exp';

// exports = module.exports = {}

// exports.foo = function() {}

// const foo2 = {};

// module.exports = {foo1, foo2};
// module.exports = myObject;

// return module.exports = { foo1, foo2, };

// const foo = require('123');
