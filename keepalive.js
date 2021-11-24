const express = require('express');
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
	  res.json({
		Message: "Bot is Alive"
		})
	})


const port = 6200
app.listen(port, () =>{
	
	console.log(`Bot is running on http://localhost: ${port}`)
})

