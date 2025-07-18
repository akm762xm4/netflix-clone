import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { closeNavbar, toggleNavbar } from "./navbarSlice";
import { SearchForm } from "../../features/search/SearchForm";
import { NavItems } from "./Navitems";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNavbarOpen = useSelector((state: any) => state.navbar.isNavbarOpen);
  const location = useLocation();

  const NavStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#e50914" : "#f5f5f1",
  });

  const handleNavigation = (path: string) => {
    dispatch(closeNavbar());
    navigate(path);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-6 py-3 h-[4.5rem] bg-[#141414] border-b border-[#333] shadow-sm sticky top-0 z-50">
        {/* Left: Logo + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className="md:hidden transition-transform duration-200 hover:scale-110"
            aria-label="Toggle Menu"
          >
            <Bars3Icon className="w-7 h-7 text-[#e50914]" />
          </button>

          <div className="w-10 h-10 shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Middle: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-[1.05rem] font-medium">
          {NavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={NavStyle}
              className="transition-all duration-200 hover:text-[#e50914] hover:underline underline-offset-4"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Search */}
        <div className="flex items-center justify-end w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px]">
          <SearchForm />
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`${isNavbarOpen ? "block" : "hidden"} md:hidden z-30 `}>
        <nav className="fixed bg-[#1c1c1c7b] w-full bg flex flex-col gap-3 px-6 py-4 text-lg font-medium text-[#f5f5f1] backdrop-blur-lg">
          {NavItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="w-full text-left transition-colors duration-200 hover:text-[#e50914]"
              style={NavStyle({ isActive: location.pathname === item.path })}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
