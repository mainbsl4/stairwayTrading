

import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct300.jpg";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function AtlantisPct300 (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/AutomationandRetrofit/pct310"><span>PCT310</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/pct300"><span>PCT300</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/pct900"><span>PTC900</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/codesys"><span>Codesys</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>PCT-300 Stand Alone</h4>
                        <p>The best ally for weaving and finishing.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Thanks to its versatility, it can be installed anywhere, becoming a device that can be used as terminals in weaving and textile finishing processes, allowing production control by viewing the technical sheet of each item.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default AtlantisPct300;