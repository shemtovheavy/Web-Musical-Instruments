function hideUnFilttered() {
    var filtered = filterType();
    console.log(filtered);
    for (var i = 0; i < allInstruments.length; i++) {
        var currentInstrument = allInstruments[i].name;
        console.log(currentInstrument);
        if(filtered!= undefined)
        {
            if (!filtered.includes(allInstruments[i]))
            {
                document.getElementById(currentInstrument).style.display = "none";
                console.log("not include")
            }
            else
            {
                document.getElementById(currentInstrument).style.display = "";
                console.log("include")
            }

        }
    }
}

