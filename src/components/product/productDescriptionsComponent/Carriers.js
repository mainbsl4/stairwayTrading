

import productImage from "../../../assets/products/Yarn Dyeing/CarrierDesctip.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function Carriers (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/YarnDyeingMachine/gseSeries"><span>GSE – Series</span></Link>
                    <Link className="link" to="/YarnDyeingMachine/gshSeries"><span>GSH – Series</span></Link>
                    <Link className="link" to="/YarnDyeingMachine/sp110series"><span>SP110 – Series</span></Link>
                    <Link className="link" to="/YarnDyeingMachine/spSimpleSeries"><span>SP Simplex – Series</span></Link>
                    <Link className="link" to="/YarnDyeingMachine/hankSeries"><span>HANK – Series</span></Link>
                    <Link className="link" to="/YarnDyeingMachine/carriers"><span>Carriers</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Carriers</h4>
                        <p>Carriers for used to dye material like: yarn on packages, muffs, fabric on beams, loose fibers, tops, ribbons.</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default Carriers;