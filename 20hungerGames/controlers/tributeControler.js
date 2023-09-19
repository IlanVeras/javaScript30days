const Tribute = require("../models/Tribute")


const addTribute = async (req, res) => {
    let tribute = new Tribute(req.body)

    try{
        let doc = await tribute.save()
        console.log("Tribute saved")
    }catch(error){
        res.render('index', {error, body: req.body})
    }
}


const allTributes = async(req, res) => {
    try {
        //.sort({distric: 1}) Permite com que os tributos sejam organizados de forma crescente a partir da propriedade "district"
        let tributes = await Tribute.find({}).sort({edition: 1, district: 1})
        res.render('allTributes', {tributes})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const districtTribute = async(req, res) => {
    let district = Number(req.params.district)
    try {
        let tributes = await Tribute.find({district})
        res.render("specifDistricTribute", {tributes})
    } catch (error) {
        res.send(error)
    }
}

const wantedTributes = async(req, res) => {
    try {
        let tributes = await Tribute.find({wanted: true})
        res.render("wanted", {tributes})
    } catch (error) {
        res.send(error)
    }
}

const hallOfTheFameTributes = async(req, res) => {
    try {
        let tributes = await Tribute.find({winner: true})
        res.render("hallOfTheFame", {tributes})
    } catch (error) {
        res.send(error)
    }
}


const loadTribute = async(req, res) => {
    console.log('loadLink Working')
    let id = req.params.id
    try {
      let tribute = await Tribute.findById(id)
      res.render('edit', {
        error: false,
        body: tribute
      })
    } catch (error) {
      res.send(error)
    }
}


const editTribute = async(req, res) => {
    let tribute = {}
    tribute.nameTribute = req.body.nameTribute
    tribute.age = req.body.age
    tribute.district = req.body.district
    tribute.skills = req.body.skills
    tribute.sex = req.body.sex
    tribute.edition = req.body.edition
    tribute.condition = req.body.condition
    tribute.winner = req.body.winner
    tribute.status = req.body.status
    tribute.wanted = req.body.wanted
    console.log(tribute)
    let id = req.params.id
    try{
        let doc = await Tribute.findByIdAndUpdate(id, tribute)
        res.redirect(`/all`)
    }catch(err){
        res.render(`edit`, {error: err, body: req.body})
    }
}



const deleteTribute = async(req, res) => {
    console.log(`ÈNTROU`)
    let idTribute = req.params.id
    console.log(idTribute)
    if(!idTribute){
        console.log(`not Ok`)
        idTribute = req.body.id
    }
    try {
        console.log(`OK`)
        await Tribute.findByIdAndDelete(idTribute)
        res.redirect("/all")
    } catch (error) {
        console.log(`Not Ok, ERROR`)
        res.status(404).send(error)
    }
}

module.exports = {addTribute, allTributes, districtTribute, wantedTributes, hallOfTheFameTributes, loadTribute, editTribute, deleteTribute}