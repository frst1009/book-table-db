const {Book} =require("../models/book");

const bookController = {
    getAll: (req, res) => {
        Book.find()
        // .limit(10)
            .populate({
                path: "writer",
                populate:{
                    path:"country",
                },
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Book.findById(id).populate("writer")
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        let book = new Book({
            name: req.body.name,
            description: req.body.description,
            publishDate: req.body.publishDate,
            writer: req.body.writer
        })

        book.save();

        res.json(book);
    },
    delete: (req, res) => {
        let id = req.params.id;

       Book.delete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
       }
        module.exports={bookController}