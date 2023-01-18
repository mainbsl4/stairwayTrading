import backgroundImage from "../../assets/backgroundImage/stairway-trading-mission-and-vision.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";



function MissinIntegrity () {

    return(
            <section className="MissinIntegrity">


                <BannerOrMiniImage banner={backgroundImage}/>



                <div className="MissinIntegritySection">
                    <div className="sectionHeader">
                        <h3>Mission & Integrity</h3>
                        <span className="headerAnimation"></span>
                    </div>

                    <div className="discriptionBox">
                        <div className="forGroup">
                            <h3>Mission</h3>
                            <p>We support our customer’s goals and enhance their competitiveness through mastering quality value. SWTD is serving and aiding our customers to optimize their quality, productivity and increase their long-term profitability by choosing the right textile machine.</p>
                        </div>

                        <div className="forGroup">
                            <h3>Integrity</h3>
                            <p>STAIRWAY Has an adamant and constant set of values that define our team and our valued customers.</p>
                            <p>Our company’s team integrity empowers us to provide equal services to everyone – equally and with respect and we are entrusted to honor our commitments and deliver on our promises. We are making decisions in a manner that is fair and honest.</p>
                        </div>
                        <i>CEO/STAIRWAY</i>
                    </div>
                </div>
            </section>
    )
}

export default MissinIntegrity;