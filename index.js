let express = require("express")
let app = express()
const portNumber = 8083
  
app.get("/movies", (req, res)=>{
  res.send("Successfully GET request returning data on all the movies")
})

app.get("/movies/data/:title", (req, res)=>{
    res.send("Successfully return data about a single movie by title to the user")
})
 
app.get("/movies/genre/:name", (req, res)=>{
  res.send("Successfully return data about a genre (description) by name/title")   
})

app.get("/movies/director/:name", (req, res)=>{
  res.send("Successfully return data about a director (bio, birth year, death year) by name")  
})

app.post("/movies/register", (req, res)=>{
  res.send("Successfully allow new users to register")
})

app.put("/movies/update/:username", (req, res)=>{
  res.send("Successfully allow users to update their user info (username)")
})

app.post("/movies/AddToFavourite/:username", (req, res)=>{
  res.send("Successfully allow users to add a movie to their list of favorites")
})

app.delete("/movies/removeMovie/:movie/:username", (req, res)=>{
  res.send("Successfully allow users to remove a movie from their list of favorites")
})

app.delete("/movies/deregister/:useremail", (req, res)=>{
  res.send("Successfully allow existing users to deregister")
})
 
app.listen(portNumber, ()=>{
    console.log("This is up and running.")
})