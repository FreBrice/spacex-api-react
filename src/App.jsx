import { Box, Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router";

import { RocketDetails } from "./components/RocketDetails";
import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import logo from "./assets/SpaceX_Logo_Black.png";

function App() {
  return (
    <>
      <Box bg="white" minH="100vh" p={6}>
        <Image m={4} src={logo} width={300} />
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path="launch/:launchId" element={<LaunchDetails />} />
          <Route path="rockets/:rocketId" element={<RocketDetails />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
