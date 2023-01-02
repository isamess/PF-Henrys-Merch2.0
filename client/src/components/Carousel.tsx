// const INITIAL_STATE = [
//   {
//     id: 1,
//     nombre: "Franela",
//     precio: 5.38,
//     descripcion: "Tela algodon",
//     imagen:
//       "https://media.istockphoto.com/id/1151955707/es/foto/plantilla-de-camiseta-negra-de-hombre-en-blanco-de-dos-lados-de-forma-natural-en-maniqu%C3%AD.jpg?s=170667a&w=0&k=20&c=7qEuwWaJXJOPB1tFkJwFuRFIN86HQKaBvX6MC15R75U=",
//   },
//   {
//     id: 2,
//     nombre: "Taza",
//     precio: 0.96,
//     descripcion: "porcelana",
//     imagen:
//       "https://media.istockphoto.com/id/821282266/es/foto/blanco-taza-aislada.jpg?s=612x612&w=0&k=20&c=5AXTocHRgcXlxKaHEHdUFRgj4QQ1m6FTiyltedW1Oog=",
//   },

//   {
//     id: 3,
//     nombre: "Agenda",
//     precio: 5.34,
//     descripcion: "Agenda de hojas cocidas",
//     imagen:
//       "https://primingcolombia.com/wp-content/uploads/2021/01/agenda-tapa-cuero-2.jpg",
//   },

//   {
//     id: 4,
//     nombre: "Termo",
//     precio: 4.85,
//     descripcion: "Acero inoxidable",
//     imagen:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbA8ccTJoCyS2uN6Br-eyRkmv31JnIi3gwcKwCEryfkuRFjjfvUCyxcCHkr9OL5dXe07o&usqp=CAU",
//   },
//   {
//     id: 5,
//     nombre: "Taza de mate",
//     precio: 4.53,
//     descripcion: "Taza de mate enacero inoxidable",
//     imagen:
//       "https://image.made-in-china.com/155f0j00GhdfRWptbmqA/Wholesale-Argentina-Yerba-Mate-Tea-Cup-Double-Wall-Stainless-Steel-Tumblers-Cup.jpg",
//   },
// ]; no esta en uso

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
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fakeimg.pl/200x100/?text=Promotion"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fakeimg.pl/200x100/?text=Promotion"
            className="d-block w-100"
            alt="..."
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
