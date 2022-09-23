import "./index.scss";

function Loading() {
    return (
        <div className="loading">
            <div className="token">
                <div className="circle"></div>
                <div className="text">Loading</div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default Loading;
