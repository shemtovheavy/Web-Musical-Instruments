function hideUnFilttered(filtered) {
    for (var i = 0; i < allInstruments.length; i++) {
        var currentInstrument = allInstruments[i].name;
        if(filtered!= undefined)
        {
            if (!filtered.includes(allInstruments[i]))
            {
                
                document.getElementById(currentInstrument).style.display = "none";
            }
            else
            {
                document.getElementById(currentInstrument).style.display = "";
            }

        }
    }
}

