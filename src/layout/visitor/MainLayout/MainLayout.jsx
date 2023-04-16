import { Outlet } from "react-router-dom";
import AppProvider from "../../../store/AppProvider";
import Contact from "../Contact/Contact";
import ScrollTopBtn from "../scrollTopBtn/ScrollTopBtn";
import Navbar from "./header/Navbar";

const MainLayout = () => {
  return(
    <AppProvider>
      <Navbar />
      <Outlet />
      <Contact />
      <ScrollTopBtn />
    </AppProvider>
  );
};

export default MainLayout;