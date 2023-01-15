
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
            src="https://res.cloudinary.com/henryscloud/image/upload/v1672631702/PF%20soyhenry/Gorros/gorro-Visera-Rocket-Negro_kz3bc0.png/200x100/?text=Promotion"
            className="d-block w-100"
            alt="gorros"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/henryscloud/image/upload/v1672631692/PF%20soyhenry/FundasDispositivos/Funda-Notebook-LoveHenry-Rosa_agnnhg.png/200x100/?text=Promotion"
            className="d-block w-100"
            alt="fundas"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/henryscloud/image/upload/v1672631727/PF%20soyhenry/Pads/Pad-Henry-Negro_lrfbcg.png/200x100/?text=Promotion"
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
