function onCheckBoxChecked() {
    var filtered = allInstruments;
    var checkBoxes = document.querySelectorAll(".checkbox");
    checkBoxes.forEach((item, index) => {
        if (item.checked && index == 0) {
            filtered = filtered.filter(function (instrument) {
                return instrument.price <= 500;
            });
        }
        if (item.checked && index == 1) {
            filtered = filtered.filter(function (instrument) {
                return (instrument.price > 500 || instrument.price <= 1000);
            });
        }
        if (item.checked && index == 2) {
            filtered = filtered.filter(function (instrument) {
                return (instrument.price > 1000 || instrument.price <= 1500);
            });
        }
        if (item.checked && index == 3) {
            filtered = filtered.filter(function (instrument) {
                return (instrument.price > 1500 || instrument.price < 2000);
            });
        }
        if (item.checked && index == 4) {
            filtered = filtered.filter(function (instrument) {
                return instrument.price >= 2000;
            });
        }
    });
    hideUnFilttered(filtered);
}
