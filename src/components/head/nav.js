import {Link} from "react-router-dom";
import logo from "../../assets/logo/stairway-logo.png";
// import "../../App.css"



function Nav (){

// head.addEventListener("scroll",()=>{

// })

    return(
        // <>
         <div className = "head">
               <div className = "logo">
               <Link to="/"><img src={logo} alt = "logo"/></Link>
               </div>

               <div className="navBody">
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
                            <Link className="dropDownLink" to="/LabEsuipment">Lab Esuipment</Link>
                            <Link className="dropDownLink" to="/YarnDyeingMachine">Yarn Dyeing Machine</Link>
                            <Link className="dropDownLink" to="/FabricDyeingMachine">Fabric Dyeing Machine</Link>
                            <Link className="dropDownLink" to="/HydroExtractor">Hydro Extractor</Link>
                            <Link className="dropDownLink" to="/WindingMachine">Winding Machine</Link>
                            <Link className="dropDownLink" to="/DispensingAutomation">Dispensing Automation</Link>
                            <Link className="dropDownLink" to="/HitRecoverySystem">Hit Recovery System</Link>
                            <Link className="dropDownLink" to="/TextileERP">Textile ERP</Link>
                            <Link className="dropDownLink" to="/IndigoMonitoringSystem">Indigo Monitoring System</Link>
                            <Link className="dropDownLink" to="/AutomaticInsprection&Packing">Automatic Insprection & Packing</Link>
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
               <div className="manubar">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                </div>
                {/* <button >click</button> */}
            </div>
        // </>
    )
}

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