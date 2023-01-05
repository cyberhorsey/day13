import axios from "axios";
// we use `import axios from "axios"` which is another way of saying `const axios = require("axios")`
// it is jsut better supported in the browser!

const button = document.getElementById("submit");

button.addEventListener("click", function() {
    const input = document.getElementById("whatever");
    console.log(input.value);
})