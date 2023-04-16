

import productImage from "../../../assets/products/LAB/HydroDescripLab.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function ZP400 (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/LabEsuipment/modulabSBM"><span>Modulab SBM</span></Link>
                    <Link className="link" to="/LabEsuipment/redkromeii"><span>REDKROME II</span></Link>
                    <Link className="link" to="/LabEsuipment/miniSimplex"><span>MINISIMPLEX</span></Link>
                    <Link className="link" to="/LabEsuipment/labHank"><span>Lab HANK</span></Link>
                    <Link className="link" to="/LabEsuipment/miniJET"><span>MINIJET</span></Link>
                    <Link className="link" to="/LabEsuipment/texair"><span>TEXAIR</span></Link>
                    <Link className="link" to="/LabEsuipment/zp400"><span>ZP400</span></Link>
                    <Link className="link" to="/LabEsuipment/miniDryer"><span>Mini Dryer</span></Link>
                    <Link className="link" to="/LabEsuipment/smallLotsDryer"><span>Small lots dryer</span></Link>
                    <Link className="link" to="/LabEsuipment/colourLight"><span>Colour Light</span></Link>
                    <Link className="link" to="/LabEsuipment/phCube"><span>pH CUBE</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>ZP400</h4>
                        <p>Hydroextractor for fabric, bobbins, hanks, etc.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="ZP400"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Hydroextractor for fabric, bobbins, hanks, etc.</p>
                        {/* <span></span> */}
                        <p>Internal diameter: 400/450/635/900/1100 mm.</p>
                        {/* <span></span> */}
                        <p>Max speed 1450 rpm/min. with inverter.</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default ZP400;