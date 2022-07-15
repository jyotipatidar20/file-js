var fs=require("fs")
const buf_data=fs.readFileSync("writefile.txt")
org_data=buf_data.toString()
console.log(org_data)