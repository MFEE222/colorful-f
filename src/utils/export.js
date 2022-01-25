const name = 'here is export.js';
// export 又可區分為兩種，這兩種的匯出手法略有不同，也會影響到 import 的運用，所以在運用前請先明確區分這兩種的差異（非常重要）：

// named export（具名匯出）：可匯獨立的物件、變數、函式等等，匯出前必須給予特定名稱，而匯入時也必須使用相同的名稱。另外，一個檔案中可以有多個 named export。
// default export（預設匯出）：一個檔案僅能有唯一的 default export，而此類型不需要給予名稱。
// 除此之外，兩者也可共存於同一個檔案內，只不過 default export 僅能有一個。
export default class {
    constructor(url) {
        this.url;
    }

    get() {
        console.log('this is get method', name);
    }

    post() {
        console.log('this is post method', name);
    }

    put() {
        console.log('this is put method', name);
    }

    delete() {
        console.log('this is delete method', name);
    }
}

// export default function n42() {
//     console.log(42);
// }

// export default function n32() {
//     console.log(32);
// }

// { n42 }
// return ...
