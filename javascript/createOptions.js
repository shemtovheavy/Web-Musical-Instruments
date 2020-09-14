function createOptions() {
    let allTypes = new Array();
    for (var i = 0; i < allInstruments.length; i++) {
        var currentType = allInstruments[i].instrumentType.name;
        if (!allTypes.includes(currentType)) {
            allTypes.push(currentType);
        }
    }
    return allTypes;
}
