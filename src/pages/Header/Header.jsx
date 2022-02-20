import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "10%",
        paddingLeft: "2rem",
      }}
      onClick={() => navigate("/")}
    >
      Endpoints Manager
    </AppBar>
  );
}
