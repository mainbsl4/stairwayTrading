import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/stairway-logo.png";
// import "../../App.css"



function Nav (){


// Class name
const navBody = "navBody";
const blankLink = "#";
// const manuBtn = document.getElementsByClassName(".manuBtn")
// Class name
    const [hideNav, setVisibleNav] = useState(true);
    const [firstSpan, setFirstSpan] = useState(true);
    const [secondSpan, setSecondSpan] = useState(true);
    const [thirdSpan, setThirdSpan] = useState(true);
    const [toTopBtn, setToTopBtn] = useState(true);

    // const firstSpanAnimation = firstSpan ? "firstSpan" : "firstSpanAnimation";
    
    const navBtn = () => {
        setVisibleNav(hideNav => !hideNav);
        setFirstSpan(firstSpan => !firstSpan);
        setSecondSpan(secondSpan => !secondSpan);
        setThirdSpan(thirdSpan => !thirdSpan);
    };

    // setToTopBtn(toTopBtn => !toTopBtn);


    window.addEventListener("scroll", () => {
        if(window.pageYOffset >= 5) {
            setVisibleNav(true);
            setFirstSpan(true);
            setSecondSpan(true);
            setThirdSpan(true);
        };

        if(window.pageYOffset > 100) {
            setToTopBtn(false);
        }else{
            setToTopBtn(true); 
        }
        // if(pageY < 100){
        //     console.log(pageY);
        // };
    });
    return(
        // <>
         <div className = "head">
               <div className = "logo">
               <Link to="/"><img src={logo} alt = "logo"/></Link>
               </div>

               <div className={`${navBody} ${hideNav ? "hideNav" : "visibleNav"}`}>
               <ul>
                    <li>
                        <span className="navLink">News</span>
                        <div className="dropDown">
                            <Link className="dropDownLink" to="/Prbilications">Prbilications</Link>
                            <Link className="dropDownLink" to="/Events">Events</Link>
                        </div>
                    </li>


                    <li>
                        <span className="navLink">Company</span>
                        <div className="dropDown">
                            <Link className="dropDownLink" to="/AboutUS">About US</Link>
                            <Link className="dropDownLink" to="/Values&Vision">Values & Vision</Link>
                            <Link className="dropDownLink" to="/Mission&Integrity">Mission & Integrity</Link>
                            <Link className="dropDownLink" to="/Strategy&Team">Strategy & Team</Link>
                        </div>
                    </li>
                    <li><Link className="navLink" to="/BusinessPartners">Partners</Link></li>
                    <li>
                        <span className="navLink">Product</span>
                        <div className="dropDown">
                            <Link className="dropDownLink" to = "/LabEsuipment">Lab Esuipment</Link>
                            <Link className="dropDownLink" to = "/YarnDyeingMachine">Yarn Dyeing Machine</Link>
                            <Link className="dropDownLink" to = "/FabricDyeingMachine">Fabric Dyeing Machine</Link>
                            <Link className="dropDownLink" to = "/HydroExtractor">Hydro Extractor</Link>
                            <Link className="dropDownLink" to = "/WindingMachine">Winding Machine</Link>
                            <Link className="dropDownLink" to = "/DispensingAutomation">Dispensing Automation</Link>
                            <Link className="dropDownLink" to = "/HitRecoverySystem">Hit Recovery System</Link>
                            <Link className="dropDownLink" to = "/TextileERP">Textile ERP</Link>
                            <Link className="dropDownLink" to = "/IndigoMonitoringSystem">Indigo Monitoring System</Link>
                            <Link className="dropDownLink" to = "/AutomaticInsprection&Packing">Automatic Insprection & Packing</Link>
                        </div>
                    </li>
                    <li>
                        <span className="navLink">Service</span>
                        <div className="dropDown">
                            <Link className="dropDownLink" to="/AutomationandRetrofit">Automation and Retrofit</Link>
                            <Link className="dropDownLink" to="/Consultancy">Consultancy</Link>
                            <Link className="dropDownLink" to="/SpareParts">Spare Parts</Link>
                        </div>
                    </li>
                    <li><Link className="navLink" to="/Training">Training</Link></li>
                    <li><Link className="navLink" to="/Contact">Contact</Link></li>
                    
                </ul>
                
               </div>
               <div className="manuBtn" onClick={navBtn}>
                    <span className={`${firstSpan ? "firstSpan" : "firstSpanAnimation"}`}></span>
                    <span className={`${secondSpan ? "secondSpan" : "secondSpanAnimation"}`}></span>
                    <span className={`${thirdSpan ? "thirdSpan" : "thirdSpanAnimation"}`}></span>
                </div>
                <a className={`${toTopBtn ? "hideToTopBtn" : "vidibleToTopBtn"}`} href = {blankLink}><FontAwesomeIcon icon={faChevronUp}/></a>
                {/* <button >click</button> */}
            </div>
        // </>
    );
};

export default Nav;






















// import {Link} from "react-router-dom";
// import logo from "../../assets/logo/stairway-logo.png";


// // import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavB() {
//   return (
//     <Navbar bg="light" expand="lg" className = "head" >
//         <div className = "logo">
//             <Link to="/"><img src={logo} alt = "logo"/></Link>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="basic-navbar-nav"/>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto navBody">
//           {/* <div className=""> */}
//                 <ul>
//                      <li>
//                          <span className="navLink">News</span>
//                          <div className="dropDown">
//                              <Link className="dropDownLink" to="/Prbilications">Prbilications</Link>
//                              <Link className="dropDownLink" to="/Events">Events</Link>
//                          </div>
//                      </li>
//                      <li>
//                          <span className="navLink">Company</span>
//                          <div className="dropDown">
//                              <Link className="dropDownLink" to="/AboutUS">About US</Link>
//                              <Link className="dropDownLink" to="/Values&Vision">Values & Vision</Link>
//                              <Link className="dropDownLink" to="/Mission&Integrity">Mission & Integrity</Link>
//                              <Link className="dropDownLink" to="/Strategy&Team">Strategy & Team</Link>
//                          </div>
//                      </li>
//                      <li><Link className="navLink" to="/BusinessPartners">Partners</Link></li>
//                      <li>
//                          <span className="navLink">Product</span>
//                          <div className="dropDown">
//                              <Link className="dropDownLink" to="/LabEsuipment">Lab Esuipment</Link>
//                              <Link className="dropDownLink" to="/YarnDyeingMachine">Yarn Dyeing Machine</Link>
//                              <Link className="dropDownLink" to="/FabricDyeingMachine">Fabric Dyeing Machine</Link>
//                              <Link className="dropDownLink" to="/HydroExtractor">Hydro Extractor</Link>
//                              <Link className="dropDownLink" to="/WindingMachine">Winding Machine</Link>
//                              <Link className="dropDownLink" to="/DispensingAutomation">Dispensing Automation</Link>
//                              <Link className="dropDownLink" to="/HitRecoverySystem">Hit Recovery System</Link>
//                              <Link className="dropDownLink" to="/TextileERP">Textile ERP</Link>
//                              <Link className="dropDownLink" to="/IndigoMonitoringSystem">Indigo Monitoring System</Link>
//                              <Link className="dropDownLink" to="/AutomaticInsprection&Packing">Automatic Insprection & Packing</Link>
//                          </div>
//                      </li>
//                      <li>
//                          <span className="navLink">Service</span>
//                          <div className="dropDown">
//                              <Link className="dropDownLink" to="/AutomationandRetrofit">Automation and Retrofit</Link>
//                              <Link className="dropDownLink" to="/Consultancy">Consultancy</Link>
//                              <Link className="dropDownLink" to="/SpareParts">Spare Parts</Link>
//                          </div>
//                      </li>
//                      <li><Link className="navLink" to="/Training">Training</Link></li>
//                      <li><Link className="navLink" to="/Contact">Contact</Link></li>
                   
//                  </ul>
              
//                 {/* </div> */}
//           </Nav>
//         </Navbar.Collapse>
//       {/* </Container> */}
//     </Navbar>
//   );
// }

// export default NavB;