import { Router } from "express";
import {
  postPost,
  getPost,
  getIDPost,
  deltePost,
  putLikePost,
  putUpdatePost,
  notFound,
} from "../controllers/postControlers.js";
const router = Router();

router.get("/posts", getPost); // visualizar
router.get("/posts/:id", getIDPost); // visualizar por id individual
router.post("/posts", postPost); //titulo,img,descripcion
router.put("/posts/like/:id", putLikePost); //likes
router.put("/posts/:id", putUpdatePost); //update for client (postman)
router.delete("/posts/:id", deltePost); //delete

router.all("*", notFound); // para routas que no existan

export default router;
