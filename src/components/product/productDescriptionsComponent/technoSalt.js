

import productImage from "../../../assets/products/DispensingAutomation/TechnoSalt.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TechnoSalt (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/DispensingAutomation/TechnoTwo"><span>TrchnoTwo</span></Link>
                    <Link className="link" to="/DispensingAutomation/TechnoMix"><span>TechnoMix</span></Link>
                    <Link className="link" to="/DispensingAutomation/TechnoSalt"><span>TechnoSalt</span></Link>
                    <Link className="link" to="/DispensingAutomation/TechnoFill"><span>TechnoFill</span></Link>
                    {/* <Link className="link" to="/YarnDyeingMachine/hankSeries"><span>HANK – Series</span></Link> */}
                    {/* <Link className="link" to="/YarnDyeingMachine/carriers"><span>Carriers</span></Link> */}
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>TECHNOSALT</h4>
                        <p>TecnoSal is the solution designed by EAS for the preparation of salt solutions and powdered products on a large scale. It allows making a preparation in liquid and stable form to be sent to a machine, or stored for later use.</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"60%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>TecnoSal is made up of a structure, where in the upper part we find the loading module and in the lower part the dosing part of the solid product, and a dissolution tank with weighing control.</p>
                        <p>Its stainless steel hopper with a built-in crane has a capacity of up to 200 liters and space to rest bags of product, allowing the loading of raw materials on a large scale with big bags.</p>
                        <p>The load cells incorporated in TecnoSal allow the amount of salt to be weighed in order to carry out a precise loading of the product in the 1000-liter preparation tank, equipped with a powerful agitator for the preparation of the solution.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default TechnoSalt;