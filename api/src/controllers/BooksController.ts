import db from '../connection'
import {Request, Response} from 'express'


export default class BooksController{
    
    async list(req: Request, res: Response){
    try{
        const {page} = req.query
        const filteredPage = await db('books').where('deleted_at', null).limit(3).offset((Number(page) -1) * 3)
        return res.json(filteredPage)
        }catch(error){
            console.log(error)
            res.status(404)
        }
    }

    async listWithOutPagination(req: Request, res:Response){
        try{
            const result = await db('books').where('deleted_at', null)
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }

    async listToSelect(req: Request, res: Response){
        try{
            const result = await db('books').where('deleted_at', null)
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }

    async create(req: Request, res: Response){
        try{
            const {title, gender, pages, urlimage} = req.body
            const result = await db('books').insert({title, gender, pages, urlimage})
            const bookId = result[0]
            return res.json({
                title,
                gender,
                pages,
                bookId,
                urlimage
            })
        }catch(error){
            console.log(error)
        }
    }

    async index(req: Request, res: Response){
        try{
            const {title} = req.params
            const result = await db('books').where('title', title).select('*')
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }

    async update (req: Request, res: Response){
        try{
            const {id} = req.params
            const {title, gender, pages, urlimage} = req.body
            const result = await db('books').where('id', id).update('title', title).update('gender', gender).update('pages', pages).update('urlimage', urlimage)
            return res.json(result)
        } catch(error){
            console.log(error)
        }
    }

    async softDelete (req: Request, res: Response){
        try{
            const {title} = req.params
            const currentTime = new Date()
            const renderTime = currentTime.getDate().toString()
            const result = await db('books').where('title', title).update('deleted_at', renderTime )
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }

    async exclude (req: Request, res: Response){
        try{
            const {id} = req.params
            const result = await db('books').where('id', id).delete('*')
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }


}
