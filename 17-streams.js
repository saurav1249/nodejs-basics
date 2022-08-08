const {createReadStream} = require("fs")

const stream = createReadStream('./content/big.txt',{
    encoding: "utf-8",
    highWaterMark: 2000,
})

stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => console.log(err))
