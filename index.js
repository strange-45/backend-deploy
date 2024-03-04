// console.log("Hello World");
require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
const githubData={
  "login": "Abhay-raj69",
  "id": 93567913,
  "node_id": "U_kgDOBZO7qQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/93567913?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Abhay-raj69",
  "html_url": "https://github.com/Abhay-raj69",
  "followers_url": "https://api.github.com/users/Abhay-raj69/followers",
  "following_url": "https://api.github.com/users/Abhay-raj69/following{/other_user}",
  "gists_url": "https://api.github.com/users/Abhay-raj69/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Abhay-raj69/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Abhay-raj69/subscriptions",
  "organizations_url": "https://api.github.com/users/Abhay-raj69/orgs",
  "repos_url": "https://api.github.com/users/Abhay-raj69/repos",
  "events_url": "https://api.github.com/users/Abhay-raj69/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Abhay-raj69/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Abhay Raj",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "hum_abhayraj",
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2021-11-02T04:34:36Z",
  "updated_at": "2024-02-28T07:49:25Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hum_abhayraj14");
});

app.get("/login", (req, res) => {
  res.send('<h1>Please Tell me your name</h1>');
});

app.get('/youtube',(req,res)=>{
    res.send('<h2> Chai or Code </h2>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
