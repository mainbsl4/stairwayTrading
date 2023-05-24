import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct310.png";

//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function AtlantisPct310 (){
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
                        <h4>PCT-310</h4>
                        <p>Maximum power and incredible performance in 10”</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>The PCT-310 is a powerful controller with a compact design designed for higher performance in industrial environments. Its new touch screen makes work flow. It is ideal for dry cleaning automation due to its high resistance. Thanks to its size it is easy to install on a panel.</p>
                        <p>Atlantis PCT-310 incorporates a Wi-Fi connection, so you can communicate with all the machines without cables.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default AtlantisPct310;