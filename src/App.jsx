import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notfound from "./pages/Notfound/Notfound";
import ShoppingCard from "./pages/ShoppingCard/ShoppingCard";
import Payment from "./pages/Payment/Payment"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopping-card" element={<ShoppingCard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
