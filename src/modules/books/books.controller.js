import bookModel from "../../../db/models/books.model.js"

//  ======================================= Add Book  =======================================

export const addBook = async (req , res, next)=>{
    const book = await bookModel.create(req.body)
    res.status(200).json({msg:"Added Successfully"})
}

//  ======================================= Get All Books  =======================================

export const getAllBooks = async (req , res, next)=>{
    const book = await bookModel.find({})
    res.status(200).json(book)
}

//  ======================================= Get A Spacific Book  =======================================

export const getASpacificBook = async (req , res, next)=>{
    const book = await bookModel.findOne({_id: req.query.id})
    if(book == null){
        return res.status(404).json({msg:"Can Not Find This Book"})
    }
    res.status(200).json(book)
}

//  ======================================= Update A Spacific Book  =======================================

export const updateASpacificBook = async (req , res, next)=>{
    const {title , content , author , publishedDate} = req.body
    const book = await bookModel.updateOne({_id: req.query.id} , {title , content , author , publishedDate})
    if(book.matchedCount == 0){
        return res.status(404).json({msg:"Can Not Find This Book"})
    }
    res.status(200).json({msg:"Book is Updated Successfully"})
}

//  ======================================= Delete A Spacific Book  =======================================

export const deleteASpacificBook = async (req , res, next)=>{
    const book = await bookModel.deleteOne({_id: req.query.id})
    if(book.deletedCount == 0){
        return res.status(404).json({msg:"Can Not Find This Book"})
    }
    res.status(200).json({msg:"Book is Deleted Successfully"})
}

//  ======================================= Filter Books  =======================================

export const filterBooks = async (req , res, next)=>{
    const book = await bookModel.find(req.query)
    res.status(200).json(book)
}