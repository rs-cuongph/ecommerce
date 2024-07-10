import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { menuItems } from "./constants";
import { useRouter } from "next/router";
import logoImg from "@/assets/imgs/logo.jpg";
import Image from "next/image";
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigator = (url: string) => {
    router.push(url);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box>
        <Image src={logoImg} alt="logo" width={150} />
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
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
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ bgcolor: "#c91400" }}>
        <Toolbar className="container mx-auto">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box>
              <Image src={logoImg} alt="logo" width={container ? 50 : 150} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.title}
                  sx={{ color: "#fff" }}
                  onClick={() => navigator(item.href)}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
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
            display: { xs: "block", sm: "none" },
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
