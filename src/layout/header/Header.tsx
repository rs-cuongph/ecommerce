import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { menuItems, spMenuItems, subMenuItems } from "./constants";
import { useRouter } from "next/router";
import logoImg from "@/assets/imgs/logo.jpg";
import Image from "next/image";
import { ROUTES_NAME } from "@/shared/routes";
import SearchCustom from "../../components/common/SearchCustom/SearchCustom";
import useProduct from "@/hooks/useProduct";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { filterProduct } = useProduct();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigator = (url: string) => {
    router.push(url);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ textAlign: "center" }}
    >
      <Box p={1}>
        <Image
          src={logoImg}
          alt="logo"
          width={100}
          onClick={() => navigator(ROUTES_NAME.home)}
          className="cursor-pointer"
        />
      </Box>
      <Divider />
      <SearchCustom onChangeSearch={(value: string) => handleSearch(value)} />
      <Divider />
      <List>
        {spMenuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigator(item.href)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSearch = useCallback(
    (value: string) => {
      setTimeout(() => {
        filterProduct(value);
      }, 1000);
    },
    [filterProduct]
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ bgcolor: "#c91400" }}>
        <Toolbar
          className="w-full md:container mx-auto flex"
          sx={{
            justifyContent: { xs: "space-between", sm: "unset" },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box>
              <Image
                src={logoImg}
                alt="logo"
                width={container ? 150 : 100}
                onClick={() => navigator(ROUTES_NAME.home)}
                className="cursor-pointer"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  sm: "300px",
                  md: "300px",
                  lg: "400px",
                },
                display: { xs: "none", sm: "flex" },
              }}
            >
              <SearchCustom
                onChangeSearch={(value: string) => handleSearch(value)}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.title}
                  sx={{ color: "#fff" }}
                  onClick={() => navigator(item.href)}
                >
                  {item.title}
                </Button>
              ))}
              <Button
                key={"type-product"}
                sx={{ color: "#fff" }}
                onClick={handleClick}
              >
                Danh mục sản phẩm
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {" "}
                {subMenuItems.map((item) => (
                  <MenuItem
                    key={item.title}
                    onClick={() => {
                      navigator(item.href);
                      handleClose();
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Box display="flex" gap={1}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              sx={{
                display: { xs: "flex", sm: "none" },
              }}
            >
              <SearchIcon onClick={() => setIsSearchOpen(!isSearchOpen)} />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ pr: 0, display: { md: "none" } }}
            >
              <AiOutlineMenu />
            </IconButton>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: "flex", sm: "none" } }} justifyContent="end">
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              pb: "10px",
              pl: "17px",
              display: isSearchOpen ? "flex" : "none",
            }}
          >
            <SearchCustom
              onChangeSearch={(value: string) => handleSearch(value)}
            />
          </Box>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
