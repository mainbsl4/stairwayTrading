

import productImage from "../../../assets/products/Yarn Dyeing/GSH-seriesDescription.jpg"


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
                    <Link className="link" to="/YarnDyeingMachine/gseSeries">GSE – Series</Link>
                    <Link className="link" to="/YarnDyeingMachine/gshSeries">GSH – Series</Link>
                    <Link className="link" to="/YarnDyeingMachine/sp110series">SP110 – Series</Link>
                    <Link className="link" to="/YarnDyeingMachine/spSimpleSeries">SP Simplex – Series</Link>
                    <Link className="link" to="/YarnDyeingMachine/hankSeries">HANK – Series</Link>
                    <Link className="link" to="/YarnDyeingMachine/carriers">Carriers</Link>
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