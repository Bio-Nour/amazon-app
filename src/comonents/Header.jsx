

import { Link } from "react-router-dom";
import { useAuth } from '../context/GlobalState';
import { auth } from "../firbase";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./header.css";
import { AddShoppingCartOutlined   } from "@mui/icons-material";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link style={{textDecoration:'none' ,color:'white'}}  to="/">
        <h2 >AMAZON</h2>
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchOutlinedIcon
          className="header-searchIcon"
        />
      </div>
      <div className="header-nav">
        <Link to={!user && "/SignIn"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/Orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header-optionBasket">
            <AddShoppingCartOutlined />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
