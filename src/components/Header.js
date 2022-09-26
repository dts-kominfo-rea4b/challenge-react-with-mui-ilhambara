// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Box, Divider } from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = ({ title, subtitle }) => {
  return (
    <Box width="100%" minHeight="100">
      <h1>Call a Friend</h1>
      <p>Your friendly contact app</p>
      <Divider />
    </Box>
  );
};

export default Header;
