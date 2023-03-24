import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";
// import Product from "../smallSections/product";



import HydroLanding from "../../assets/products/Hydroextractor/HydroLanding.png";
import labHydroLanding from "../../assets/products/Hydroextractor/labHydroLanding.png";



function HydroExtractor () {

    return(
        <section className="HydroExtractor">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="HydroExtractorSection">
                <div className="sectionHeader">
                    <h3>Hydro Extractor</h3>
                    {/* <span className = "headerAnimation"></span> */}
                </div>
                <div className = "CardBody">
                    <Link className = "productLink" to='/HydroExtractor/ZP400'><PartnersCard image={labHydroLanding} head = {"ZP400"} body ={"Hydro-extractor for lab sample."} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/HydroExtractor/cle-ces-cr'><PartnersCard image={HydroLanding} head = {"CEL/CES-CR"} body ={"Removable Basket Hydro-Extractors"} address = {"POZZI - Italy"} /></Link>
                </div>                
            </div>
        </section>
    );
};

export default HydroExtractor;