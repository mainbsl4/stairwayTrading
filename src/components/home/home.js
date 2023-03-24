// import { Outlet } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/stariway-about-us.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";





function Home () {

    return(
        <section className="hero">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="startSection">
                <div className="sectionHeader">
                    <h3>Welcome</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    <div>
                        <p>We do cordially welcome to our company and pleased to present you our product and service.</p>
                        <p>As we have experience with the textile industry for more than a decade, there are hundreds of the latest technology-driven machinery installed in our textile manufacturing facilities.</p>
                        <p>As a result, we find a number of happy customers and proved us a reliable, efficient service partner.</p>
                        <p>Discover this page you get an overview of our product and service if you have any inquiry please feel free to contact us.</p>
                    </div>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default Home;