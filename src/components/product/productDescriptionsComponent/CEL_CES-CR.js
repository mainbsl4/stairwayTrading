import productImage from "../../../assets/products/Hydroextractor/HIMATS-LAY-OUT_02.58.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function CEL_CES_CR (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/HydroExtractor/ZP400">ZP400</Link>
                    <Link className="link" to="/HydroExtractor/cle-ces-cr">CEL/CES-CR</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>CEL/CES-CR Removable Basket Hydro-Extractors</h4>
                        <p>The main feature is to increase the reproducibility of samples from the laboratory to the production.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>CEL/CES-CR Removable Basket Hydro-Extractors</p>
                        {/* <span></span> */}
                        <p>Pozzi- Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default CEL_CES_CR;