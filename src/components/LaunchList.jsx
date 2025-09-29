import { useState, useEffect } from "react";
import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";
import { Heading } from "@chakra-ui/react";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4} color="black">
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? ( 
        <div>Loading...</div>
       ) : ( 
        <section>
        {launches.map((launch, idx) => (
          <LaunchItem key={`${launch.flight_number}-${idx}`} {...launch} />
        ))}
      </section>
       )}
      
    </>
  );
}
