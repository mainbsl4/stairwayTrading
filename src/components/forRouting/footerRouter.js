import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../footer/footer";

import LabEquipment from "../product/labEquipment";



export default function FooterRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />}>
        <Route path="LabEsuipment" element={<LabEquipment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}