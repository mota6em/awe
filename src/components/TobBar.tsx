import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import Events from "../pages/Events";
import NonMuslimsDay from "../pages/Non-muslims-day";
import Sds from "../pages/Sds";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";

const TopBar = () => {
  return (
    <>
      <header className="flex items-center justify-between px-3 md:px-6 py-1 md:py-2 bg-stone-100 shadow-md">
        <NavLink to="/" className="text-xl font-semibold text-stone-800 ms-2">
          AWE
        </NavLink>

        <nav className="hidden md:flex gap-6 !text-gray-300 font-semibold text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "text-black"
                : "text-gray-700 hover:text-stone-950";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => {
              return isActive
                ? "text-black"
                : "text-gray-700 hover:text-stone-950";
            }}
          >
            Events
          </NavLink>
          <NavLink
            to="/sds"
            className={({ isActive }) => {
              return isActive
                ? "text-black"
                : "text-gray-700 hover:text-stone-950";
            }}
          >
            SDS
          </NavLink>
          <NavLink
            to="/non-muslims-day"
            className={({ isActive }) => {
              return isActive
                ? "text-black"
                : "text-gray-700 hover:text-stone-950";
            }}
          >
            Non-Muslims' Day
          </NavLink>
          <NavLink
            to="/documents"
            className={({ isActive }) => {
              return isActive
                ? "text-black"
                : "text-gray-700 hover:text-stone-950";
            }}
          >
            Documents
          </NavLink>
        </nav>
        <nav className="md:hidden gap-6 text-sm">
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenu size={20} className="text-stone-800" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start font-semibold pl-5 pt-12">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-stone-950";
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-stone-950";
                }}
              >
                Events
              </NavLink>
              <NavLink
                to="/sds"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-stone-950";
                }}
              >
                SDS
              </NavLink>
              <NavLink
                to="/non-muslims-day"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-stone-950";
                }}
              >
                Non-Muslims' Day
              </NavLink>
              <NavLink
                to="/documents"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-stone-950";
                }}
              >
                Documents
              </NavLink>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/events" element={<Events />} />
        <Route path="/non-muslims-day" element={<NonMuslimsDay />} />
        <Route path="/sds" element={<Sds />} />
      </Routes>
    </>
  );
};

export default TopBar;
