import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Yarn-Dyeing-Machine.jpg";
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";



import GSESeriesDescription from "../../assets/products/Yarn Dyeing/GSE–seriesDescription.png";
import GSHSeriesDescription from "../../assets/products/Yarn Dyeing/GSH-seriesDescription.png";
import sp110Descrip from "../../assets/products/Yarn Dyeing/sp110Descrip.png";
import SPSimplexLanding from "../../assets/products/Yarn Dyeing/SPSimplexDescrip.png";
import HANKSLanding from "../../assets/products/Yarn Dyeing/HANKSLanding.png";
import CarrierLanding from "../../assets/products/Yarn Dyeing/CarrierLanding.png";





function YarnDyeingMachine () {

    return(
        <section className="YarnDyeingMachine">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="YarnDyeingMachineSection">
                <div className="sectionHeader">
                    <h3>Yarn Dyeing Machine</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>

                <div className = "CardBody">
                    <Link className = "productLink" to='/YarnDyeingMachine/gseSeries'><PartnersCard image={GSESeriesDescription} head = {"GSE – Series"} body ={"HTHP Bulk Yarn Dyeing Machine."} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/YarnDyeingMachine/gshSeries'><PartnersCard image={GSHSeriesDescription} head = {"GSH – Series"} body ={"Horizontal Yarn Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/YarnDyeingMachine/sp110series'><PartnersCard image={sp110Descrip} head = {"SP110 – Series"} body ={"Small lots dyeing Machine."} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/YarnDyeingMachine/spSimpleSeries'><PartnersCard image={SPSimplexLanding} head = {"SP Simplex – Series"} body ={"Sample Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/YarnDyeingMachine/hankSeries'><PartnersCard image={HANKSLanding} head = {"HANK – Series"} body ={"HANK Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                    <Link className = "productLink" to='/YarnDyeingMachine/carriers'><PartnersCard image={CarrierLanding} head = {"Carriers"} body ={""} address = {"UGOLINI – Italy"} /></Link>
                </div> 
            </div>
        </section>
    );
};

export default YarnDyeingMachine;