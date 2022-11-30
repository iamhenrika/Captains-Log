require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require("mongoose")
//const Log = require("./models/logs")
const methodOverride = require("method-override")
const logController = require("./controllers/logController")

const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "));
db.on("close", () => console.log("mongo disconnected"));

app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"));

app.use("/logs", logController)

// app.get("/logs", (req, res) => {
//     Log.find({}, (err, allLogs) => {
//         console.log(err);

//         res.render("Index", {
//             logs: allLogs,
//         });
//     });
// });

// app.get("/logs/new", (req, res) => {
//     res.render("New", {})
// })

// app.post("/logs", (req, res) => {
//     if (req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.isPassing = false;
//     }
//     Log.create(req.body, (err, createdLog) => {
//         console.log(err);
//         console.log("Just Added : ", createdLog)
//     });
//     res.redirect("/logs")
// })

// app.get("/logs/:id/edit", (req, res) => {
//     Log.findById(req.params.id, (err, foundShip) => {
//         console.log(err)
//         if (!err) {
//             res.render("Edit", {
//                 log: foundShip,
//             });
//         } else {
//             res.status(400).send({ msg: err.message });
//         }
//     });
// });

// app.put("/logs/:id", (req, res) => {
//     if (req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//     }
//     Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedShip) => {
//         console.log(err)
//         console.log(updatedShip);
//         res.redirect(`/logs/${req.params.id}`);
//     });
// });

// app.delete("/logs/:id", (req, res) => {
//     Log.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect("/logs");
//     });
// });

// app.get("/logs/:id", (req, res) => {
//     Log.findById(req.params.id, (err, foundShip) => {
//         console.log(err)
//         console.log("Found: ", foundShip);
//         res.render("Show", {
//             log: foundShip
//         });
//     });
// });


app.listen(PORT, () => {
    console.log("Listening")
})