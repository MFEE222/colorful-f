import React from 'react';
function Tags(props) {
    const tags = props.tags;
    console.log(tags);

    return (
        <>
            <div className=" container row flex-nowrap tags-list ps-0">
                {tags.map((tag) => {
                    return (
                        <>
                            <div
                                className="col-auto m-2 mx-md-2  tag-text"
                                key={tag.id}
                            >
                                {/* {handleHastag}  */}
                                <i className="fas fa-hashtag pe-1"></i>
                                {tag.name}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Tags;
