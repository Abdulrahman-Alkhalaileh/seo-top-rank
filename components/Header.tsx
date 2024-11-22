import {
  AppBar,
  AppBarProps,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export type HeaderProps = AppBarProps & {};

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <AppBar position="sticky" {...props}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Healthy Eating and Nutrition
        </Typography>
        <Button color="inherit" LinkComponent={Link} href="/">
          Home
        </Button>
        <Button color="inherit" LinkComponent={Link} href="/about">
          About
        </Button>
        <Button color="inherit" LinkComponent={Link} href="/blog">
          Blog
        </Button>
        <Button color="inherit" LinkComponent={Link} href="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
