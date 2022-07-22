function check_palindroom(){

    //Variables
    var text = document.getElementById("t").value;
    var length =  text.length -1;
    var isPalidroom = true;

    // Check if it is palindroom
    for(var i = 0; i <= length;i++){
        if(text[i] != text[length-i]){
            isPalidroom = false;
        }
    }

    // Print Result
    if(isPalidroom){
        document.getElementById("RW").innerHTML = "It is palidroom!";
    }
    else{
        document.getElementById("RW").innerHTML = "It isn't palidroom!";
    }

}