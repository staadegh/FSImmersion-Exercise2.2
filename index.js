let express = require("express")
let app = express()

let morgan = require("morgan")

app.use(morgan("common"))
app.use("/", express.static("public"))
const topTenMovies =[
    {
      title: 'Harry Potter and the Sorcerer\'s Stone1',
      author: 'J.K. Rowling1'
    },
    {
      title: 'Lord of the Rings2',
      author: 'J.R.R. Tolkien2'
    },
    {
      title: 'Twilight3',
      author: 'Stephanie Meyer3'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone4',
        author: 'J.K. Rowling4'
      },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone5',
        author: 'J.K. Rowling5'
      },
      {
        title: 'Lord of the Rings6',
        author: 'J.R.R. Tolkien6'
      },
      {
        title: 'Twilight7',
        author: 'Stephanie Meyer7'
      },
      {
        title: 'Harry Potter and the Sorcerer\'s Stone8',
        author: 'J.K. Rowling8'
      },
      {
        title: 'Lord of the Rings9',
        author: 'J.R.R. Tolkien9'
      },
      {
        title: 'Twilight10',
        author: 'Stephanie Meyer10'
      }  
  ];
  
app.get("/movies", (req, res)=>{
  res.json(topTenMovies)
})

app.get("/", (req, res)=>{
    res.send("This site is up/running from root!")
})
 
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send("Request cannot be processed, an error has occurred!")
})

app.listen("8080", ()=>{
    console.log("This is up and running.")
})