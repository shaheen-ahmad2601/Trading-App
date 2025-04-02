import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { CandlestickChart, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        px: 3,
        paddingBottom: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          py: 2,
        }}
      >
        <CandlestickChart
          sx={{
            height: {
              xs: "2rem",
              sm: "2.5rem",
            },
            width: "2.5rem",
          }}
        />
        <Link
          href={"/"}
          style={{
            color: "white",
            letterSpacing: ".1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "inherit",
              fontWeight: "600",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
            }}
          >
            TRADING VIEW
          </Typography>
        </Link>
      </Box>
      <hr style={{ border: "none", height: "1px", backgroundColor: "#333" }} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 2,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      ></Box>
    </Box>
  );
};

export default Footer;
