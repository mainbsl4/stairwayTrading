

import productImage from "../../../assets/products/Yarn Dyeing/HANKSDescrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function HANKSeries (){
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
                        <h4>HANK – Series</h4>
                        <p>Machine for dyeing yarns in hanks/skeins wool, wool-acrylic, acrylic, cotton-acrylic, viscose, wool-nylon blending yarn.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Range: 10kg to 200kg</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                        {/* <span></span> */}
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default HANKSeries;