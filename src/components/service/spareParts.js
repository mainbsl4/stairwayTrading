import backgroundImage from "../../assets/backgroundImage/Spare-Parts-stairway-trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PersonCard from "../smallSections/personCard";


function SpareParts () {

    return(
        <section className="SpareParts">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="SparePartsSection mt-5 d-flex justify-content-center align-items-center flex-column">
                <div className="sectionHeader">
                    <h3>Spare Parts</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>

                <div className="discriptionBox">
                    <p>We indorse equipping of 'Genuine Spare Parts' for mechanical, electrical and electronic components of all machines we represent. Our quality service assured your machine always in production.</p>
                    <p>STAIRWAY is happy to sustenance you with original spare parts. Please contact us by phone or email; alternatively in the web massaging here;</p>
                </div>
            </div>
            <div className="personCardContainer mt-5">
                <PersonCard/>
            </div>
        </section>
    )
}

export default SpareParts;