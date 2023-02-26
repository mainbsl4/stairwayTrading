import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Root from "./root";
import Output from "./output";
import Home from "../components/home/home";
import Prbilications from "../components/naws/prbilications";
import Events from "../components/naws/events";
import About from "../components/company/about";
import VisualVisions from "../components/company/visualVisions";
import MissinIntegrity from "../components/company/missinIntegrity";
import SartegyTeam from "../components/company/sartegyTeam";
import BusinessPartners from "../components/businessPartners/businessPartners"
import LabEquipment from "../components/product/labEquipment";
// import YarnDyeingMachine from "../components/product/fabricDyeingMachine";
import YarnDyeingMachine from "../components/product/yarnDyeingMachine";
import FabricDyeingMachine from "../components/product/fabricDyeingMachine";
import HydroExtractor from "../components/product/hydroExtractor";
import WindingMachine from "../components/product/windingMachine";
import DispensingAutomation from "../components/product/dispensingAutomation";
import HitRecoverySysten from "../components/product/hitRecoverySysten";
import TextileERP from "../components/product/textileERP";
import IndigoManitoringSystem from "../components/product/indigoManitoringSystem";
import AutomaticInspectionPacking from "../components/product/automaticInspectionPacking";
import AutomationRetrofit from "../components/service/automationRetrofit";
import Consultancy from "../components/service/consultancy";
import SpareParts from "../components/service/spareParts";
import Training from "../components/training/training";
import Contact from "../components/contact/contact";
import Hi from "../hi";
import ModulabSBM from "../components/product/productModleComponent/modulabSBM";
// import Hi from "../../hi";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Output />}>
          <Route index element={<Home />} />
          <Route path = "Prbilications" element={<Prbilications />} />
          <Route path = "Events" element={<Events />} />
          <Route path = "AboutUS" element={<About />} />
          <Route path = "Values&Vision" element={<VisualVisions />} />
          <Route path = "Mission&Integrity" element={<MissinIntegrity />} />
          <Route path = "Strategy&Team" element={<SartegyTeam />} />
          <Route path = "BusinessPartners" element={<BusinessPartners />} />
          <Route path = "LabEsuipment" element={<LabEquipment />} />
          <Route path = "YarnDyeingMachine" element={<YarnDyeingMachine />} />
          <Route path = "FabricDyeingMachine" element={<FabricDyeingMachine />} />
          <Route path = "HydroExtractor" element={<HydroExtractor />} />
          <Route path = "WindingMachine" element={<WindingMachine />} />
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
          <Route path = "/Hi"  element={<Hi />}></Route>
          <Route path = "/LabEsuipment/modulabSBM" element={<ModulabSBM />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};