

import productImage from "../../../assets/products/DispensingAutomation/TechnoMix.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TechnoMix (){
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
                        <h4>TECHNOMIX</h4>
                        <p>TecnoMix is ​​the solution designed by EAS for a perfect dissolution and shipment of dyes used in dry cleaning.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>TecnoMix consists of a pump module and a liter counter connected to one or more automated preparation tanks with valves and various technological accessories that are responsible for the perfect automated preparation process. These tanks are made of top-quality stainless steel, with practically no elements inside and with an interior mirror-polished finish, designed so that washing after use is quick and easy.</p>
                        <p>Thanks to the integration with InfoTint, the Atlantis PCT-900 controller executes the desired solution according to the specifications of each dye. Its control system selects the correct temperature and speed for each type of dye family, guaranteeing a precise dissolution. Its automatic opening and closing lid allows greater safety in the handling of the machine with the option of confirming the reading of the barcode of the heavy dye bag, prior to opening the lid.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default TechnoMix;