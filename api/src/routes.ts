import express from 'express'

const routes = express.Router()

import BooksController from './controllers/BooksController'

const usingBooks = new BooksController()

//ADD BOOK
routes.post('/add-book', usingBooks.create)

//LIST ALL BOOKS
routes.get('/list-books', usingBooks.list)

//LIST ALL BOOKS WITHOUT PAGINATION
routes.get('/list-all-books', usingBooks.listWithOutPagination)

//LIST TO USE IN SELECT INPUT
routes.get('/list-to-select-input', usingBooks.listToSelect)

//LIST A BOOK BY YOUR TITLE
routes.get('/get-one-book/:title', usingBooks.index)

//ALTER A BOOK CHARACTERISTICS
routes.put('/alter-book/:id', usingBooks.update)

//SOFT DELETE
routes.put('/delete-book/:title', usingBooks.softDelete)

//HARD DELETE
routes.delete('/exclude-book/:title', usingBooks.exclude)

export default routes