
function caculator() {
    var num = document.getElementById("calculate").value
    if(num !== '' ){
        const cal = num
        document.getElementById("calculate").value = eval(cal);
    }else{
        document.getElementById("error").style.display = 'block'
    }
    
}

function clickMe(a) {
    document.getElementById("calculate").value += a
}
