function onSearch() {
    var input, filter, name, i;
    input = document.getElementById("search").value;
    filter = input.toUpperCase();
    for (i = 0; i < allInstruments.length; i++) {
        name = allInstruments[i].name;
        if (name.toUpperCase().indexOf(filter) > -1) {
            document.getElementById(name).style.display = "";
        } else {
            document.getElementById(name).style.display = "none";
        }
    }
}
