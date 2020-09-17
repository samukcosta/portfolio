const projects = require("../../data")

module.exports = {
    index(req, res){
        return res.render("index")
    },
    portfolio(req, res){
        return res.render("portfolio", {projects})
    },
    contact(req, res) {
        return res.render("contact", {projects})
    }
}