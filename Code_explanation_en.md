## Code explanation (JavaScript)
Before explanation. I'm not mastered JavaScript yet, so code may bad or have too much variable. And grammar might be wrong because I'm not good at grammar soory about that again

Language: EN [TH](Code_explanation_th.md)

### Line 1 - 16
```
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
```
This 16 lines get elements from index.html for changing object innerHTML or CSS

### Line 18 - 28
```
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
```
<code>secondstate</code> variable is for knowing which position are program in, because in this program there are 3 main position:
1. First Number
2. Operator
3. Second Number

<code>firstnumstring</code> and <code>secondstring</code> is a string which recieved from pressing number then I change those string to number for calculating later

<code>op</code> is a variable for getting operator

<code>opstate</code> is a variable for knowing that is there any operator. (If there are operator opstate will be true. Because this program calculate number with only 3 position)

<code>finish</code> variable is a variable to know that did we pressed equal yet.

<code>result</code> and <code>result_old</code> is a <code>result</code> variable but <code>result_old</code> is use when we already calculate and we want to calculate more.

<code>blank</code> is a variable to know that if display is blank.

### Line 31 - 179
```
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
```
I'll show case only one function because those are the same.

<code>blank = false</code> is for telling program that display is not blank anymore

```
if (finish == true) {
        display.innerHTML = ""
}
```

This if statement is for knowing that did we press equal button yet? if yes then clear display

<code>finish = false</code> is to not loop function

```
if (!secondstate) {
    firstnumstring += "0"
    display.innerHTML += 0
} else {
    secondstring += "0"
    display.innerHTML += 0
}
```

If <code>secondstate</code> isn't true then add <code>firstnumstring</code> a number (In this case it's 0) and update display. But if <code>secondstate</code> is false then add to <code>secondstring</code>

### Line 181 - 183
```
let finish_continue = false
let finish_op = false
let dis = display.innerHTML
```
<code>finish_continue</code> is for knowing did we press equal yet but this is for to calculate more

<code>finish_op</code> is paired with <code>finish_continue</code> that if it's true then <code>finish_continue</code> is true

<code>dis</code> is just a variable to get text from display as string

### Line 185 - 247
```
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
```

This is a function for operator. (In this example is divide)

<code>op = "/"</code> is for telling program it is divide operator now

```
if (opstate && blank === false) {
        secondstate = true
        firstnum = Number(firstnumstring)
        console.log(firstnumstring)
        firstnumLength = firstnumstring.length
        display.innerHTML += "/"
        opstate = false
    }
```

If opstate is true (<code>opstate</code> is false after any operator and true by default) and <code>blank</code> is false (so program could add operator in) then make <code>secondstate</code> true because operator in this program is meant to be pressed after number and make <code>firstnumstring</code> to Number type and put it in <code>firstnum</code> then <code>console.log()</code> out to check what <code>firstnumstring</code> is <code>firstnumstring</code> and <code>firstnumLength</code> is to get a length of <code>firstnum</code>, then I add display a "/" to make users know it's a divide then update opstate to false. So no duplicate operator

### Line 249 - 264
```
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
```

This is a function to clear everything to default nothing special.

### Line 266 -  308
```
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
```

This is maybe a hardest part for me. So first <code>console.log()</code> out op to know what operator is then make all string to number then <code>console.log()</code> to check it again

Then, if <code>finish_continue</code> is true then calculate from old result if not then calculate a new one

After that, update display to result. reset everything except display then make <code>result_old</code> to result

---

Thank you for reading all my explanation. If I explain anything wrong I'm terribly sorry. And you could submit issue.