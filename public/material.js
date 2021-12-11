document.addEventListener('DOMContentLoaded', ()=>{function dateAndTime() {
    let dateElems = document.querySelector('.datepicker');
    let selectElems = document.querySelectorAll('select');
    let timeElems = document.querySelectorAll('.timepicker');
    let time = M.Timepicker.init(timeElems, {});
    let date = M.Datepicker.init(dateElems, {onClose: ()=> {
      dateElems.blur();
      let x= setTimeout(()=> {
        dateElems.focus();
      }, 100)
      console.log(dateElems.value);
      console.log("guu");
    }});
    let select = M.FormSelect.init(selectElems, {});
    
  }

let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener("click",()=>setTimeout(dateAndTime, 2000))
});


// Dianelopez168!!!