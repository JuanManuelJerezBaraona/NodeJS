const { Router } = require('express');

const { userGet } = require('../controllers/user');

const router = Router();

router.get('/', userGet);

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    })
});

router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    })
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    })
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    })
});

module.exports = router;