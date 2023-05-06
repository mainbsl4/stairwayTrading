

import productImage from "../../../assets/products/DispensingAutomation/TechnoTwo.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TechnoTwo (){
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
                        <h4>TECHNOTWO</h4>
                        <p>TecnoDos is the solution that we have designed for the automatic dosing of chemical products and liquid auxiliaries used in dry cleaning and finishing.</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>TecnoDos aspirates the products through its trilobal pump and conducts them through a flowmeter in charge of counting and recording the amount of product served, ensuring the precise delivery of the amount required by the recipe.</p>
                        <p>Chemicals and auxiliaries are sent through a manifold consisting of a high precision 3-way valve assembly, which is highly resistant to a wide range of chemicals. Once the product transfer is finished, the line is washed automatically, making it ready for a new dosage.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default TechnoTwo;