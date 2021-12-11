let result = document.querySelector(".result");
let shiftTarget = result.querySelector("tbody");
let groups = ["A", "B", "C"]
let leadingShift = ["B", "C", "A"]
let leadingShiftDays = 2
let shiftLength = 3
let duration = 31
let exceptions = [2,6]

let heading = document.querySelector("#heading");
let subheading = document.querySelector("#subheading");
let headingTarget = document.querySelector("#headingTarget");
let subheadingTarget = document.querySelector("#subheadingTarget");
let groupsNum = document.querySelector("#groupsNum");
let groupName = document.querySelectorAll("#groupName");
let monthsList = document.querySelector("#monthsList");
let yearsList = document.querySelector("#yearsList");
let isLeadingShift = document.querySelector("#isLeadingShift");
let leadingShiftLength = document.querySelector("#leadingShiftDays");
heading.addEventListener("change", ()=> {
    headingTarget.innerText = heading.value
})
subheading.addEventListener("change", e => {
    subheadingTarget.innerText = e.target.value
})
const generateRow = (day) => {
    let row = document.createElement("tr")
    let cell = document.createElement("td")
    cell.innerText = day
    row.appendChild(cell)
    for (let first = 0; first < groups.length; first++) {
        let shiftCell =  document.createElement("td")
        shiftCell.innerText = groups[first];
        if (exceptions.includes(day)) {
            shiftCell.innerText = "_";
        }
        row.appendChild(shiftCell)
    }
    // row.appendChild(cell)
    // row.appendChild(cell)
    // row.appendChild(cell)
    shiftTarget.appendChild(row)
}

const makeTable = () => {
    let day = 1
    if (leadingShiftDays > 0) {
        groups = leadingShift
        for (let start = 0; start < leadingShiftDays; start++) {
            generateRow(day)
            day += 1
            
        }
        let moved = groups.shift()
        groups.push(moved)

    }
    for (let start = 1; start <= duration-leadingShiftDays; start++) {
        generateRow(day)
        day += 1
       
        if (start % shiftLength == 0) {
            let moved = groups.shift()
            groups.push(moved)
        }
        
    }
}



// makeTable()

