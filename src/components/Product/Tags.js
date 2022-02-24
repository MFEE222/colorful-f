import React from 'react';
function Tags(props) {
    const { tags } = props.init;
    // console.log(tags);
    // console.log('Array.isArray(tags) :>> ', Array.isArray(tags));

    return (
        <>
            <div className=" container row flex-nowrap tags-list ps-0">
                {/* 初始時是空的 */}
                {tags &&
                    tags.map((tag) => {
                        return (
                            <div
                                className="col-auto m-2 mx-md-2  tag-text"
                                key={tag.id}
                            >
                                <i className="fas fa-hashtag pe-1"></i>
                                {tag.name}
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default Tags;
