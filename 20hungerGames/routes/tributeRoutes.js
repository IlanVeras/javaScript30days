const express = require("express")
const router = express.Router()
const tributeControler = require("../controlers/tributeControler")

router.get("/", (req, res) => {
    res.render("index", {
        error: false,
        body: {
            // nameTribute: "",
            // age: "",
            // district: "",
            // skills: "",
            // url: ""
        }
    })
})


router.get(`/all`, tributeControler.allTributes)

router.get("/wanted", tributeControler.wantedTributes)

router.get("/hallOfTheFame", tributeControler.hallOfTheFameTributes)

router.get("/:district", tributeControler.districtTribute)

//FIZ UMA GAMBIARRA LOUCA, ao invéz de usar o delete para deleter eu usei um get
router.get('/del/:id', tributeControler.deleteTribute)
router.delete('/', express.urlencoded({extended: true}), tributeControler.deleteTribute)


//23| crie uma rota para mostrar o link escolhido para edição
router.get('/edit/:id', express.urlencoded({extended: true}), tributeControler.loadTribute)


router.post('/edit/:id', express.urlencoded({extended: true}), tributeControler.editTribute)



router.post('/', express.urlencoded({extended: true}), tributeControler.addTribute)

module.exports = router

