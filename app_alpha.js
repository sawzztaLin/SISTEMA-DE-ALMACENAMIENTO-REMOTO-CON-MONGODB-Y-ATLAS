const express =require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`Server conectado en el puerto ${PORT}`));
app.use(express.json());
app.use(express.urlencoded(false));
mongoose.connect(process.env.URL_DB_MONGO);
mongoose.connect("mongodb://localhost:27017/Clientes")
.then(() => console.log("Conexion realizada"))
.catch(() => console.log("Error en la conexion"))

const clientesSchema = mongoose.Schema ({
    nombre : String,
    telefono : String,
    edad : Number
})

const Cliente = mongoose.model("Clientes", clientesSchema);

app.get('/', async (req, res) => {
    try{
        const clientes = await Cliente.find({});
        response.status(200).json(clientes);
    }
    catch{
        response.status(500).json({message:error})
    }
});

