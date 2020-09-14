function buildCards() {
    let allInstruments = initializeInstrumentsArray();
    var textCenter = document.getElementById("container");
    var html="";
    for (var i = 0; i < allInstruments.length; i++) {
        if (i%3==0)
            html += "<div class='row pt-4'>";
        var currentInstrument = allInstruments[i];
        html += "<div class='col-md-4'><div class='card mb-4 box-shadow' id=" + currentInstrument.name + "><div class='card-header'>";
        html += "<h4 class='my-0 font-weight-normal'>" + currentInstrument.name + "</h4></div>";
        html += "<div class='card-body'><img src=" + currentInstrument.imagePath + " class='img-fluid' alt='Responsive image'>";
        html += "<h1><b>" + currentInstrument.price + "</b><small class='text-muted'>ILS </small></h1>";
        html += "<ul class='list-unstyled mt-3 mb-4'><li>" + currentInstrument.description + "</li>";
        html += "</ul> <button type='button' class='btn btn-lg btn-block btn-primary'>add to chart</button></div></div></div>";
        // close every 3third card
        if (i%3==2)
            html += "</div>"
    }
    textCenter.innerHTML = html;
    $(".img-fluid").css({"height":200,"width":200});

}

