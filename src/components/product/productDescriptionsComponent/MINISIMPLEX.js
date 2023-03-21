

import productImage from "../../../assets/products/LAB/minisimplex-descr.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function MINISIMPLEX (){
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
                        <h4>MINISIMPLEX</h4>
                        <p>The main feature is to increase the reproducibility of samples from the laboratory to the production.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>High temperature and high pressure Sample Dyeing machine from 20gr to 150 gr.</p>
                        {/* <span></span> */}
                        <p>Dye any type of natural or synthetic high density pkg, fabrics, ribbons, fiber Liquor ratio from 1:5 to 1:12. Depend on demand.</p>
                        {/* <span></span> */}
                        <p>Automatic filling level, normal and high temperature drain, overflow rinsing.</p>
                        {/* <span></span> */}
                        <p>Automatic liquor ratio.</p>
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default MINISIMPLEX;