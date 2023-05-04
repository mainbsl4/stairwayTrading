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
import ModulabSBM from "../components/product/productDescriptionsComponent/modulabSBM";
import REDKROMEII from "../components/product/productDescriptionsComponent/REDKROMEII";
import Carriers from "../components/product/productDescriptionsComponent/Carriers";
import CESCR from "../components/product/productDescriptionsComponent/CES-CR";
import ColourLight from "../components/product/productDescriptionsComponent/ColourLight";
import GSESeries from "../components/product/productDescriptionsComponent/GSE-Series";
import GSHSeries from "../components/product/productDescriptionsComponent/GSH–Series";
import HANKSeries from "../components/product/productDescriptionsComponent/HANK–Series";
import HardWindingMachine from "../components/product/productDescriptionsComponent/HardWindingMachine";
import LabHANK from "../components/product/productDescriptionsComponent/LabHANK";
import MiniDryer from "../components/product/productDescriptionsComponent/MiniDryer";
import MINIJET from "../components/product/productDescriptionsComponent/MINIJET";
import MINISIMPLEX from "../components/product/productDescriptionsComponent/MINISIMPLEX";
import PHCUBE from "../components/product/productDescriptionsComponent/pHCUBE";
import SmallLotsDryer from "../components/product/productDescriptionsComponent/SmallLotsDryer";
import SoftWindingMachine from "../components/product/productDescriptionsComponent/SoftWindingMachine";
import SP110Series from "../components/product/productDescriptionsComponent/SP110–Series";
import SPSimplexSeries from "../components/product/productDescriptionsComponent/SPSimplex–Series";
import TEXAIR from "../components/product/productDescriptionsComponent/TEXAIR";
import ZP400 from "../components/product/productDescriptionsComponent/ZP400";
import ZP400Hydro from "../components/product/productDescriptionsComponent/ZP400Hydro";
import CEL_CES_CR from "../components/product/productDescriptionsComponent/CEL_CES-CR";
import DATEXPLCMASTER841616 from "../components/service/servicesContainer/DATEX-PLC-MASTER-841616";
import DatexSmartTouchS from "../components/service/servicesContainer/Datex-smart-touch-S";
import MDatexSmartTouchM from "../components/service/servicesContainer/MDatex-smart-touch-M";
import PLCmodule from "../components/service/servicesContainer/PLC-module";

import TechnoFill from "../components/product/productDescriptionsComponent/technoFill";
import TechnoMix from "../components/product/productDescriptionsComponent/technoMix";
import TechnoSalt from "../components/product/productDescriptionsComponent/technoSalt";
import TechnoTwo from "../components/product/productDescriptionsComponent/technoTwo";




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
          <Route path = "/LabEsuipment/redkromeii"  element={<REDKROMEII />}></Route>
          <Route path = "/LabEsuipment/cescr"  element={<CESCR />}></Route>
          <Route path = "/LabEsuipment/colourLight"  element={<ColourLight />}></Route>
          <Route path = "/LabEsuipment/labHank"  element={<LabHANK />}></Route>
          <Route path = "/LabEsuipment/miniDryer"  element={<MiniDryer />}></Route>
          <Route path = "/LabEsuipment/miniJET"  element={<MINIJET />}></Route>
          <Route path = "/LabEsuipment/miniSimplex"  element={<MINISIMPLEX />}></Route>
          <Route path = "/LabEsuipment/phCube"  element={<PHCUBE />}></Route>
          <Route path = "/LabEsuipment/smallLotsDryer"  element={<SmallLotsDryer />}></Route>
          <Route path = "/LabEsuipment/texair"  element={<TEXAIR />}></Route>
          <Route path = "/LabEsuipment/zp400"  element={<ZP400 />}></Route>

          <Route path = "/HydroExtractor/ZP400"  element={<ZP400Hydro />}></Route>
          <Route path = "/HydroExtractor/cle-ces-cr"  element={<CEL_CES_CR />}></Route>
          {/* <Route path = "/Hi"  element={<SoftWindingMachine />}></Route>
          <Route path = "/Hi"  element={<HardWindingMachine />}></Route> */}

          <Route path = "/AutomationandRetrofit/MDatexSmartTouchM"  element={<MDatexSmartTouchM />}></Route>
          <Route path = "/AutomationandRetrofit/DatexSmartTouchS"  element={<DatexSmartTouchS />}></Route>
          <Route path = "/AutomationandRetrofit/DATEXPLCMASTER841616"  element={<DATEXPLCMASTER841616 />}></Route>
          <Route path = "/AutomationandRetrofit/PLCmodule"  element={<PLCmodule />}></Route>

          <Route path = "/WindingMachine/hardWindingMachine"  element={<HardWindingMachine />}></Route>
          <Route path = "/WindingMachine/softWindingMachine"  element={<SoftWindingMachine />}></Route>

          <Route path = "/YarnDyeingMachine/carriers"  element={<Carriers />}></Route>
          <Route path = "/YarnDyeingMachine/gseSeries"  element={<GSESeries />}></Route>
          <Route path = "/YarnDyeingMachine/gshSeries"  element={<GSHSeries />}></Route>
          <Route path = "/YarnDyeingMachine/hankSeries"  element={<HANKSeries />}></Route>
          <Route path = "/YarnDyeingMachine/sp110series"  element={<SP110Series />}></Route>
          <Route path = "/YarnDyeingMachine/spSimpleSeries"  element={<SPSimplexSeries />}></Route>

          <Route path="/DispensingAutomation/TechnoFill" element= {<TechnoFill/>}></Route>
          <Route path="/DispensingAutomation/TechnoMix" element= {<TechnoMix/>}></Route>
          <Route path="/DispensingAutomation/TechnoSalt" element= {<TechnoSalt/>}></Route>
          <Route path="/DispensingAutomation/TechnoTwo" element= {<TechnoTwo/>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
};