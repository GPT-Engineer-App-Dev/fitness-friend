import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Settings</Heading>
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Button colorScheme="blue">Update Profile</Button>
      </VStack>
    </Box>
  );
};

export default Settings;