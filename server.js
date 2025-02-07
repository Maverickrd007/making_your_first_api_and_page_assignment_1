// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

app.get("/assistant/greet", (req, res) => {
  let user = req.query.name;
  let today = new Date().getDay();

  let obj = {
    welcomeMessage: `Hello, ${user}! Welcome to our assistant app!`,
  };

  if (today === 1) {
    obj.dayMessage = "Happy Monday! Start your week with energy!";
  } else if (today === 5) {
    obj.dayMessage = "It's Friday! The weekend is near!";
  } else {
    obj.dayMessage = "Have a wonderful day!";
  }

  return res.send(obj);
});

app.get("/", (req, res) => {
  return res.send("<h1>Hello, Visitor!</h1>");
});

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
