import React, {useState, useEffect} from 'react'
import './styles.css'

import {BsSearch} from 'react-icons/bs'

import api from '../../services/api'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BackButton from '../../components/BackButton/index'
import { response } from 'express'

interface BookInterface{
    title: string,
    gender: string,
    pages: number,
    urlimage: string
}

interface BooksListInterface{
    title: string
}

export default function Select() {

    const [book, setBook] = useState<BookInterface[]>([])
    const [bookList, setBookList] = useState<BooksListInterface[]>([])
    const [searchBook, setSearchBook] = useState('')

    useEffect(() => {
        api.get('/get-one-book/' + searchBook).then(response => setBook(response.data))
    })

    useEffect(() => {
        api.get('/list-to-select-input').then(response => setBookList(response.data))
    })



    return (
        <div>
            <Header/>
            <div className="main-container">
                <h3>Find a book</h3>
                <div className="search-container">
                    <select onChange={e => setSearchBook(e.target.value)} name="select-titles" id="select-titles">
                        <option>Select a book to find</option>
                        {bookList.map(item => (<option>{item.title}</option>))}
                    </select>                    
                    <button><BsSearch size='16'/></button>
                </div>
                <div className="show-book">
                    {book.map(item => (
                        <div className='render-data'>
                            <h3>{item.title}</h3>
                            <p>{item.gender}</p>
                            <p>{item.pages}</p>
                            <img src={item.urlimage} alt='books-collection'/>
                        </div>
                    ))}
                </div>
            </div>
            <BackButton/>
            <Footer/>
        </div>
    )
}
