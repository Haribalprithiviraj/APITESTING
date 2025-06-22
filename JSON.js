let json1 = 1
let json2 = "one"
let json3 = [1,2,5,]
let json4 = {
    "firstname":"haribal",
    "lastname":"prithiviraj"
}
let json5 = `[
    {"name":"haribal",
        "age":20,
        "phone":9994721134
    },
    {
        "name":"prithiviraj",
        "age":21,
        "phone":999417234
    }
            ]`
let parsed = JSON.parse(json5)
console.log(parsed)
console.log(parsed[0].phone)
console.log(JSON.stringify(parsed))
