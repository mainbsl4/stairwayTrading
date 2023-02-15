// import { useState } from "react";
import backgroundImage from "../../assets/backgroundImage/Yarn-Dyeing-Machine.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";



function Consultancy () {

    // const [clas, setClas] = useState("ConsultancySection");

    // let cs1 = clas ? "ConsultancySection" : "after";

    // const click = () =>{
    //     setClas(clas => !clas)
    // }
    return(
        <section className="Consultancy">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="ConsultancySection d-flex justify-content-center align-items-center flex-column">
                <div className="sectionHeader">
                    <h3>Consultancy</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    {/* <button onClick={click}>click</button> */}
                    <p>Intelligent Resource management, innovative ideas among engineers, scientist and industrialists about modern machinery applied in textile industries, especially solutions for optimized use of resources with implementable sustainable technologies are indeed of good topics of discus and that is what we are here for you.</p>
                    <ul>
                        <li>Services for smooth running of existing setup</li>
                        <li>Productivity Improvement</li>
                        <li>Setting up of systems</li>
                        <li>Trouble shooting</li>
                        <li>Latest Updates</li>
                        <li>Training <span>(</span>if Required<span>)</span></li>
                        <li>New Recruitment</li>
                        <br></br>
                        <h6>New Plant & Expansions</h6>
                        <li>Factory layout plan (operational)</li>
                        <li>Project Commissioning</li>
                        <li>Production setup</li>
                        <li>Help in running of project</li>
                    </ul>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default Consultancy;