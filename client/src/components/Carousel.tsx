import React from 'react'



function Carousel() {
  return (
    
    <div className= "container" >
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators"> 
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className= "active"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className= "active"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" className= "active"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5" className= "active"></button>
        </div> 
        <div className="carousel-inner bg-warning">
          <div className="carousel-item active" >
            <br></br>
            <br></br>
            <br></br>
            <img src="https://res.cloudinary.com/henryscloud/image/upload/c_scale,h_250/v1672789988/PF%20soyhenry/Carrousel%20500h/remeraAnaranjada-Rocket_rosdmd.png" className="w-100% h-50vh  mx-auto my-auto d-block" alt="..."/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <div className="carousel-caption bg-warning py-1 px-1">
                <h1 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h1>
                <h4 className= "text-dark">Remera anaranjada Rocket</h4>
              </div>
    </div>
            <div className="carousel-item">
            <br></br>
            <br></br>
            <br></br>
            <img src="https://res.cloudinary.com/henryscloud/image/upload/c_scale,h_250/v1672805030/PF%20soyhenry/Carrousel%20500h/Funda-Notebook-LoveHenry-Rosa_hmfjhs.png" className="d-block  w-100% h-50vh  mx-auto d-block" alt="..."/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div className="carousel-caption bg-warning py-1 px-1">
          <h1 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h1>
          <h4 className= "text-dark">Funda Notebook Love Henry</h4>
      </div>
    </div>
    <div className="carousel-item">
    <br></br>
    <br></br>
      <br></br>
      <img src="https://res.cloudinary.com/henryscloud/image/upload/c_scale,h_250/v1672832655/PF%20soyhenry/Carrousel%20500h/mateAlgarroboRocket_ot8z25.png" className="d-block  w-100% h-50vh  mx-auto d-block" alt="..."/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className= "carousel-caption  bg-warning py-1 px-1">
        <h1 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h1>
        <h4 className= "text-dark">Mate Algarrobo</h4>
        </div>
      </div>
      <div className="carousel-item">
      <br></br>
      <br></br>
      <br></br>
      <img src="
      https://res.cloudinary.com/henryscloud/image/upload/c_scale,h_250/v1672832648/PF%20soyhenry/Carrousel%20500h/termoRocket_fxo1wv.png" className="d-block  w-100% h-50vh  mx-auto d-block" alt="..."/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="carousel-caption bg-warning pt-1 py-1 px-1">
          <h1 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h1>
          <h4 className= "text-dark">Termo Rocket</h4>
        </div>
    </div>
    <div className="carousel-item">
    <br></br>
    <br></br>
      <br></br>
      <img src="https://res.cloudinary.com/henryscloud/image/upload/c_scale,h_250/v1672789989/PF%20soyhenry/Carrousel%20500h/Agenda-Henry-Roja_yvhxfg.png" className="d-block  w-100% h-50vh  mx-auto d-block" alt="..."/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="carousel-caption bg-warning py-1 px-1">
        <h1 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h1>
        <h4 className= "text-dark">Agenda Henry</h4>
      </div>
    </div>
  </div>
      </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

   </div>
  )
}

export default Carousel
