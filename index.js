const btn = document.querySelector('.btn.btn-danger')
let counter = 0

const checkFreeTickets = () =>{
  const alertInfo = document.querySelector('.alert-info.ng-hide')
  const tickets = document.querySelectorAll('tr.ng-scope')
  if (alertInfo) {

    if (tickets.length > 0) {
      tickets.forEach(ticket=>{
        const column = ticket.querySelectorAll('td.ng-binding')
        const price = column[column.length-1]
  
        if (price.textContent.includes('35')) {
          console.log('Найден билет за 35, хватай его')
          let audio = new Audio();
          audio.src = 'https://bigsoundbank.com/UPLOAD/wav/2374.wav';
          audio.autoplay = true;
          clearInterval(setIntervalId)
        } else if (counter === 0){
          counter = 1
          console.log('Найден дорогой билет')
          let audio = new Audio();
          audio.src = 'https://bigsoundbank.com/UPLOAD/wav/0234.wav';
          audio.autoplay = true;
        } else{
          btn.click()
          console.log('Я работаю после находки билета')
        }  
      })    
    }
  }else{
    const table = document.querySelector('tbody.table-hover')
    tickets.forEach(ticket=>{
      ticket && table.removeChild(ticket)
    })
    counter = 0
    btn.click()
    console.log('Я работаю')
  }
}

let setIntervalId = setInterval(checkFreeTickets, 5000)
