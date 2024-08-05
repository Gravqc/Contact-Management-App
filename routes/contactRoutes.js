const express = require("express");
const router = express.Router();

router.route('/').get((req,res) => {
    res.status(200).send("Get all contacts")
})

router.route('/').post((req,res) => {
    res.status(200).send("Create Contact")
})

router.route('/:id').put((req,res) => {
    res.status(200).send(`Update id ${req.params.id}` )
})

router.route('/:id').delete((req,res) => {
    res.status(200).send(`Delete id ${req.params.id}`)
})

router.route('/:id').get((req,res) => {
    res.status(200).send(`get id ${req.params.id}`)
})

module.exports = router