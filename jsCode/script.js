times = Array.from(document.querySelectorAll('.board > *'))

let mass = {

}

times.forEach(element => {
    list = Array.from(element.querySelectorAll('.number')).map(val=>val.textContent)
    mass[element.classList.value] = list.join('')
});

function TransferToSeconds(h, m, s) {
    transSeconds = Number(h) * 3600 + Number(m)* 60 + Number(s)
    
    return transSeconds
}

totalTime = TransferToSeconds(mass['hours'], mass['minutes'], mass['seconds'])

timer = setInterval(()=>{
    totalTime-=1
    newHours = String(Math.floor(totalTime / 3600))
    newMinutes = String(Math.floor((totalTime % 3600) / 60)) 
    newSeconds = String(Math.floor(totalTime % 60))
    resH = '0'.repeat(mass['hours'].length - newHours.length) + newHours
    resM = '0'.repeat(mass['minutes'].length - newMinutes.length) + newMinutes
    resS = '0'.repeat(mass['seconds'].length - newSeconds.length) + newSeconds
    newTime = [resH, resM, resS]
    
    times.forEach(elem=>{
        index = times.indexOf(elem)
        list = Array.from(elem.querySelectorAll('.number'))
        list.forEach(value=>{
            value.textContent = newTime[index][list.indexOf(value)]
        })
    })

}, 1000)
