function filterType()
{
    var select = document.getElementById('selectpicker');
    var selectedValue = select.value;
    if(selectedValue)
    {
        var filtered = allInstruments.filter(function(instrument)
        {
            return instrument.instrumentType.name == selectedValue;
        });
        return filtered;
    }
    return undefined;
}

