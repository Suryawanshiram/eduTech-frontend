import { Link, matchPath, useLocation } from "react-router-dom";
// import logo from "../../assets/Logo/Logo-full-Light1.png";
import logo from "../../assets/Logo/Logo-full-Light1.1.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { BsChevronDown } from "react-icons/bs";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    setLoading(true);
    try {
      const res = await apiConnector("GET", categories?.CATEGORIES_API);
      setSubLinks(res?.data?.data);
      console.log(res.data.data);
    } catch (error) {
      console.log("Could not fetch Categories.", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // console.log("token", token);
    fetchSubLinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location?.pathname);
  };

  return (
    <header className="flex w-full items-center justify-center border-b border-richblack-700 px-4 fixed top-0 left-0 right-0 bg-richblack-900 z-50">
      <div className="flex w-full max-w-maxContent items-center justify-between mx-auto h-14">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            width={160}
            height={42}
            loading="lazy"
            alt="logo"
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-white">
            {NavbarLinks?.map((link, index) => (
              <li key={index}>
                {link?.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <p>{link?.title}</p>
                    <BsChevronDown className="mt-[2px]" />

                    {/* Dropdown */}
                    <div
                      className="invisible absolute left-1/2 top-[100%] z-[1000] flex w-[240px] flex-col rounded-lg bg-richblack-5 px-4 py-2 text-richblack-900
                                  opacity-0 shadow-md transition-all duration-200 -translate-x-1/2 translate-y-2
                                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-3"
                    >
                      {/* Pointer */}
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-richblack-5 "></div>

                      {loading ? (
                        <p className="text-center text-sm">Loading...</p>
                      ) : subLinks && subLinks?.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink?.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink?.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center text-sm">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`transition-colors text-base duration-200 ${
                        matchRoute(link?.path)
                          ? "text-yellow-100  font-semibold"
                          : "text-richblack-25 hover:text-yellow-50"
                      }`}
                    >
                      {link?.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* {LOGIN/SIGNUP/DASHBOARD} */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE?.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
