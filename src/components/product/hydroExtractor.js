import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import Product from "../smallSections/product";

function HydroExtractor () {

    return(
        <section className="HydroExtractor">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="HydroExtractorSection">
                <div className="sectionHeader">
                    <h3>Hydro Extractor</h3>
                    <span className="headerAnimation"></span>
                </div>
                <div className="productContainer">
                    <Link to = "AboutUS"><Product/></Link>
                    <Link to = "Hi"><Product/></Link>
                </div>

                {/* <Outlet/> */}
                
            </div>
        </section>
    )
}

export default HydroExtractor;