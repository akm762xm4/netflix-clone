import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Bars3Icon } from "@heroicons/react/20/solid"
import { useDispatch, useSelector } from "react-redux"
import { toggleNavbar } from "./navbarSlice"
import { SearchForm } from "../../features/search/form/SearchForm"
import { NavItems } from "./Navitems"
export const Navbar = () => {
  const dispatch = useDispatch()
  const isNavbarOpen = useSelector((state: any) => state.navbar.isNavbarOpen)
  const NavStyle = ({ isActive }: any) => {
    return { color: isActive ? "#e50914" : "" }
  }
  return (
    <>
      <div className="flex items-center justify-between p-2 h-[4.5rem] bg-[#221f1f]  border-b border-black transition-all duration-300">
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className={`${
              isNavbarOpen ? "" : "rotate-90 "
            } md:hidden block transition-transform duration-150`}
          >
            <Bars3Icon className="w-7 h-7  text-[#e50914]" />
          </button>
          <div className="w-[3.1rem] rounded-md p-1 shrink-0">
            <img src={logo} />
          </div>
        </div>
        <span className="md:flex hidden items-center gap-3 text-lg md:text-2xl text-[#f5f5f1]">
          {NavItems.map((elem) => (
            <NavLink
              key={elem.path}
              to={elem.path}
              className={elem.clName}
              style={NavStyle}
            >
              {elem.name}
            </NavLink>
          ))}
        </span>
        <SearchForm />
      </div>
      <div className={`${isNavbarOpen ? "hidden" : "block"}`}>
        <span className="flex flex-col bg-[#292f33] md:hidden items-start py-2 px-4 text-2xl gap-2 text-[#f5f5f1]">
          {NavItems.map((elem) => (
            <NavLink
              key={elem.path}
              to={elem.path}
              className={elem.clName}
              style={NavStyle}
            >
              {elem.name}
            </NavLink>
          ))}
        </span>
      </div>
    </>
  )
}
