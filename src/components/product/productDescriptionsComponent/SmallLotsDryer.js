


import productImage from "../../../assets/products/LAB/SMALLLOTSDRYERDescrip.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function SmallLotsDryer (){
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
                        <h4>Small lots dryer</h4>
                        <p>Hot air dryer for small lots production.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Hot air dryer for small lots production.</p>
                        {/* <span></span> */}
                        <p>Capacity 8 to 48 package, or 15kg of yarn in Hank.</p>
                        {/* <span></span> */}
                        {/* <p>Automatic liquor ratio.</p> */}
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default SmallLotsDryer;