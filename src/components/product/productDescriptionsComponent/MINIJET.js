

import productImage from "../../../assets/products/LAB/minijet-descrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function MINIJET (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/LabEsuipment/modulabSBM">Modulab SBM</Link>
                    <Link className="link" to="/LabEsuipment/redkromeii">REDKROME II</Link>
                    <Link className="link" to="/LabEsuipment/miniSimplex">MINISIMPLEX</Link>
                    <Link className="link" to="/LabEsuipment/labHank">Lab HANK</Link>
                    <Link className="link" to="/LabEsuipment/miniJET">MINIJET</Link>
                    <Link className="link" to="/LabEsuipment/texair">TEXAIR</Link>
                    <Link className="link" to="/LabEsuipment/zp400">ZP400</Link>
                    <Link className="link" to="/LabEsuipment/miniDryer">Mini Dryer</Link>
                    <Link className="link" to="/LabEsuipment/smallLotsDryer">Small lots dryer</Link>
                    <Link className="link" to="/LabEsuipment/colourLight">Colour Light</Link>
                    <Link className="link" to="/LabEsuipment/phCube">pH CUBE</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>MINIJET</h4>
                        <p>High temperature and high pressure fabric Sample dyeing machine.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>High temperature and high pressure fabric Sample dyeing machine.</p>
                        {/* <span></span> */}
                        <p>Suitable for dyeing in any type of fabrics natural or synthetic.</p>
                        {/* <span></span> */}
                        <p>Liquor ratio of 1:5, Capacity range 1 to 5 kg</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default MINIJET;