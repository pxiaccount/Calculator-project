let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let clear = document.getElementById("clear")
let eq = document.getElementById("eq")

let secondstate = false
let firstnumstring = ""
let firstnum = 0
let secondstring = ""
let second = 0
let op;
let opstate = true
let finish = false
let result = 0
let result_old = 0
let blank = true


one.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "1"
        display.innerHTML += 1
    } else {
        secondstring += "1"
        display.innerHTML += 1
    }
}

two.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "2"
        display.innerHTML += 2
    } else {
        secondstring += "2"
        display.innerHTML += 2
    }
}

three.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "3"
        display.innerHTML += 3
    } else {
        secondstring += "3"
        display.innerHTML += 3
    }
}

four.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "4"
        display.innerHTML += 4
    } else {
        secondstring += "4"
        display.innerHTML += 4
    }
}

five.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "5"
        display.innerHTML += 5
    } else {
        secondstring += "5"
        display.innerHTML += 5
    }
}

six.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "6"
        display.innerHTML += 6
    } else {
        secondstring += "6"
        display.innerHTML += 6
    }
}

seven.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "7"
        display.innerHTML += 7
    } else {
        secondstring += "7"
        display.innerHTML += 7
    }
}

eight.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "8"
        display.innerHTML += 8
    } else {
        secondstring += "8"
        display.innerHTML += 8
    }
}

nine.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "9"
        display.innerHTML += 9
    } else {
        secondstring += "9"
        display.innerHTML += 9
    }
}

zero.onclick = () => {
    blank = false
    if (finish == true) {
        display.innerHTML = ""
    }
    finish = false
    if (!secondstate) {
        firstnumstring += "0"
        display.innerHTML += 0
    } else {
        secondstring += "0"
        display.innerHTML += 0
    }
}

let finish_continue = false
let finish_op = false
let dis = display.innerHTML

add.onclick = () => {
    op = "+"
    if (opstate && blank === false) {
        secondstate = true
        firstnum = Number(firstnumstring)
        console.log(firstnumstring)
        firstnumLength = firstnumstring.length
        display.innerHTML += "+"
        opstate = false
    }

    if (finish_op) {
        finish_continue = true
    }
}

sub.onclick = () => {
    op = "-"
    if (opstate && blank === false) {
        secondstate = true
        firstnum = Number(firstnumstring)
        console.log(firstnumstring)
        firstnumLength = firstnumstring.length
        display.innerHTML += "-"
        opstate = false
    }

    if (finish_op) {
        finish_continue = true
    }
}

mul.onclick = () => {
    op = "*"
    if (opstate && blank === false) {
        secondstate = true
        firstnum = Number(firstnumstring)
        console.log(firstnumstring)
        firstnumLength = firstnumstring.length
        display.innerHTML += "*"
        opstate = false
    }

    if (finish_op) {
        finish_continue = true
    }
}

div.onclick = () => {
    op = "/"
    if (opstate && blank === false) {
        secondstate = true
        firstnum = Number(firstnumstring)
        console.log(firstnumstring)
        firstnumLength = firstnumstring.length
        display.innerHTML += "/"
        opstate = false
    }

    if (finish_op) {
        finish_continue = true
    }
}

clear.onclick = () => {
    display.innerHTML = ""
    secondstate = false
    firstnumstring = ""
    firstnum = 0
    secondstring = ""
    second = 0
    opstate = true
    finish = false
    result = 0
    result_old = 0
    blank = true
    op = ""
    finish_continue = false
    finish_op = false
}

eq.onclick = () => {
    console.log(op);
    firstnum = Number(firstnumstring)
    second = Number(secondstring)
    console.log(firstnum);
    console.log(second);
    if (finish_continue) {
        // console.log("1");
        if (op == "+") {
            result = result_old + second
        } else if (op == "-") {
            result = result_old - second
        } else if (op == "*") {
            result = result_old * second
        } else if (op == "/") {
            result = result_old / second
        }
        console.log("1:", result);
    } else {
        // console.log("2");
        if (op == "+") {
            result = firstnum + second
        } else if (op == "-") {
            result = firstnum - second
        } else if (op == "*") {
            result = firstnum * second
        } else if (op == "/") {
            result = firstnum / second
        }
        console.log("2:", result);
    }
    display.innerHTML = result
    secondstate = false
    firstnum = 0
    secondstring = ""
    second = 0
    opstate = true
    firstnumstring = ""
    finish = true
    result_old = result
    result = 0
    finish_op = true
}