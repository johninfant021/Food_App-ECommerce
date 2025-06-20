import Nav from "./Nav";
import '../components/css/about.css'
import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <Nav/>
       
      {/* Hero Section */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-10 col-sm-12 col-lg-6">
            <img 
              src="https://cdn.pixabay.com/photo/2016/02/10/13/39/hotel-1191725_1280.jpg" 
              className="d-block mx-lg-auto img-fluid" 
              alt="Sakthi Restaurant Rajapalayam" 
              width="700" 
              height="500" 
              loading="lazy" 
            />
          </div>
          
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 abo-head text-body-emphasis">
              Welcome to Sakthi Restaurant, Rajapalayam.
            </h1>
            <p className="lead abo-para">
              Whether you're visiting for business, leisure, or a special occasion,
              our restaurant offers a warm and inviting atmosphere, modern accommodations,
              and exceptional service to make your time truly memorable.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/home">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  Menu
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>

      {/* About Us Section */}
      <div className="abo">
        <h3>About Us!</h3>
        <p>
          Welcome to Sakthi Restaurant, where comfort meets elegance in the heart of Rajapalayam.
          We are more than just a place to dine—we're your home away from home.
        </p>
        <p>
          At Sakthi Restaurant, our mission is to provide every guest with a memorable and relaxing experience.
          Whether you're visiting for business, a romantic evening, or a family celebration, our personalized
          service, premium amenities, and warm hospitality ensure your visit is exceptional from start to finish.
        </p>
        <p>
          From fine dining and curated cocktails to tranquil wellness spaces, every detail is crafted with care.
          With a prime location close to the new Bus Stand, Sakthi Restaurant offers the perfect base for
          exploring the charm and culture of the city.
        </p>
        <p>
          Thank you for choosing Sakthi Restaurant. We look forward to welcoming you and making your experience unforgettable.
        </p>
      </div>
        </>
    )
}

export default About;