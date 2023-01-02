import React from "react";

// const INITIAL_STATE = [
//   {
    
//       "_id": {
//         "$oid": "63af78295b6378162ac7ce15"
//       },
//       "name": "Remera roja con Logo Henry",
//       "price": 2500,
//       "stock": 1000,
//       "category": "Remeras",
//       "color": "roja",
//       "image": "https://res.cloudinary.com/henryscloud/image/upload/v1672631733/PF%20soyhenry/Remeras/remeraRoja-Logo_bttk1j.png"
    
//   },
//   {
//     "_id": {
//       "$oid": "63af78e15b6378162ac7ce57"
//     },
//     "name": "Funda-Movil-Rocket",
//     "price": 2500,
//     "stock": 1000,
//     "category": "Fundas Dispositivos",
//     "color": "azul",
//     "image": "https://res.cloudinary.com/henryscloud/image/upload/v1672631692/PF%20soyhenry/FundasDispositivos/Funda-Movil-Rocket_nah19y.png"
//   },

//   {
//     "_id": {
//       "$oid": "63af78865b6378162ac7ce4a"
//     },
//     "name": "Agenda-Henry-Azul",
//     "price": 3500,
//     "stock": 1000,
//     "category": "Agendas",
//     "color": "azul",
//     "image": "https://res.cloudinary.com/henryscloud/image/upload/v1672631682/PF%20soyhenry/Agendas/Agenda-Henry-Azul_u9tkdr.png"
//   },

//   {
//     "_id": {
//       "$oid": "63af78e15b6378162ac7ce63"
//     },
//     "name": "Mate Algarrobo Rocket",
//     "price": 1800,
//     "stock": 1000,
//     "category": "Mates y Termos",
//     "color": "marron",
//     "image": "https://res.cloudinary.com/henryscloud/image/upload/v1672631710/PF%20soyhenry/MatesYTermos/mateAlgarroboRocket_ou7hko.png"
//   },
//   {
//     "_id": {
//       "$oid": "63af78e15b6378162ac7ce5b"
//     },
//     "name": "Funda-Notebook-Love-Henry-Verde",
//     "price": 3500,
//     "stock": 1000,
//     "category": "Fundas Dispositivos",
//     "color": "amarillo",
//     "image": "https://res.cloudinary.com/henryscloud/image/upload/v1672631692/PF%20soyhenry/FundasDispositivos/Funda-Notebook-LoveHenry-Verde_qfan73.png"
//   },
// ];

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel carousel-dark slide w-75 py-3 m-auto"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://fakeimg.pl/200x100/?text=Promotion"
            className="d-block w-100"
            alt="gorros"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fakeimg.pl/200x100/?text=Promotion"
            className="d-block w-100"
            alt="fundas"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fakeimg.pl/200x100/?text=Promotion"
            className="d-block w-100"
            alt="pads"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export { Carousel };
