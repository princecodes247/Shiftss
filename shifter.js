let tbody = document.querySelector("tbody")

let squads = ["A", "B", "F"]
let shifts = []
tbody.innerHTML = "hi"

let days = 31
tbody.innerHTML = "hi"
let makeCell = (data, target) => {
    let cell = document.createElement("td")
    cell.innerHTML = data
    target.appendChild(cell)
}

let makeRow = ( data, target ) => {
    let row = document.createElement("tr")
    data.forEach(item => {
        makeCell(item, row)
    })
    target.appendChild(row)
    
}
for (var i = 0; i < days; i++) {
    shifts.push([...squads])
    let popped = squads.shift()
    squads.push(popped)
}
squads.push("popped")

makeRow(shifts[0], tbody)
makeRow(shifts[1], tbody)
makeRow(shifts[2], tbody)
makeRow(shifts[3], tbody)

