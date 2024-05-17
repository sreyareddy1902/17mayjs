
function fun()
{
    let timeZone=new Date();
    let day=timeZone.getDay()
    switch(day)
    {
        case 0:day='Sunday'
                break
        case 1:day='Monday'
                break
        case 2:day='Tuesday'
                break
        case 3:day='Wednesday'
                break
        case 4:day='Thursday'
                break
        case 5:day='Friday'
                break
        case 6:day='Saturday'
                break
    }

    document.getElementById("b1").innerHTML=day

    let date=timeZone.getDate()
    let month=timeZone.getMonth()
    let year=timeZone.getFullYear()

    switch(month)
    {
        case 0:month='January'
                break
        case 1:month='February'
                break
        case 2:month='March'
                break
        case 3:month='April'
            break
        case 4:month='May'
            break
        case 5:month='June'
            break
        case 6:month='July'
            break
        case 7:month='August'
            break
        case 8:month='September'
                break
        case 9:month='October'
                break
        case 10:month='November'
                break
        case 11:month='December'
                break
    }

    let z=date+"-"+month+"-"+year
    document.getElementById("b2").innerHTML=z

    let hours=timeZone.getHours()
    let minutes=timeZone.getMinutes()
    let seconds=timeZone.getSeconds()

    let ampm=''
    if(hours>12)
    {
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }

    let x=hours+" :"+minutes+":"+seconds +"  "+ampm
    document.getElementById("b3").innerHTML=x

    setTimeout(function(){fun(),1000})

    if(day=='Sunday')
    {
        document.getElementById("a").style.backgroundColor="yellow"
    }
    if(day=='Monday')
    {
        document.getElementById("a").style.backgroundColor="red"
    }
    if(day=='Tuesday')
    {
        document.getElementById("a").style.backgroundColor="pink"
    }
    if(day=='Wednesday')
    {
        document.getElementById("a").style.backgroundColor="orange"
    }
    if(day=='Thursday')
    {
        document.getElementById("a").style.backgroundColor="grey"
    }
    if(day=='Friday')
    {
        document.getElementById("a").style.backgroundColor="greenyellow"
    }
    if(day=='Saturday')
    {
        document.getElementById("a").style.backgroundColor="blue"
    }
}