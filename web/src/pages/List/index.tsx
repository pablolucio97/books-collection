import React, {useState, useEffect} from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BackButton from '../../components/BackButton/index'

import './styles.css'
import api from '../../services/api'

interface BooksInterface{
    title: string,
    pages: number,
    gender: string,
    urlimage: string,
    img: string
}

export default function List() {

    const [books, setBooks] = useState<BooksInterface[]>([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        api.get('/list-books?page=' + page).then(response => {
            const books = response.data
            setBooks(books)
        })})
    

    const toPage1 = () => {
        setPage(1)
    }

    const toPage2 = () => {
        setPage(2)
    }

    const toPage3 = () => {
        setPage(3)
    }

    const toPage4 = () => {
        setPage(4)
    }

    const toPage5 = () => {
        setPage(5)
    }
    

    return (
        <div>
            <Header/>
                <main>
                    <div className="list-container">
                        {books.map(item => (
                            <div className="render-data">
                                <h3 className="render-data-item">Title: {item.title}</h3>
                                <p className="render-data-item">Gender: {item.gender}</p>
                                <ul className="render-data-item">Number of pages: {item.pages}</ul>
                                <img src={item.urlimage} alt="books-collection"/>
                                <div className='hr'></div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-container">
                        <button onClick={toPage1}>1</button>
                        <button onClick={toPage2}>2</button>
                        <button onClick={toPage3}>3</button>
                        <button onClick={toPage4}>4</button>
                        <button onClick={toPage5}>5</button>
                    </div>
                </main>
                    <BackButton/>   
            <Footer/>
        </div>
    )
}
