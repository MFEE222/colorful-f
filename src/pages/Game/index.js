import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { routes } from '../../utils/routes';

const imgs = [
    'http://localhost/colorful-f/src/images/%e8%bc%aa%e6%92%ad01.jpg',
    'http://localhost/colorful-f/src/images/%e8%bc%aa%e6%92%ad04.jpg',
    'http://localhost/colorful-f/src/images/%e8%bc%aa%e6%92%ad02.jpg',
    'http://localhost/colorful-f/src/images/%e8%bc%aa%e6%92%ad03.jpg',
    'http://localhost/colorful-f/src/images/%e8%bc%aa%e6%92%ad05.jpg',
    'http://localhost/colorful-f/src/images/film001.jpg',
    'http://localhost/colorful-f/src/images/film002.jpg',
    'http://localhost/colorful-f/src/images/film003.jpg',
    'http://localhost/colorful-f/src/images/film005.jpg',
    'http://localhost/colorful-f/src/images/film006.jpg',
    'http://localhost/colorful-f/src/images/film008.jpg',
    'http://localhost/colorful-f/src/images/film009.jpg',
];
function Test(props) {
    // const imgs = [

    // ];
    // function Block ({ imgURL }) {
    //     return (
    //         <div
    //             className="w-25 mx-1 my-3"
    //             data-bs-toggle="modal"
    //             data-bs-target="#redResult"
    //         >
    //                <img src={imgURL} className="img-thumbnail" alt=""/>
    //         </div>
    //     );
    // };

    return (
        <div className="game">
            <h1 className="t-center mt-3">你的靈魂是什麼顏色?</h1>
            <p className="text-center mt-3">
                在 12
                個顏色當中，依照直覺選出自己最喜愛的，就能分析出自己的性格！
            </p>

            <div className="d-flex flex-wrap w-100 text-center px-5 py-3 justify-content-evenly">
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#coffeeResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/07%e8%8c%b6%e8%89%b2.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#greyResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/08%e7%81%b0.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#blackResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/09%e9%bb%91.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#whiteResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/010%e7%99%bd.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#silverResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/011%e9%8a%80.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#goldResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/012%e9%87%91.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#redResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/01%e7%b4%85%e8%89%b2.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#pinkResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/02%e7%b2%89%e7%b4%85.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#orangeResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/03%e6%a9%99.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#yellowResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/04%e9%bb%83.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#greenResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/05%e7%b6%a0.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
                <div
                    className="w-25 mx-1 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#blueResult"
                >
                    <img
                        src="http://localhost/colorful-f/src/images/06%e6%b0%b4%e8%89%b2.jpg"
                        className="img-thumbnail"
                        alt=""
                    />
                </div>
            </div>
            {/* modal */}
            <div
                className="modal fade"
                id="redResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">
                                紅色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            紅色代表著熱情、積極、生命力，如果你喜歡紅色的，對於任何事情也都會保持好奇心，並且願意嘗試任何事情。這樣的人應該要多發揮自己擅長之處，遇到困難時也能勇敢的堅持下去；但同時面對衝突時，也可能因為不喜歡讓步，容易與他人發生爭執。
                            <br />
                            色彩心理學「紅色效果」：
                            紅色可以增加注意力、向前的動力，因為看到紅色時血壓會升高，同時脈搏跟著變快，因此可以說是「信心」的象徵，選擇攜帶紅色小物，可以讓進行中的事情積極且順利發展。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[0]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFood}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Pink */}
            <div
                className="modal fade"
                id="pinkResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                粉色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            喜歡粉紅色的通常都是溫然又細心的浪漫主義者，粉紅色象徵愛與體貼，對待身邊的所有人也是如此，總是能獲得對方的笑容，且善於理解對方的想法，多數人都願意敞開心胸與你談心，因此能夠建立良好的人際關係。
                            <br />
                            色彩心理學「粉色效果」：
                            在色彩心理學上，粉色是「抑制攻擊性的顏色」，看上去亮眼、漂亮的粉色，其實可以給人平靜、安心的感覺，想要讓內心維持穩定的話，可以戴上粉色的小物。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[1]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productWedding}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Orange  */}
            <div
                className="modal fade"
                id="orangeResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                橘色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            橘色是一個明亮、友好且廣受大家歡迎的顏色。善於交際的性格，讓你像太陽一樣照亮身旁的人事物，營造出充滿活力的氛圍，暖心的個性能透過交談，討論並嘗試一起解決問題，幫助身旁的人走出低潮，通常在團體中都是擔任最溫暖的「安慰劑」。
                            <br />
                            色彩心理學「橘色效果」：
                            橘色讓人感到溫暖、愉悅、安全感，也非常有節日氛圍；此外橘色也可以增加食慾，所以許多餐廳都會使用這個顏色。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[2]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFood}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Yellow */}
            <div
                className="modal fade"
                id="yellowResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                黃色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            如果你喜歡黃色的話，代表你擁有聰明靈活的腦袋，因為黃色代表著智慧以及快樂，善於邏輯思考且有出色的理解能力，面對問題時，也可以理性分析面對，適合在團體中擔任領導者；但其實有時候也讓人感到反差萌，會表現得像個小孩，這樣的違和感也非常討喜。
                            <br />
                            色彩心理學「黃色效果」：
                            黃色通常用在危險警告以及交通安全的標誌，是個能夠引起大家注目的顏色，如果你想要增加個人亮點的話，在穿搭中融入一些黃色，能夠使你更有存在感；另外，黃色也代表著財運，可以讓你工作更順利，增加升遷機率。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[3]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFood}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Green  */}
            <div
                className="modal fade"
                id="greenResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                綠色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            喜愛綠色的你，是一個和平主義者，同時也代表著富足、健康，對身邊的人都非常友善，也願意幫助有需要的人，在面對人際問題時，會選擇讓步來避免衝突發生，親和、平靜且善於勸導他人的人格特質，讓你非常值得依賴。
                            <br />
                            色彩心理學「綠色效果」：
                            象徵自然的綠熱，可以提升健康運勢和放鬆身心的功效，在身上增加綠色單品，可以給人一種柔和的印象，也讓周圍的人感到平靜，對於人際關係上有所幫助。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[4]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productScenery}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Blue */}
            <div
                className="modal fade"
                id="blueResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                天藍色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            淡淡的天空藍，給人一種清新的感受，通常喜歡這個顏色的人，都富有同理心以及洞察力，且性格就像清澈的水一般，沒有固定的形狀，可以隨著不同的情況靈活應對，因為有高度的同理心隨時能同理心對待他人，因此容易與人建立良好的關係。
                            <br />
                            色彩心理學「天空藍效果」：
                            淺藍色有著淨化的力量，就如同流動的水，可以消除壓力以及煩惱，讓心情更加平靜、穩定。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[5]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productScenery}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal-Coffee */}
            <div
                className="modal fade"
                id="coffeeResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                茶色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            如果你喜歡咖啡色的話，則表示你是一個簡單、溫柔同時非也常深情的人，因為棕色代表的穩定、簡單，讓人感到溫暖的大地色系。在面對愛情時，能夠包容對方的缺點，且盡全力的付出照顧另一伴，你身旁的人也能夠被你的深情所治癒。此外，喜歡棕色的人，通常也對於環境要求簡約、整潔，就像你嚮往的生活一樣簡單美好。
                            <br />
                            色彩心理學「咖啡色效果」：
                            棕色具有緩解身心緊張、放鬆心情的作用，可以舒緩過度緊繃的神經，達到穩定身心效果，融入服裝搭配中，能給人一種沉穩溫暖的印象，日常中也非常好搭配！
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[6]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFilm}>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal-Grey */}
            <div
                className="modal fade"
                id="greyResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                灰色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            灰色代表著中立、溫和以及信任，因此喜歡灰色的你，通常有著合諧、不喜歡衝突的個性，在面對生活中大大小小的事情時，能夠站在對方的角度思考，不傷害對方且選擇平靜地解決問題。
                            <br />
                            色彩心理學「灰色效果」：
                            灰色雖然看上去有點沈重，但這種沈穩感，能夠展現出現代氛圍，不論是在室內風格、服裝穿搭中，都非常百搭時髦，如果你想要保持檢單或是擁有平靜的話，可以選擇灰色。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[7]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFilm}>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal-Black */}
            <div
                className="modal fade"
                id="blackResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                黑色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            熱愛黑色的你，擁有不被任何人束縛的堅定信念，在面對自己的決定時，會百分百的堅持，雖然有時候會被他人認為有點固執，但是因為擁有堅定的心，因此在做事情時非常讓人很信任，在緊繃、高壓的狀態下，建議還是要多試著做自己喜歡的事情。
                            <br />
                            色彩心理學「黑色效果」：
                            黑色能夠營造出率性時尚的氣場，還能夠使視覺上顯瘦，因此是許多時尚愛好者必備的單品，同時也夠把嚴肅和奢華感完美融合在一起。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[8]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productFilm}>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal-White --> */}
            <div
                className="modal fade"
                id="whiteResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                白色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            喜歡白色的人，如同白色般純潔且具有淺力，善於觀察且溫和的個性，對於別人的感受也非常敏感，因此善於配合他人的指揮。雖然表面和諧但其實內心是非常堅定、平靜，希望過誠實、善良並簡單的生活。他們抱持著正直的生活態度，對自我要求嚴格，有無限的可能與可塑性。
                            <br />
                            色彩心理學「白色效果」：
                            白色是一種具有心理作用的顏色，能夠讓沉重的行李看起來更輕盈，也象徵著純潔、清新，如果當你每天都忙碌而感到不知所措時，穿白色服裝會是個好主意！
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[9]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productPortrait}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal-Silver --> */}
            <div
                className="modal fade"
                id="silverResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                銀色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            銀色代表著理想、天賦，可以與其他顏色融合在一起，同時又自帶閃亮的奢華感，因此很受歡迎。喜歡銀色的你，很瞭解自己，面對自己也很誠實；另外，對自己的目標設定通常很高，且會努力達成。
                            <br />
                            色彩心理學「銀色效果」：
                            銀色是一種接近灰色的平靜顏色，能夠擁有放鬆的效果，讓您的情緒平靜下來，且配戴銀色飾品也能夠展現精緻、奢華的質感。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[10]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productPortrait}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal-Gold --> */}
            <div
                className="modal fade"
                id="goldResult"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  our-modal">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-center"
                                id="exampleModalLabel"
                            >
                                金色
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            選擇金色的你，是勇敢的領導者性格，在團體中善於擔任領導者，喜歡不畏困難勇敢挑戰自己想做的事情，且就算面對難題也會依然面對目標積極向前。
                            <br />
                            色彩心理學「金色效果」：
                            金色代表著成功、繁榮，同時也可以帶來財運，想要在挑戰某個目標時，建議可以配戴金色小物。
                        </div>
                        <div className="modal-footer justify-content-center">
                            <div className="row justify-content-center">
                                <img
                                    src={imgs[11]}
                                    className="img-thumbnail w-50"
                                    alt="..."
                                />
                            </div>
                            <div className="row justify-content-center">
                                <LinkContainer to={routes.productWedding}>
                                    <button
                                        type="button"
                                        className="btn btn-dark "
                                        data-bs-dismiss="modal"
                                    >
                                        Shop Now
                                    </button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
