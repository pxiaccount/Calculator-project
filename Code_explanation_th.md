## อธิบายโค้ดส่วน JavaScript
ก่อนที่จะอธิบายผมขอออกตัวก่อนนะครับว่าอาจจะมีบางส่วนที่เกินความจำเป็นหรือผิด เพราะผมยังไม่เก่งมากในด้านนี้ ขอโทษด้วยนะครับ

ภาษา: [EN](Code_explanation_en.md) TH


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
โค้ด 16 บรรทัดนี้คือการดึง element มาจาก html เพื่อนำมาใช้ในส่วนต่างๆ

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
<code>secondstate</code>คือตัวแปรเพื่อรู้ว่าอยู่ในตำแหน่งไหนเพราะโปรแกรมนี้จะมีตัวแปรอยู่ 3 ส่วน
1. ตัวเลขแรก
2. เครื่องหมายดำเนินการทางคณิตศาสตร์
3. ตัวเลขสอง

<code>firstnumstring</code> and <code>secondstring</code> คือตัวแปรประเภท string ที่เก็บข้อมูลมาจากการกดตัวเลข

<code>op</code> คือ ตัวแปรรับค่าเครื่องหมาย

<code>opstate</code> คือตัวแปรเพื่อตรวจว่ามีตัวแปรอะไรอยู่ไหม (โดยปกติ <code>opstate</code> จะเป็น true แต่ถ้ากดปุ่มเครื่องหมาย จะเป็น false)

<code>finish</code> คือตัวแปรเพื่อรู้ว่ากดเท่ากับไปหรือยัง เพื่อนำมาเช็คในส่วนอื่นๆได้

<code>result</code> and <code>result_old</code> คือผลรวม แต่ <code>result_old</code> คือผลรวมเก่า เพื่อใช้ในกรณีที่กดเครื่องหมายต่อจากเดิม

<code>blank</code> คือตัวแปรเพื่อเช็คว่าจอว่างไหม

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
ขออนุญาตแสดงแค่ฟังก์ชั่นเดียวนะครับ เพราะมันเหมือนกันหมดแค่เปลี่ยนตัวเลข

<code>blank = false</code> คือการบอกว่าจอแสดงผลตอนนี้ไม่ว่างแล้ว

```
if (finish == true) {
        display.innerHTML = ""
}
```

โค้ดอันนี้คือเพื่อเช็คว่าของเดิมมันมีตัวเลขอยู่แล้วไหม ถ้ามีให้เคลียร์จอแล้วเริ่มเลขใหม่

<code>finish = false</code> คือการให้ค่าเป็น false เพื่อจะได้ไม่ loop กับ if statement ข้างบน

```
if (!secondstate) {
    firstnumstring += "0"
    display.innerHTML += 0
} else {
    secondstring += "0"
    display.innerHTML += 0
}
```

ถ้า <code>secondstate</code> ไม่ใช่ true ให้เพิ่มตัวเลขไปใน <code>firstnumstring</code> แต่ถ้า <code>secondstate</code> เป็น true ให้เพิ่มไปใน <code>secondstring </code> แทน

### Line 181 - 183
```
let finish_continue = false
let finish_op = false
let dis = display.innerHTML
```
<code>finish_continue</code> คือตัวแปรเพื่อเช็คว่ากดเท่ากับไปหรือยัง

<code>finish_op</code> is คือตัวแปรคู่กับ <code>finish_continue</code> ถ้า true ก็ true ทั้งคู่

<code>dis</code> คือตัวแปรเก็บข้อมูลจากจอแสดงผลเป็น string

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

อันนี้จะเป็นฟังค์ชั่นสำหรับเครื่องหมายดำเนินการทางคณิตศาสตร์นะครับ

<code>op = "/"</code> คือการบอกว่ากำลังใช้เครื่องหมายอะไรอยู่ (ในตัวอย่างนี้เป็นหาร)

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

ถ้า opstate เป็น true และ blank เป็น galse ให้กำหนดค่า secondstate เป็น true เพื่อจะได้รู้ว่าอยู่ตำแหน่งสองแล้ว จากนั้นแปลงค่า firstnumstring เป็นตัวเลขแล้วเก็บใส่ตัวแปร firstnumLength คือตัวแปรเก็บค่าความยาว จากนั้นอัพเดตหน้าจอแล้วเปลี่ยน opstate เป็น false

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

ฟังก์ชั่นนี้แค่เคลียร์ทุกอย่างให้กลับไปเป็นเหมือนเดิมเฉยๆครับ

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

ผมจะ <code>console.log()</code> op เช็คเครื่องหมาย แล้วถ้า <code>finish_continue</code> เป็น true ให้คำนวณจากผลเก่าแต่ถ้าไม่ให้คำนวณใหม่เลย จากนั้นอัพเดตจอแสดงผลแล้วรีทุกอย่างทิ้งยกเว้นจอแสดงผล แล้วเอาค่า <code>result</code> ไปเก็บใน <code>result_old</code>

---

ขอบคุณสำหรับการอ่านนะครับ ถ้ามีตรงไหนผิดพลาด หรือมีการใช้คำพูดที่ไม่เหมาะสม ขออภัยจริงๆนะครับ และถ้าเจอข้อผิดพลาดอะไรในโค้ดก็สามารถ submit issue มาได้นะครับ ขอบคุณครับ