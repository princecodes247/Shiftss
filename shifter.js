let result = document.querySelector("#result")
result.classList.toggle("hidden")
let squads = ["A", "B", "F"]
let shifts = []
let shiftLength = 2
let leadingShifts = ["F", "A", "B"]
let days = 31

let makeCell = (data, target) => {
    let cell = document.createElement("td")
    cell.innerHTML = data
    target.appendChild(cell)
}

let makeRow = ( data, target, rowID = 0) => {
    let row = document.createElement("tr")
    makeCell(rowID, row)
    data.forEach(item => {
        makeCell(item, row)
    })
    target.appendChild(row)
    
}

let createShifts = () => {
    for (var i = 1; i <= days; i++) {

        shifts.push([...squads])
        if (i % shiftLength == 0) {
            let popped = squads.shift()
        squads.push(popped)
        }
    }
}
let addLeadingShifts = (shift, length = 0) => {
    if (length == 0) {return}
    for (var i = 1; i <= length; i++) {
        shifts.push([...shift])
    }
    squads = shift
    let popped = squads.shift()
        squads.push(popped)
    days -= length
}

let makeTable = (data) => {
    data.forEach((item, index) => {
        makeRow(item, result, index+1)
    })
}

// addLeadingShifts(leadingShifts, 3)
// createShifts()
// makeTable(shifts)