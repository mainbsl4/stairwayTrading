


import productImage from "../../../assets/products/LAB/SMALLLOTSDRYERDescrip.jpg"


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
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
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