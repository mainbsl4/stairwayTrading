import backgroundImage from "../../assets/backgroundImage/stairway-trading-mission-and-vision.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";


function BusinessPartners () {

    return(
        <section className="BusinessPartners">


        <BannerOrMiniImage banner={backgroundImage}/>



        <div className="BusinessPartnersSection">
            <div className="sectionHeader">
                <h3>Business Partners</h3>
                <span className="headerAnimation"></span>
            </div>

            <div className="discriptionBox">
                <div className="forGroup">
                    <h3>Business Partners</h3>
                    <p>STAIRWAY Trading provides a complete range of textile and apparel technology solutions from Dyeing to finishing, packing, inspection and all related processes by the world’s leading – premium branded manufacturers from Europe, China, Korea, etc.</p>
                </div>
                {/* <i>CEO/STAIRWAY</i> */}
            </div>
        </div>
    </section>
    )
}

export default BusinessPartners;