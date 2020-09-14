function injectOptions() {
    var select = document.getElementById('selectpicker');
    allTypes = createOptions();
    for (var i = 0; i < allTypes.length; i++) {
        var opt = document.createElement('option');
        var type = allTypes[i];
        opt.value = type;
        opt.innerHTML = type;
        select.appendChild(opt);
    }
}

