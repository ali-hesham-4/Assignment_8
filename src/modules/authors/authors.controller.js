import authorModel from "../../../db/models/authors.model.js"
import bookModel from "../../../db/models/books.model.js"


//  ======================================= Add Author  =======================================

export const addAuthor = async (req , res , next)=>{
    try{
        const{birthDay} = req.body
        const author = await authorModel.create(req.body)
        res.status(200).json({msg:"Author Added Successfully"})
    }catch(err){
        if(err.errors.birthDate.reason.code == "ERR_ASSERTION"){
            return res.status(400).json({msg:"BirthDay formate is incorrect ....Please insert date As this Format 'Year / Month / Day' " , err})
        }
        res.status(400).json(err)
    }
}

//  ======================================= Get All Authors  =======================================

export const getAllAuthors = async (req , res , next)=>{
        const author = await authorModel.find({})
        res.status(200).json(author)
}

//  ======================================= Get A Spacific Author  =======================================

export const getASpacificAuthor = async (req , res , next)=>{
        const author = await authorModel.findOne({_id: req.query.id})
        res.status(200).json(author)
}


//  ======================================= Update A Spacific Author  =======================================

export const updateASpacificAuthor = async (req , res , next)=>{
    const {name , bio , birthDate , books} = req.body
        const author = await authorModel.updateOne({_id: req.query.id}, {name , bio , birthDate , books})
        if(author.matchedCount == 0){
            return res.status(404).json({msg:"Can Not Find This Author"})
        }
        res.status(200).json({msg:"Author is Updated Successfully"})
}


//  ======================================= Delete A Spacific Author  =======================================

export const deleteASpacificAuthor = async (req , res , next)=>{
    const {name , bio , birthDate , books} = req.body
        const author = await authorModel.deleteOne({_id: req.query.id})
        if(author.deletedCount == 0){
            return res.status(404).json({msg:"Can Not Find This Author"})
        }
        res.status(200).json({msg:"Author is Deleted Successfully"})
}

//  ======================================= Get All Authors With his Books and All Books (Bonus Task)   =======================================

export const GetAllAuthorsAndAllBooks = async (req , res , next)=>{
        const author = await authorModel.find({name: req.query.name } || {bio: req.query.bio}).populate("books")
        const book = await bookModel.find({title: req.query.title} || {author: req.query.author})
        res.status(200).json({authors:author , books:book})
}
//  ======================================= Filter Authors  =======================================

export const filterAuthors = async (req , res , next)=>{
        const author = await authorModel.find(req.query)
        res.status(200).json(author)
}

//  ======================================= get Author with his Books  =======================================

export const getAuthorWithHisBooks = async (req , res , next)=>{
        const author = await authorModel.find(req.query.id).populate("books")
        res.status(200).json(author)
}