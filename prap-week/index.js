const express = require('express');
const app = express();

// Define a mapping of user IDs to their respective websites
const userWebsiteMap = {
  user1: 'https://www.google.com',
  user2: 'https://www.chatgpt.com',
  user3: 'https://www.facebook.com',
  // Add more user entries as needed
};

// Express middleware to handle redirection based on user ID
app.use((req, res, next) => {
  const userId = req.query.userId;
  if (userId && userWebsiteMap[userId]) {
    return res.redirect(userWebsiteMap[userId]);
  } else {
    // Handle invalid user ID or no user ID provided
    return res.status(400).send('Invalid user ID or user ID not provided.');
  }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
