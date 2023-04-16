

import productImage from "../../../assets/products/Yarn Dyeing/GSH-seriesDescription.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function GSHSeries (){
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
                        <h4>GSH – Series</h4>
                        {/* <p>SALCE's Modulab SBM, handle complete automatically both the liquids and the powders and volumetric dispenser with integrated dyeing units.</p> */}
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Capacity between 50 kg to 600 kg.</p>
                        {/* <span></span> */}
                        <p>Flexible loading- 40% ~ 100%.</p>
                        {/* <span></span> */}
                        <p>Constant liquor ratio at customer request in the range 1:6, 1:12.</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default GSHSeries;