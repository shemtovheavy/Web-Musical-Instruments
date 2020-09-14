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

function injectOptions()
{
    var select = document.getElementById('selectpicker');
    let allTypes = createOptions();
    console.log(allTypes);
    for (var i = 0; i < allTypes.length; i++) {
        var opt = document.createElement('option');
        var type = allTypes[i];
        console.log(type);
        opt.value = type;
        opt.innerHTML = type;
        console.log(opt);
        console.log(select);
        select.appendChild(opt);
    }
}
