const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item)
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "python",
        languageFileName: "py"
    },
    {
        language: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
})

// continuing this example 