import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

function Layout() {
  const navItems = [
    { id: "home", label: "HOME", link: "/" },
    { id: "about", label: "ABOUT", link: "/about" },
    { id: "portfolio", label: "PORTFOLIO", link: "/portfolio" },
    { id: "blog", label: "BLOG", link: "/blog" },
    { id: "contact", label: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-auto">
        <Heading navItems={navItems} />
        <div className="flex-1 p-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
