import { useImperativeHandle } from 'react/cjs/react.production.min';

export const API_URL =
    (process.env.EXPRESS_API_URL || 'http://localhost:3006') + '/api';

export const IMG_URL = process.env.EXPRESS_API_URL || 'http://localhost:3006';

// req:
// {
//     userid,
// }
// res:
// {
//     id,
//     created_at,
//     product_id,
//     user_id,
// }
export const API_GET_WISHLIST = API_URL + '/wishlist';
