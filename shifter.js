
const Shifter = (
        options = {}
    ) => {
    let _this = {}
    _this.squads = options.squads || ["A", "B", "C"]
    // _this.shifts = options.shifts || []
    _this.shiftLength = options.shiftLength || 2
    _this.leadingShifts = options.leadingShifts || ["C", "A", "B"]
    _this.days = options.days || 31
    _this.tableBody = document.querySelector(".shifterTarget")

    _this.makeCell = (data, target) => {
            let cell = document.createElement("td")
            cell.innerHTML = data
            target.appendChild(cell)
        }

    _this.makeRow = ( data, target, rowID = 0) => {
        let row = document.createElement("tr")
        _this.makeCell(rowID, row)
        data.forEach(item => {
            _this.makeCell(item, row)
        })
        target.appendChild(row)
        
    }

    _this.createShifts = () => {
        let shifts = []
        for (var i = 1; i <= _this.days; i++) {

            shifts.push([..._this.squads])
            if (i % _this.shiftLength == 0) {
                let popped = _this.squads.shift()
            _this.squads.push(popped)
            }
        }
        return shifts
    }

    _this.addLeadingShifts = (shift, length = 0) => {
        if (length == 0) {return}
        for (var i = 1; i <= length; i++) {
            _this.shifts.push([...shift])
        }
        _this.squads = shift
        let popped = _this.squads.shift()
            _this.squads.push(popped)
        _this.days -= length
    }

    _this.makeTable = (data) => {
        data.forEach((item, index) => {
            _this.makeRow(item, _this.tableBody, index+1)
        })
    }

// addLeadingShifts(leadingShifts, 3)
// createShifts()
// makeTable(shifts)

return _this
}