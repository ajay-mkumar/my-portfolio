import { useMediaQuery } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import ExternalLinks from "./ExternalLinks";
import MobileNav from "./MobileNav";
import { navItems } from "../../common/constants";

function NavBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { username } = useParams();

  if (!isMobile)
    return (
      <div>
        <div className="sm:flex justify-between m-5 relative">
          <h1 className="absolute left-[250px] font-bold text-white name">
            Ajay Muthukumaran
          </h1>

          <ul className="flex justify-center gap-5 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((label, index) => (
              <Link
                to={`/${username}/${label.toLowerCase()}`}
                key={index}
                className="text-white hover:text-blue-500 font-medium text-sm md:text-base cursor-pointer transition-all duration-300 transform hover:scale-110"
              >
                {label}
              </Link>
            ))}
          </ul>
          <ExternalLinks isMobile={isMobile} />
        </div>
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    );

  if (isMobile) return <MobileNav />;
}

export default NavBar;
