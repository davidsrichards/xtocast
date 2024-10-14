import DashBoard from "./DashBoard/DashBoard";
import Statistics from "./DashBoard/Content/Dashboard/Statistics/Statistics";
import { Routes, Route } from "react-router-dom";
import Input from "./Input/Input";

function Component() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default Component;
