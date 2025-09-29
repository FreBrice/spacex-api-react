import { HiCalendar } from "react-icons/hi";
import { Box, Button, Flex, Spacer, Text, Icon } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Link } from "react-router";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg" color="black">
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer/>
        <Box
          p={2}
          bg={launch.launch_success ? "green.400" : "red.400"}
          color="white"
          borderRadius="md"
        >
          {launch.launch_success ? "Success" : "Failure"}
        </Box>
      </Flex>
      
      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500"/>
        <Text fontSize="sm" ml="1" color="gray.500">
          {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>

      <Link to={`/launch/${launch.flight_number}`}>
      <Button mt={2} colorScheme="purple">
        More Details
        </Button>
      </Link>
    </Box>
  );
}
