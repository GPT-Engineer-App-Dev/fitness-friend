import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Stat>
          <StatLabel>Steps Taken</StatLabel>
          <StatNumber>10,000</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Calories Burned</StatLabel>
          <StatNumber>500</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Active Minutes</StatLabel>
          <StatNumber>60</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Home;