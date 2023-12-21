import { Router } from "express";
import { postPost,getPost,getIDPost } from "../controllers/postControlers.js";
const router = Router();

router.get("/posts", getPost) // visualizar
router.get("/posts/:id", getIDPost) // visualizar por id individual
router.post("/posts", postPost) //titulo,img,descripcion
router.put("/posts/like/",) //likes
router.delete("/posts/:id",) //delete


router.all('*', ); // para routas que no existan 404

export default router;
