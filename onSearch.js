function onSearch() {
    var input, filter, name, i;
    input = document.getElementById("search").value;
    console.log(input);
    filter = input.toUpperCase();
    console.log(filter);
    console.log(allInstruments);
    for (i = 0; i < allInstruments.length; i++) {
        name = allInstruments[i].name;
        console.log(name);
        console.log(name.toUpperCase().indexOf(filter));
        if (name.toUpperCase().indexOf(filter) > -1) {
            document.getElementById(name).style.display = "";
        } else {
            document.getElementById(name).style.display = "none";
        }
    }
}
