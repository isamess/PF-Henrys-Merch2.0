import React from 'react'


function Carousel() {
  return (
    
    <div className= "mx-auto" >
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators"> 
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className= "active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className= "active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" className= "active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5" className= "active"></button>
  </div> 
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="https://res.cloudinary.com/henryscloud/image/upload/v1672789988/PF%20soyhenry/Carrousel%20500h/remeraAnaranjada-Rocket_rosdmd.png" className="d-block w-100% h-50vh" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-warning pt-1 pb-1 ">
        <h3 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h3>
        <p className= " h-4 text-dark">Remera anaranjada Rocket</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://res.cloudinary.com/henryscloud/image/upload/v1672805030/PF%20soyhenry/Carrousel%20500h/Funda-Notebook-LoveHenry-Rosa_hmfjhs.png" className="d-block  w-100% h-50vh" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-warning pt-1 pb-1">
        <h3 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h3>
        <p className= " h-4 text-dark">Funda Notebook Love Henry</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://res.cloudinary.com/henryscloud/image/upload/v1672832655/PF%20soyhenry/Carrousel%20500h/mateAlgarroboRocket_ot8z25.png" className="d-block  w-100% h-50vh" alt="..."/>
        <div className= "carousel-caption d-none d-md-block bg-warning pt-1 pb-1">
        <h3 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h3>
        <p className= " h-4 text-dark">Mate Algarrobo</p>
        </div>
      
    </div>
    <div className="carousel-item ">
      <img src="
https://res.cloudinary.com/henryscloud/image/upload/v1672832648/PF%20soyhenry/Carrousel%20500h/termoRocket_fxo1wv.png" className="d-block  w-100% h-50vh" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-warning pt-1 pb-1">
        <h3 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h3>
        <p className= " h-4 text-dark">Termo Rocket.</p>
      </div>
    </div>
    <div className="carousel-item carousel-fade ">
      <img src="https://res.cloudinary.com/henryscloud/image/upload/v1672789989/PF%20soyhenry/Carrousel%20500h/Agenda-Henry-Roja_yvhxfg.png" className="d-block  w-100% h-50vh" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-warning pt-1 pb-1">
        <h3 className= "text-dark font-weight-bold-size-20px">Promo Año Nuevo</h3>
        <p className= " h-4 text-dark">Agenda Henry</p>
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
  </div>
  )
}

export default Carousel
