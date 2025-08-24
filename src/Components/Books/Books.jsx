import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [book, setBooks] = useState([]);

    useEffect( () => {
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='text-center my-16'>
            <h2 className='text-5xl font-bold my-7'>Books</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    book.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;