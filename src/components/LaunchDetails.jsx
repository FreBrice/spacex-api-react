import { useParams } from "react-router";
import * as API from "../services/launches";
import { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text, Link } from "@chakra-ui/react";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg" color="black">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <>
        <Flex display="flex">
          <Text fontSize="2xl">
            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year}
            )
          </Text>
          <Spacer />
          <Box
            p={2}
            bg={launch.launch_success ? "green.400" : "red.400"}
            borderRadius="md"
          >
            {launch.launch_success ? "Success" : "Failure"}
          </Box>
        </Flex>
        <Box>
          Rocket: <Link to={`/rockets/${launch.rocket?.rocket_id}`}>{launch.rocket?.rocket_name}</Link>
        </Box>
        </>
      )}
    </Box>
  );
}
