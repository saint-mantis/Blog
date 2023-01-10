
var count = 0;
document.getElementById("mb-navbox").style.visibility = "hidden";
document.getElementById("mb-navbox").style.width = "0px";
document.getElementById("mb-navbox").style.height = "0px";


function showMenu() {

    if (count == 0){
        
        document.getElementById("mb-navbox").style.visibility = "visible";
        document.getElementById("mb-navbox").style.width = "100%";
        document.getElementById("mb-navbox").style.height = "300px";
        document.getElementById("mb-navbox").style.transition = "height 0.5s";

        count = 1;
    } 
    else {
        if(document.getElementById("mb-navbox").style.visibility == "visible"){
            document.getElementById("mb-navbox").style.visibility = "hidden";
            document.getElementById("mb-navbox").style.width = "0px";
            document.getElementById("mb-navbox").style.height = "0px";
            document.getElementById("mb-navbox").style.transition = "height 0.5s";
        }
        else {
            document.getElementById("mb-navbox").style.visibility = "visible";
            document.getElementById("mb-navbox").style.width = "100%";
            document.getElementById("mb-navbox").style.height = "300px";
            document.getElementById("mb-navbox").style.transition = "height 0.5s";

        }
    }

    }




