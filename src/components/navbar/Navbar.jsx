import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import {motion } from "framer-motion";

import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  CircularProgress,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logoP from "../../assets/bookStore-logo.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreIcon from "@mui/icons-material/MoreVert";
import ThemeToggle from "../../ThemeToggle";
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export function Navbar() {
  const { user, setUser, loading, refreshCounts } = useContext(AuthContext);
  const [counts, setCounts] = useState({ cartCount: 0, wishlistCount: 0 });
  const navigate = useNavigate();
  const theme = useTheme();
  const iconTextColor = theme.palette.mode === "dark" ? "white" : "black";
  useEffect(() => {
    if (!user?.id) return;
    const fetchSummary = async () => {
      try {
        const res = await axios.get(`https://book-store-ozfo.onrender.com/cw/sum/${user.id}`);
        setCounts(res.data);
      } catch (err) {
        console.error("Failed to fetch summary:", err);
      }
    };
  
    fetchSummary();
  }, [user?.id,refreshCounts]);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLogout = async () => {
    try {
      await axios.get("https://book-store-ozfo.onrender.com/logout", {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate("/profile");
          handleMenuClose();
        }}
      >
        <AccountCircle />
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogout();
        }}
      >
        <LogoutIcon />
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >  
      <Link to={`/cart/${user?.id}`} style={{ color: iconTextColor , textDecoration:"none"}}>

      <MenuItem>

        <IconButton size="large" aria-label={`show ${counts.cartCount} items in Cart`} sx={{ color: iconTextColor }}>
          <Badge badgeContent={counts?.cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
</Link>

<Link to={`/wishlist/${user?.id}`} style={{ color: iconTextColor , textDecoration:"none"}}>

      <MenuItem>
        <IconButton
          size="large"
          aria-label={`show ${counts.wishlistCount} items in Wishlist`}
          sx={{ color: iconTextColor }}
        >
          <Badge badgeContent={counts?.wishlistCount} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem></Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{ color: iconTextColor }}
        >
          {user ? <AccountCircle /> : <LoginIcon />}
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  );

  if (loading) return <CircularProgress />;
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Toolbar>
            <Link to="/">
              <IconButton
                sx={{
                  width: `60px`,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                {/* <MenuIcon /> */}
                <img
                  src={logoP}
                  alt="Placeholder"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              baba - book store
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            {user && (
              <Typography variant="body1" sx={{ p: 2 }}>
                {user.provider === "local"
                  ? `Welcome ${user.email}`
                  : `Welcome ${user.username}`}
              </Typography>
            )}
            <ThemeToggle />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={`/cart/${user?.id}`} style={{ color: "white" , textDecoration:"none"}}>

              <IconButton
                size="large"
                aria-label={`show ${counts.cartCount} items in Cart`}
                color="inherit"
              >

                <Badge badgeContent={`${counts.cartCount}`} color="error">
                  
                    <ShoppingCartIcon />
                </Badge>
                

              </IconButton>
              </Link>

<Link to={`/wishlist/${user?.id}`} style={{ color: "white", textDecoration:"none"}}>

              <IconButton
                size="large"
                aria-label={`show ${counts.wishlistCount} items in Wishlist`}
                color="inherit"
              >
                <Badge badgeContent={`${counts.wishlistCount}`} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              </Link>
              {user ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  sx={{ color: "white" }}
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <IconButton onClick={() => navigate("/login")}>
                  <LoginIcon sx={{ color: "white" }} />
                </IconButton>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </motion.div>
  );
}
