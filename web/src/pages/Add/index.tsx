import React, {useState} from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import BackButton from '../../components/BackButton/index'

import './styles.css'
import api from '../../services/api'
import { response } from 'express'

export default function Add() {

    const [title, setTitle] = useState('')
    const [gender, setGender] = useState('')
    const [pages, setPages] = useState('')
    const [img, setImg] = useState('')


    const addBook = async () => {
        await api.post('/add-book', {
            title: title,
            gender: gender,
            pages: pages,
            urlimage: img
        }).then(() => {if(title.length > 5 && gender.length > 5 && pages.length > 0 ){
            window.alert('Your book has added with succes. Verify your book list!')
        }else{
            window.alert('A problem has ocurred. Verify your entrances and try again.')
        }}
            )
    }
    

    return (
        <div>
            <Header/>
            <main>
                <div className="main-container">
                    <h3>Add your book</h3>
                    <input type="text" autoFocus
                    onChange={e => setTitle(e.target.value)}
                    placeholder='title' name="add-title" id="add-title"/>
                    <input type="text"
                    onChange={e => setGender(e.target.value)}
                    placeholder='gender' name="add-gender" id="add-gender"/>
                    <input type="text"
                    onChange={e => setPages(e.target.value)}
                    placeholder='number of pages' name="add-pages" id="add-pages"/>
                    <input type="text"
                    onChange={e => setImg(e.target.value)}
                    placeholder='hood img url' name="add-img" id="add-img"/>
                    <button onClick={addBook}>Add</button>
                </div>
            </main>
            <BackButton/>
            <Footer/>
        </div>
    )
}
