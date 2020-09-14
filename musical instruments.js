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

  function initailSite()
  {
    buildCards();
    injectOptions();

  }