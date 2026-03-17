const express = require("express");
const path = require("path");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


const services = [
  {
    image: "img/service-1.jpg",
    title: "Facial Care",
    description: "Tratamientos faciales profesionales para cuidar y rejuvenecer la piel."
  },
  {
    image: "img/service-2.jpg",
    title: "Body Treatment",
    description: "Servicios corporales pensados para mejorar tu bienestar y apariencia."
  },
  {
    image: "img/service-3.jpg",
    title: "Skin Surgery",
    description: "Procedimientos especializados para el cuidado y mejora estética de la piel."
  },
  {
    image: "img/service-4.jpg",
    title: "Beauty Consultation",
    description: "Asesoría personalizada para ayudarte a elegir el mejor tratamiento."
  },
  {
    image: "img/service-5.jpg",
    title: "Laser Therapy",
    description: "Terapias modernas con tecnología avanzada para mejores resultados."
  },
  {
    image: "img/service-6.jpg",
    title: "Special Care",
    description: "Atención especializada con enfoque profesional y personalizado."
  }
];

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Inicio | Plastery",
    services: services
  });
});


app.get("/services", (req, res) => {
  res.render("services", {
    pageTitle: "Servicios | Plastery",
    services: services
  });
});


app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "Nosotros | Plastery"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});