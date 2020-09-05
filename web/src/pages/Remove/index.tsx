import React, {useState} from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import './styles.css'
import BackButton from '../../components/BackButton/index'

import {MdDelete} from 'react-icons/md'

import api from '../../services/api'


export default function Remove() {

    const [searchBook, setSearchBook] = useState('')
    
    const removeBook = () => {
        api.put('delete-book/' + searchBook).then(() => window.alert(`The book ${searchBook} has removed from your collection. Check your list.`))
    }

    return (
        <div>
            <Header/>
            <div className="main-container">
                    <h3>Remove a book</h3>
                <div className="search-container">
                    <input type="text" autoFocus name="remove-book" id="remove-book" className="search-book" placeholder='type a book title to remove' onChange={e => setSearchBook(e.target.value)}/>
                    <button onClick={removeBook}><MdDelete size='20'/></button>
                </div>
            </div>
            <BackButton/>
            <Footer/>
        </div>
    )
}
