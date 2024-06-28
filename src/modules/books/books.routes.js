import { Router } from "express";
import * as BC from "./books.controller.js";
const router = Router()

router.post("/" , BC.addBook)
router.get("/" , BC.getAllBooks)
router.get("/getASpacificBook" , BC.getASpacificBook)
router.patch("/" , BC.updateASpacificBook)
router.delete("/" , BC.deleteASpacificBook)
router.delete("/" , BC.deleteASpacificBook)
router.get("/filterBooks" , BC.filterBooks)

export default router