

import productImage from "../../../assets/products/Winding/HardWindingDescription.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function HardWindingMachine (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/WindingMachine/softWindingMachine"><span>Soft Winding Machine</span></Link>
                    <Link className="link" to="/WindingMachine/hardWindingMachine"><span>Hard Winding Machine</span></Link>
                </div>
                
                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Hard Winding Machine</h4>
                        <p>Re-winder machine, with anti-overlapping device.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Winding Speed: 300 ~ 1100m/min</p>
                        {/* <span></span> */}
                        <p>Length measurements, auto stop control, waxing device & digital display.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default HardWindingMachine;