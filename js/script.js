function toggleLogo(color){

    var logo = document.getElementById("logo");

    if(color == 'gray'){
        logo.src = "/img/logoaltgray.png";
    } else {
        logo.src = "/img/logoalt.png";
    }
}

function changeImg(_src){
    var img = document.getElementById("bigscreen");
	
	img.src = _src;
}