import backgroundImage from "../../assets/backgroundImage/Winding-Machine.png"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";




import SoftWindingLanding from "../../assets/products/Winding/Winding machine/SoftWindingLanding.jpg";
import HardWindingLanding from "../../assets/products/Winding/Winding machine/HardWindingLanding.jpg";
import { Link } from "react-router-dom";
import PartnersCard from "../smallSections/partnersCard";





function WindingMachine () {

    return(
        <section className="WindingMachine">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="WindingMachineSection">
                <div className="sectionHeader">
                    <h3>Welcome</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className = "CardBody">
                    <Link className = "productLink" to='/Hi'><PartnersCard image={SoftWindingLanding} head = {"Soft Winding Machine"} body ={"Model: HL-003A, Precision"} /></Link>
                    <Link className = "productLink" to='/Hi'><PartnersCard image={HardWindingLanding} head = {"Hard Winding Machine"} body ={"Model: HL-001HA"} /></Link>
                </div> 
            </div>
        </section>
    )
}

export default WindingMachine;