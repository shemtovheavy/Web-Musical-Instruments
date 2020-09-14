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
    instrumentType: {id: 1, name: "small wind"},
    name: "Harmonica",
    price: 35,
    typeID: 1
  }
  var trumpetInstrument = {
    description: "long trumpet",
    id: 4,  
    imagePath: "pictures/trumpet.jpg",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "long wind"},
    name: "Trumpet",
    price: 1500,
    typeID: 1
  }
  var tromboneInstrument = {
    description: "small trombone",
    id: 4,  
    imagePath: "pictures/trombone.png",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "long wind"},
    name: "Trombone",
    price: 2400,
    typeID: 1
  }
  var clarinetInstrument = {
    description: "loud clarinet",
    id: 4,  
    imagePath: "pictures/clarinet.gif",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "wood wind"},
    name: "clarinet",
    price: 1400,
    typeID: 1
  }
  var violinInstrument = {
    description: "small violin",
    id: 4,  
    imagePath: "pictures/violin.jpg",
    instrumentOrders: null,
    instrumentType: {id: 1, name: "bow"},
    name: "Violin",
    price: 2300,
    typeID: 1
  }

  function initializeInstrumentsArray()
  {
      allInstruments = new Array();
      allInstruments.push(fluteInstrument);
      allInstruments.push(harmonicaInstrument);
      allInstruments.push(trumpetInstrument);
      allInstruments.push(tromboneInstrument)
      allInstruments.push(clarinetInstrument)
      allInstruments.push(violinInstrument)
      return allInstruments;
  }

  function initailSite()
  {
    buildCards();
    injectOptions();

  }