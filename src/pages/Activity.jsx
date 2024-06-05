import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Activity = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Log Activity</Heading>
      <VStack spacing={4}>
        <Input placeholder="Activity Name" />
        <Input placeholder="Duration (minutes)" />
        <Input placeholder="Calories Burned" />
        <Button colorScheme="blue">Log Activity</Button>
      </VStack>
    </Box>
  );
};

export default Activity;