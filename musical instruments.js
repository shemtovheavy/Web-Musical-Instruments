let allInstruments;
var fluteInstrument = {
    description: "nice flute",
    id: 4,  
    imagePath: "pictures/flute.jpg",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "wind"},
    name: "Flute",
    price: 50,
    typeID: 1
  }
  var harmonicaInstrument = {
    description: "nice harmonica",
    id: 4,  
    imagePath: "pictures/harmonica.jpg",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "wind"},
    name: "Harmonica",
    price: 35,
    typeID: 1
  }
  var trumpetInstrument = {
    description: "long trumpet",
    id: 4,  
    imagePath: "pictures/trumpet.jpg",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "wind"},
    name: "Trumpet",
    price: 1500,
    typeID: 1
  }

  function initializeInstrumentsArray()
  {
      allInstruments = new Array();
      allInstruments.push(fluteInstrument);
      allInstruments.push(harmonicaInstrument);
      allInstruments.push(trumpetInstrument);
      return allInstruments;
  }
  //buildCards();
  
  //let script = document.createElement('script');

// can load any script, from any domain
//script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
//document.head.append(script);

//script.onload = buildCards();
  //document.getElementById("textCenter").addEventListener("load", buildCards);