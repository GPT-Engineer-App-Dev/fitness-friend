import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Activity = () => {
  const [activityName, setActivityName] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityName && duration && caloriesBurned && date) {
      console.log({
        activityName,
        duration,
        caloriesBurned,
        date,
      });
      // Clear the form fields after submission
      setActivityName("");
      setDuration("");
      setCaloriesBurned("");
      setDate("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Box p={4}>
      <Heading mb={6}>Log Activity</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            placeholder="Activity Name"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            isRequired
          />
          <Input
            placeholder="Duration (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            type="number"
            isRequired
          />
          <Input
            placeholder="Calories Burned"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            type="number"
            isRequired
          />
          <Input
            placeholder="Date of Activity"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            isRequired
          />
          <Button colorScheme="blue" type="submit">
            Log Activity
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Activity;