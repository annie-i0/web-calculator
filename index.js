function myFunction() {
    var x = document.getElementById("box1").value
    var y = document.getElementById("box2").value

    var operator = document.getElementById("values").value
    var result = 0

    if (operator == "add") {
        result = Number(x) + Number(y)
        document.getElementById("box3").value = result
    } else if (operator == "sub") {
        result = Number(x) - Number(y)
        document.getElementById("box3").value = result
    } else if (operator == "div") {
        result = Number(x) / Number(y)
        document.getElementById("box3").value = result
    } else if (operator == "mul") {
        result = Number(x) * Number(y)
        document.getElementById("box3").value = result


    }


}