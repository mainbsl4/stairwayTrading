

import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/DATEX_SMART_TOUCH_M.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function MDatexSmartTouchM (){
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
                        <h4>Datex-smart-touch-M</h4>
                        <p>Control and supervision of dyeing machine. Machine visualization with manual function. Program editor & machine editor.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Display: 12" TFT color Touchscreen</p>
                        <p>External I/O: Datex PLC Master</p>
                        <p>Datex PLC module Digital & Analog – I/O</p>
                        <p>Interface: 1 Ethernet, 2 USB</p>
                        <p>Power Supply: 24v DC, 2.5 A</p>
                        <p>Dimension: 319 x 226 x 90 mm( w x h x d)</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default MDatexSmartTouchM;