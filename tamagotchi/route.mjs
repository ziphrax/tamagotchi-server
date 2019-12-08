import express from 'express'

const router = express.Router();

router.get('/:id',(req,res,next)=>{
    res.send(req.params.id);
});

export default router