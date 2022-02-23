import React from 'react';
import searchImg from '../../icons/Sortbar/Search.png';
import sortImg from '../../icons/Sortbar/Sort.png';
import deleteImg from '../../icons/Sortbar/Delete.png';
function PSearchFilter(props) {
    const { series } = props.init;
    return (
        <>
            <div className="container d-md-flex">
                <div className="container d-md-flex d-lg-none my-md-3 search-box p-0">
                    <div className="phone-search d-flex justify-content-between ">
                        <input
                            type="search"
                            className="input-style"
                            placeholder="在此輸入關鍵字"
                            // value={searchWord}
                            // onChange={(e) => setSearchWord(e.target.value)}
                        />
                        <div className="search-icon d-flex my-2">
                            <div className="me-2">
                                <img
                                    className="icon-img"
                                    src={deleteImg}
                                    alt=""
                                    // onClick={() => {
                                    //     // setSearchWord('');
                                    // }}
                                />
                            </div>
                            <div className="me-2">
                                <img
                                    className="icon-img"
                                    src={searchImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* xs,sm filterbar */}
                <div className="container d-flex justify-content-around  align-items-center my-2 d-lg-none phone-filter p-0 ms-md-2">
                    <div className="d-lg-none ms-1 ">
                        <label className="me-2">價格</label>
                        <input
                            type="search"
                            className="md-input-style price-input w-25 me-2"
                            placeholder="$"
                        />
                        ～
                        <input
                            type="search"
                            className="md-input-style price-input w-25 mx-2"
                            placeholder="$"
                        />
                    </div>

                    <div className="d-flex justify-content-end align-items-center">
                        <div className="dropdown-style my-auto me-2">
                            <select
                                name="filter-select"
                                id="filter-select"
                                className="filter-select"
                            >
                                <option value="defalut">篩選</option>
                                <option value="all">全部</option>
                                <option value="new">最新</option>
                                {series &&
                                    series.map((v) => {
                                        return (
                                            <>
                                                <option
                                                    key={v.id}
                                                    value="series.name"
                                                >
                                                    {v.descp}
                                                </option>
                                            </>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="icon-g d-flex">
                            <div>
                                <img
                                    className="icon-img"
                                    src={sortImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PSearchFilter;
