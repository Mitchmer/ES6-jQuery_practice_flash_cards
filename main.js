//Stores the cards
let cardArr = [
  { 
  front: '=>',
  back: 'Allows for easier reading for functions, and replaces generic functions',
  },
  {
  front: 'const',
  back: 'Subsitute for "function"', 
  },
  {
  front: 'ES6',
  back: 'Candy? Or sugar? Or something'
  },
  {
  front: 'JavaScript',
  back: 'Confusing AF',
  },
  {
  front: 'Todd Howard',
  back: 'It just works.'
  },
];

let cardSide = true;
let cardShow;
let newCard;
let cardId;
let arrId;
let delArrId;

$(document).ready( () => {

  //Removes all cards and irrelevant buttons
  const clearPage = () => {
    $('.grid').remove()
    $('.container').append(`<div class="grid"></div>`)
  }

  const delCard = (e) => {
    let delId = e.target.id
    let delArrId = delId.split('').pop()
    cardArr.splice(delArrId, 1)
    $(`#card-cont-${delArrId}`).remove()
    viewCards()
  }
  
  //Work in Progress, Ignore
  // const addCard = () => {
  //   clearPage()
  //   $('.grid').append(`
  //   <div class="card-form">
  //     <form>
  //   </div>
  //   `)
  // }

  //Switches back to home view
  const studyTime = () => {
    clearPage()
    $('.grid').append(`
      <div id="card-cont">
        <div id="card">
          <h1 id="card-side">Click The Button Do It Do It Do It Do It Do It</h1>
        </div>
        <button id="card-gen">Next Card</button>
      </div>
    `)
  }

  //Shows all cards & options to edit/delete with unique id's
  const viewCards = () => {
    clearPage()
    arrId = 0
    for ( c of cardArr ) {
      console.log(cardArr)
      $('.grid').append(`
        <div class="card-cont" id="card-cont-${arrId}">
          <h1>${c.front}</h1>
          <button id="card-edit">edit</button>
          <button class="card-del" id="card-${arrId}">delete</button>
        </div>
      `)
      arrId++;
    }
  }

  //Shows a random card
  const pickCard = () => {
    console.log('yay')
    cardId = Math.floor(Math.random() * cardArr.length)
    newCard = cardArr[cardId].front;
    $('#card-side').remove();
    cardShow = `<h1 id="card-side">${newCard}</h1>`;
    $('#card').append(cardShow)
  }

  //Switches current card from front to back
  const toggleCard = (id) => {
    $('#card-side').remove()
    if (cardSide) {
      cardShow = `<h1 id="card-side">${cardArr[id].front}</h1>`
    } else {
      cardShow = `<h1 id="card-side">${cardArr[id].back}</h1>`
    }
    cardSide = !cardSide
    $('#card').append(cardShow)
  }

  //Event listeners
  $(document).on('click', '#card-gen', () => {
    pickCard();
  });

  $(document).on('click', '#card', () => {
    toggleCard(cardId);
  });

  $('#card-view').on('click', () => {
    viewCards();
  });

  $('#nav-home').on('click', () => {
    studyTime();
  });

  //Where I'm having a problem retrieving the id of the specific delete button created in the function viewCards
  $(document).on('click', '.card-del', (e) => {
    console.log('yay')
    delCard(e)  
  });

  
})