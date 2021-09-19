import express from 'express';
import AccountController from "../controllers/AccountController.js";

const router = express.Router();

router.get('/', AccountController.index);
router.post('/', AccountController.create);
router.get('/:id', AccountController.show);
router.delete('/:id', AccountController.destroy);
router.put('/:id', AccountController.update);
router.patch('/:id', AccountController.updateBalance);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    console.log(err);
    res.status(400).send({err: err.message});
});

export default router;