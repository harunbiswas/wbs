"use client";

import { StyledEngineProvider } from "@mui/styled-engine-sc";
import Wps from "./components/Wps";

export default function Home() {
  return (
    <main>
      <StyledEngineProvider injectFirst>
        <Wps />
      </StyledEngineProvider>
    </main>
  );
}
