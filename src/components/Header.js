// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import { Box, Divider } from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Box width="100%" minHeight="100">
      <h1>Call a Friend</h1>
      <p>Your friendly contact app</p>
      <Divider />
    </Box>
  );
};

export default Header;
