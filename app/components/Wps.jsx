"use client";

import { Box, Button, Typography } from "@mui/material";

export default function Wps() {
  const saveHandler = () => {
    console.log("test");
  };
  return (
    <div className="">
      <Box
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          background: "#f1f1f1",
          borderRadius: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Work Breakdown Structure</Typography>
        <Button onClick={saveHandler} variant="contained">
          Save Project
        </Button>
      </Box>
    </div>
  );
}
