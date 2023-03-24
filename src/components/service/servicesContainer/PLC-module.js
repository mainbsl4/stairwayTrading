

import productImage from "../../../assets/products/Yarn Dyeing/CarrierDesctip.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function PLCmodule (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/AutomationandRetrofit/MDatexSmartTouchM">MDatex-smart-touch-M</Link>
                    <Link className="link" to="/AutomationandRetrofit/DatexSmartTouchS">Datex-smart-touch-S</Link>
                    <Link className="link" to="/AutomationandRetrofit/DATEXPLCMASTER841616">DATEX PLC MASTER 841616</Link>
                    <Link className="link" to="/AutomationandRetrofit/PLCmodule">PLC-module</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>************</h4>
                        <p>*************************************</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>*****************************</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default PLCmodule;