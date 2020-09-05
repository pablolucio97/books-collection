import React from 'react'
import '../../globals.css'
import '../Home/styles.css'

import {Link} from 'react-router-dom'
import {DiGithubBadge} from 'react-icons/di'
import {VscBook} from 'react-icons/vsc'

import Header from '../../components/Header/index'

export default function Home(){
    return (
        
        <div>
            <Header/>
            <main>
            <div className="menu-container">
                <h3>What we done?</h3>
                    <p className="strong-text">Books Collection provides to you your prefered books and list them. You can add your books, find one and remove them from your books collection.</p>
                <h3>What you want to do?</h3>
                <Link to='/list-books' className='btn-action'>List all books</Link>
                <Link to='/add-book' className='btn-action'>Add a book</Link>
                <Link to='/find-book' className='btn-action'>Find one book</Link>
                <Link to='/delete-book' className='btn-action'>Remove a book</Link>
            </div>
            </main>
            <div className="footer-container">
                <h3>Books Collection</h3>
                <DiGithubBadge size='50' color='#fff'/>
                <a href="https://github.com/pablolucio97/books_collection">GitHub</a>
            </div>
        </div>
    )
}