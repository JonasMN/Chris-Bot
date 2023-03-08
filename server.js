const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { engine } = require("express-handlebars");

const mongoose = require("mongoose");

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

const port = process.env.PORT || 3000;

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "20mb",
  })
);

mongoose.connect(
  "mongodb+srv://ChrisMeza:anterTEnDe10.@dialogflowcluster.sgfkayu.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) return console.log("hubo un error en la base de datos", err);
    console.log("BASE DE DATOS ONLINE");
  }
);

app.use("/messenger", require("./Facebook/facebookBot"));

app.use("/api", require("./routes/api"));
app.use("/", require("./routes/routes"));

app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
