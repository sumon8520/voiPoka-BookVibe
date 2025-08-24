import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const Book = ({ book }) => {

    const { bookId, image, author, bookName, rating, tags, category } = book;
    return (
        <div className='p-2 md:p-4 lg:p-0'>
            <Link to={`/Books/${bookId}`}>
                <div className="card bg-base-100 shadow-sm border-2 border-gray-600 p-5">
                    <figure className='bg-[#F3F3F3] p-6 rounded-2xl'>
                        <img
                            src={image}
                            className='h-[166px]' />
                    </figure>
                    <div className="">
                        <div className='flex gap-2 my-2.5'>
                            {
                                tags.map((tag,index) => <button key={index} type="submit" className="btn">{tag}</button>)
                            }
                        </div>
                        <h2 className='text-2xl font-bold my-2 text-start'>{bookName}</h2>
                        <p className='text-start font-medium text-xl my-2'>By: {author}</p>

                        <div className="flex w-full flex-col">

                            <div className="border-t-2 border-dashed my-2"></div>

                            <div className="flex justify-between">
                                <p>{category}</p>
                                <p>{rating}<FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;