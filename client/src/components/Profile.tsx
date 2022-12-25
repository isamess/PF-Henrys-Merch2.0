import Footer from "./Footer/Footer";

function Profile() {
  return (
    <>
      <div className="cart-window">
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://fakeimg.pl/200x150/?text=PhotoProfile"
                height="150"
                width="150"
              />
              <span className="name mt-3">Maria Guevara</span>
              <span className="idd">mariaguevara@henry.com</span>

              <div className="d-flex mt-2">
                <button className="btn btn-dark">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Profile };
