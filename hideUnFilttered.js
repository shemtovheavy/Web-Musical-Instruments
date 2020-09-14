function hideUnFilttered() {
    var filtered = filterType();
    for (var i = 0; i < allInstruments.length; i++) {
        var currentInstrument = allInstruments[i].name;
        if((currentInstrument!= undefined)&(!filtered.includes(currentInstrument)))
        {

        }
    }
    /*
    console.log(filtered);
    for (var i = 0; i < filtered.length; i++)
    {

        $( "div" ).filter(document.getElementById(filtered[i].name));
    }
    */
}

