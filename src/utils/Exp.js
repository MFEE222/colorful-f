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
