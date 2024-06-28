import Router from 'express'
import * as AC  from './authors.controller.js'
const router = Router()

router.post("/", AC.addAuthor)
router.get("/", AC.getAllAuthors)
router.get("/getASpacificAuthor", AC.getASpacificAuthor)
router.patch("/", AC.updateASpacificAuthor)
router.delete("/", AC.deleteASpacificAuthor)
router.get("/GetAllAuthorsAndAllBooks", AC.GetAllAuthorsAndAllBooks)
router.get("/filterAuthors", AC.filterAuthors)
router.get("/getAuthorWithHisBooks", AC.getAuthorWithHisBooks)

export default router