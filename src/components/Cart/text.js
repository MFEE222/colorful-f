<div className="row  my-1 card-house">
    {display.map((v, i) => {
        const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
        // console.log('img :>> ', img);
        return (
            <div className="col-6 col-md-4 mt-2 px-3 mb-2" key={v.id}>
                <div className="card-border ">
                    <div className="card-img position-relative">
                        <div className="ratios">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                        {v.status == 2 ? (
                            <span className="position-absolute top-0  translate-middle p-2  border-light rounded-circle download-badge">
                                <span className="badge bg-secondary">
                                    已下載
                                </span>
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="card-body text-start p-0 my-2 my-md-4">
                        <label
                            htmlFor={v.id}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <input
                                className="form-check-input m-0"
                                type="checkbox"
                                value={v.id}
                                id={v.id}
                                checked={v.check}
                                onChange={function (e) {
                                    handleCheck(e, i);
                                }}
                            />
                            <p className="card-title fw-bold">{v.name}</p>
                        </label>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    })}
</div>;
