import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="py-5 my-5">
                <img className="img-fluid" src="http://ary-themes.com/html/bold_touch/medicoz/images/icons/error.png" alt="" />
            </div>
            <div className="py-5 my-5">
                <h1>Page Not Found</h1>
                <h5 className="mb-5">Please try one of the following pages:</h5>
                <button className="btn btn-info px-4 text-white me-4">HOME PAGE</button>
                <button className="btn btn-info px-4 text-white">CONTACT US</button>
            </div>
        </div>
    );
};

export default NotFound;