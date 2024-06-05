import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Progress = () => {
  const [chartData, setChartData] = useState({ steps: {}, calories: {}, activeMinutes: {} });

  useEffect(() => {
    // Mock data for demonstration purposes
    const data = {
      steps: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Steps Taken',
            data: [3000, 5000, 4000, 7000, 8000, 6000, 9000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      },
      calories: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Calories Burned',
            data: [200, 450, 300, 500, 600, 400, 700],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      },
      activeMinutes: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Active Minutes',
            data: [30, 45, 40, 60, 70, 50, 80],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
          },
        ],
      },
    };

    setChartData(data);
  }, []);

  return (
    <Box p={4}>
      <Heading mb={6}>Progress</Heading>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
        <Box>
          <Text mb={4}>Steps Taken</Text>
          <Line data={chartData.steps} />
        </Box>
        <Box>
          <Text mb={4}>Calories Burned</Text>
          <Line data={chartData.calories} />
        </Box>
        <Box>
          <Text mb={4}>Active Minutes</Text>
          <Line data={chartData.activeMinutes} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Progress;