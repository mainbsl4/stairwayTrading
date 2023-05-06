

import productImage from "../../../assets/products/DispensingAutomation/TechnoFill.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TechnoFill (){
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
                        <h4>TECHNOFILL</h4>
                        <p>TecnoFill is the complete solution designed by EAS conceived to optimize the loading, management and storage of chemical products and liquid auxiliaries.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>TecnoFill carries out the loading and storage of the different chemical products that arrive through the supplier in a comfortable and simple way. Its loading lance is connected to a membrane pump that is responsible for sucking all the product and transporting it to the storage tanks equipped with level probes that allow the analogue level of the product to be verified, generating an on-line inventory. Once the load is done, TecnoFill manages a washing of the loading lance, leaving it ready for a new product load.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default TechnoFill;