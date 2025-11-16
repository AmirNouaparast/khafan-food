import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notfound from "./pages/Notfound/Notfound";
import ShoppingCard from "./pages/ShoppingCard/ShoppingCard";
import Payment from "./pages/Payment/Payment";
import Notification from "./components/Notification/Notification";
import { useContext } from "react";
import { AppContext } from "./appContext";

function App() {
  const { notification } = useContext(AppContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </>
  );
}

export default App;
