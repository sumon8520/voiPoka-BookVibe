import React from 'react';
import bannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg my-8">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <img
                    src={bannerImg}
                />
                <div>
                    <h1 className="text-5xl font-bold mb-11">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] border-none">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;