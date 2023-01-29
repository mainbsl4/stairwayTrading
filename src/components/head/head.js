import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../home/home";
import Prbilications from "../naws/prbilications";
import Events from "../naws/events";
import About from "../company/about";
import VisualVisions from "../company/visualVisions";
import MissinIntegrity from "../company/missinIntegrity";
import SartegyTeam from "../company/sartegyTeam";
import BusinessPartners from "../businessPartners/businessPartners"
import LabEquipment from "../product/labEquipment";
import YarnDyeingMachine from "../product/yarnDyeingMachine";
import FabricDyeingMachine from "../product/fabricDyeingMachine";
import HydroExtractor from "../product/hydroExtractor";
import WindingMachine from "../product/windingMachine";
import DispensingAutomation from "../product/dispensingAutomation";
import HitRecoverySysten from "../product/hitRecoverySysten";
import TextileERP from "../product/textileERP";
import IndigoManitoringSystem from "../product/indigoManitoringSystem";
import AutomaticInspectionPacking from "../product/automaticInspectionPacking";
import AutomationRetrofit from "../service/automationRetrofit";
import Consultancy from "../service/consultancy";
import SpareParts from "../service/spareParts";
import Training from "../training/training";
import Contact from "../contact/contact";
// import Hi from "../../hi";


export default function Head() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Prbilications" element={<Prbilications />} />
          <Route path="Events" element={<Events />} />
          <Route path="AboutUS" element={<About />} />
          <Route path="Values&Vision" element={<VisualVisions />} />
          <Route path="Mission&Integrity" element={<MissinIntegrity />} />
          <Route path="Strategy&Team" element={<SartegyTeam />} />
          <Route path="BusinessPartners" element={<BusinessPartners />} />
          <Route path="LabEsuipment" element={<LabEquipment />} />
          <Route path="YarnDyeingMachine" element={<YarnDyeingMachine />} />
          <Route path="FabricDyeingMachine" element={<FabricDyeingMachine />} />
          <Route path="HydroExtractor" element={<HydroExtractor />} />
          <Route path="WindingMachine" element={<WindingMachine />} />
          <Route path = "DispensingAutomation" element={<DispensingAutomation />} />
          <Route path = "HitRecoverySystem" element={<HitRecoverySysten />} />
          <Route path = "TextileERP" element={<TextileERP />} />
          <Route path = "IndigoMonitoringSystem" element={<IndigoManitoringSystem />} />
          <Route path = "AutomaticInsprection&Packing" element={<AutomaticInspectionPacking />} />
          <Route path = "AutomationandRetrofit" element={<AutomationRetrofit />} />
          <Route path = "Consultancy" element={<Consultancy />} />
          <Route path = "SpareParts" element={<SpareParts />} />
          <Route path = "Training" element={<Training />} />
          <Route path = "Contact" element={<Contact />} />
          {/* <Routes path = "Hi"  element={<Hi />}></Routes> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}