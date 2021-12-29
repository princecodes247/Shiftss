
const Shifter = () => {
    this.squads = ["A", "B", "C"]
    this.shifts = []
    this.shiftLength = 2
    this.leadingShifts = ["C", "A", "B"]
    this.days = 31

    this.makeCell = (data, target) => {
            let cell = document.createElement("td")
            cell.innerHTML = data
            target.appendChild(cell)
        }

    this.makeRow = ( data, target, rowID = 0) => {
        let row = document.createElement("tr")
        makeCell(rowID, row)
        data.forEach(item => {
            makeCell(item, row)
        })
        target.appendChild(row)
        
    }

    this.createShifts = () => {
        for (var i = 1; i <= days; i++) {

            shifts.push([...squads])
            if (i % shiftLength == 0) {
                let popped = squads.shift()
            squads.push(popped)
            }
        }
    }

    this.addLeadingShifts = (shift, length = 0) => {
        if (length == 0) {return}
        for (var i = 1; i <= length; i++) {
            shifts.push([...shift])
        }
        squads = shift
        let popped = squads.shift()
            squads.push(popped)
        days -= length
    }

    this.makeTable = (data) => {
        data.forEach((item, index) => {
            makeRow(item, result, index+1)
        })
    }

// addLeadingShifts(leadingShifts, 3)
// createShifts()
// makeTable(shifts)

return this
}