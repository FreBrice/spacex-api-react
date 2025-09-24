import * as API from "./services/launches";
import { useState, useEffect } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import logo from "./assets/SpaceX_Logo_Black.png";
import { LaunchItem } from "./components/LaunchItem";

import "dayjs/locale/es";


function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Box bg="white" minH="100vh" p={6}>
        <Image m={4} src={logo} width={300} />
        <Heading as="h1" size="lg" m={4} color="black">
          SpaceX Launches
        </Heading>
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch}/>
          ))}
        </section>
      </Box>
    </>
  );
}

export default App;
