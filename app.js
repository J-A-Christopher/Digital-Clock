const time = document.getElementById('time');
const status = document .getElementById('status');

function max (amPm) {
    const today = new Date ();
    const hours = today .getHours()
    const minutes = today .getMinutes()
    const seconds = today .getSeconds()
    const milli = today .getMilliseconds()
      
    amPm = hours<12?'AM' : 'PM' 

    time .textContent = `${hours} : ${addZero(minutes)} : ${addZero(seconds)} ${amPm}`

    setTimeout(max,1000)
    
}

function addZero (n) {
    return (parseInt(n,10)< 10?"0" :'') + n
}

max()

