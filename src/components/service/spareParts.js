import backgroundImage from "../../assets/backgroundImage/Spare-Parts-stairway-trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";


function SpareParts () {

    return(
        <section className="SpareParts">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="SparePartsSection">
                <div className="sectionHeader">
                    <h3>Spare Parts</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    <ul>
                        <li>not com</li>
                        {/* <li>We indorse equipping of 'Genuine Spare Parts' for mechanical, electrical and electronic components of all machines we represent. Our quality service assured your machine always in production.</li>
                        <li>STAIRWAY is happy to sustenance you with original spare parts. Please contact us by phone or email; alternatively in the web massaging here.</li>
                        <li>As a result, we find a number of happy customers and proved us a reliable, efficient service partner.</li>
                        <li>Discover this page you get an overview of our product and service if you have any inquiry please feel free to contact us.</li> */}
                    </ul>
                    <i>CEO/STAIRWAY</i>
                </div>
            </div>
        </section>
    )
}

export default SpareParts;