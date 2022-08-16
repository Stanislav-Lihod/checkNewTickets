const btn = document.querySelector('.btn.btn-danger') // Выбор кнопки на которую кликать
let counter = 0 // Счетчик для проверки наличия дорогих билетов

const checkFreeTickets = () =>{
  const alertInfo = document.querySelector('.alert-info.ng-hide') // Проверка скрыто ли уведомление об отсутствии билетов
  const tickets = document.querySelectorAll('tr.ng-scope') // Массив билетов на эту дату
  if (alertInfo) { // Если уведомления нет то
    if (tickets.length > 0) { // Проверка на наличие билетов в массиве
      tickets.forEach(ticket=>{
        const column = ticket.querySelectorAll('td.ng-binding') // Выбираем все колонки в каждом билете
        const price = column[column.length-1] // Вбираем последнюю колонку с ценой
  
//Ниже делаем проверку на стоимость билета

        if (price.textContent.includes('35')) { // Укажите стоимость дешевого билета на данный момент
          console.log('Найден билет за 35, хватай его')
          let audio = new Audio();
          audio.src = 'https://bigsoundbank.com/UPLOAD/wav/2374.wav';
          audio.autoplay = true;
          clearInterval(setIntervalId) // Если билет дешевый скрипт остановится
        } else if (counter === 0){ // Если билет дорогой то один раз придет уведомление но скрипт продолжит кликать по кнопке.
          counter = 1
          console.log('Найден дорогой билет')
          let audio = new Audio();
          audio.src = 'https://bigsoundbank.com/UPLOAD/wav/0234.wav';
          audio.autoplay = true;
        } else{
          btn.click()
          console.log('Я работаю после нахождения билета')
        }  
      })    
    }
  }else{ // Если билеты разобрали то таблица очистится и скрипт вернется в начальную форму обнулив счетчик дорогих билетов.
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
