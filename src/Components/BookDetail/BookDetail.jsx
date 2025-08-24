import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;


    return (
        <div className='p-3 md:p-6'>
            <div className="hero bg-base-200 my-10 max-w-6xl mx-auto">
                <div className="md:flex gap-8">
                    <img
                        src={image}
                        className="h-[600px] rounded-lg shadow-2xl p-6 mt-10"
                    />
                    <div className='mt-4 max-w-2xl space-y-4 p-2 md:p-0'>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-2">
                            {author}
                        </p>
                        <div className="divider"></div>
                        <p>{category}</p>
                        <div className='divider my-2'></div>
                        <p>{review}</p>
                        <div>
                            {tags.map((tag, index) => <a key={index}>{tag}</a>)}
                        </div>
                        <div className='divider'>

                        </div>


                        <div className="space-y-2">
                            <div className="flex">
                                <p className="w-40 font-medium">Number of Pages:</p>
                                <p className="font-semibold">{totalPages}</p>
                            </div>

                            <div className="flex">
                                <p className="w-40 font-medium">Publisher:</p>
                                <p className="font-semibold">{publisher}</p>
                            </div>

                            <div className="flex">
                                <p className="w-40 font-medium">Year of Publishing:</p>
                                <p className="font-semibold">{yearOfPublishing}</p>
                            </div>

                            <div className="flex">
                                <p className="w-40 font-medium">Rating:</p>
                                <p className="font-semibold">{rating}</p>
                            </div>

                            <div className='flex gap-6 my-3'>
                                <button class="btn btn-soft">Read</button>
                                <button class="btn btn-accent">WhishList</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;