import { Button, useMediaQuery } from "@mui/material";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ExternalLinks from "./ExternalLinks";
import MobileNav from "./MobileNav";
import { navItems } from "../../common/constants";
import { useAppSelector } from "../../hooks/hooks";
import capitalize from "../../common/capitalize";
import { getToken, removeToken } from "../../utility/TokenHelper";

function NavBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { userDetails } = useAppSelector((state) => state.user);
  const token = getToken();
  
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();

    // navigate("/auth");
  };

  if (!isMobile)
    return (
      <div>
        <div className="sm:flex justify-between m-5 relative">
          {userDetails && (
            <h1 className="absolute left-[250px] font-bold text-white name">
              {capitalize(userDetails?.firstName) +
                " " +
                capitalize(userDetails?.lastName)}
            </h1>
          )}
          <ul className="flex justify-center gap-5 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((label, index) => (
              <Link
                to={label === 'logout' ? '/auth' : `/${username}/${label.toLowerCase()}`}
                key={index}
                onClick={label === 'logout' && handleLogout}
                className="text-white hover:text-blue-500 font-medium text-sm md:text-base cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                {label === 'logout' ? token && label : label}
              </Link>
              
            ))}

          </ul>
          
          <ExternalLinks isMobile={isMobile} user={userDetails} />
          
        </div>
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    );

  if (isMobile) return <MobileNav />;
}

export default NavBar;
