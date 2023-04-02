const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const data = [
  {
    id: 1,
    first_name: "Leonid",
    last_name: "Bardsley",
    email: "lbardsley0@yahoo.co.jp",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Tybalt",
    last_name: "Antushev",
    email: "tantushev1@storify.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Bethena",
    last_name: "Worgen",
    email: "bworgen2@virginia.edu",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Bartram",
    last_name: "Matts",
    email: "bmatts3@myspace.com",
    gender: "Non-binary",
  },
  {
    id: 5,
    first_name: "Marice",
    last_name: "Pavlenkov",
    email: "mpavlenkov4@tmall.com",
    gender: "Bigender",
  },
];

app.get("/users", (req, res) => {
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
