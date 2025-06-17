import Nav from "./Nav";
import '../components/css/about.css'
import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <Nav/>
       <div className="container col-xxl-8 px-4 py-5"> 
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> 
            <div className="col-10 col-sm-8 col-lg-6"> 
                <img src="https://cdn.pixabay.com/photo/2016/02/10/13/39/hotel-1191725_1280.jpg" className="d-block mx-lg-auto img-fluid" alt="Hotel" width="700" height="500" loading="lazy"></img> 
            </div> 
            <div className="col-lg-6"> 
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 abo-head">Welcome to Sakthi Restaurant, Rajapalayam.</h1> 
                <p className="lead abo-para">Whether you're visiting for business, leisure, or a special occasion, our hotel offers a warm and inviting atmosphere, modern accommodations, and exceptional service to make your stay truly memorable.</p> 
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to='/home'>
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menu</button>  
                </Link> 
            </div> 
        </div> 
        </div> 
        </div>
        <div className="abo">
            <h3>About Us!</h3>
            <p>Welcome to Sakthi Restaurant, where comfort meets elegance in the heart of Rajapalayam. We are more than just a place to stay—we're your home away from home. At Sakthi Restaurant, our mission is to provide every guest with a memorable and relaxing experience. whether you're visiting for business, a romantic getaway, or a family vacation, our personalized service, premium amenities, and warm hospitality ensure your stay is exceptional from start to finish. Our rooms and suites are thoughtfully designed with modern comforts and stylish décor, creating a serene atmosphere for rest and rejuvenation. From fine dining and curated cocktails to 24-hour concierge service and tranquil wellness spaces, every detail is crafted with care. With a prime location close to new Bus Stand, Sakthi Restaurant offers the perfect base for exploring the charm and culture of the city. Thank you for choosing Sakthi Restaurant. We look forward to welcoming you and making your stay unforgettable.</p>
        </div>
        </>
    )
}

export default About;