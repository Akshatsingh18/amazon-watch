var ima = document.getElementById('image');
var mai = document.getElementById('main');
var button1 = document.getElementById('b1');
var button2 = document.getElementById('b2');
var button3 = document.getElementById('b3');
var button4 = document.getElementById('b4');
var button5 = document.getElementById('b5');
var beat = document.getElementById('heart')
var order = document.getElementById('buy')
var t = document.getElementById('tim')
var h = document.getElementById('hear')
var clc =document.getElementById('clock')

//ADDING COLOR BUTTON
button1.addEventListener('click',function()
{
    ima.src = '/iOeUBV7.png' ;
})

button2.addEventListener('click',function()
{
    ima.src = '/PTgQlim.png' ;
})

button3.addEventListener('click',function()
{
    ima.src = '/Mplj1YR.png' ;
})

button4.addEventListener('click',function()
{
    ima.src = '/xSIK4M8.png' ;
})

button5.addEventListener('click',function()
{
    ima.src = '/Zygu7I3.png' ;
})


//ADDING BUY BUTTON
order.addEventListener('click',function()
{
    alert('We have recieved your order');
})


// ADDING DIGITAL CLOCK
function currenttime()
{
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var secounds = date.getSeconds()
    var session = "Am";

    if(hour == 0)
    {
      hour = 12;
    }
    
    if(hour >12)
    {
      hour = hour - 12;
      session = "Pm"
    }

    hour = ( hour <10 ) ? "0" + hour : hour;
    minutes = (minutes <10) ? "0" + minutes : minutes;
    secounds = (secounds <10) ? "0" + secounds : secounds;

    var time = hour + " : " + minutes + " : " + secounds + " " + session;
    document.getElementById('clock').innerText = time;
    
    setTimeout(currenttime,1000);
}
currenttime();
// button for heartbeat
h.addEventListener('click',function()
{
    if (beat.style.display == "block")
    {
      console.log("working")
    }
    else
    {
      beat.style.display = "block";
      clc.style.display = "none";
    }
})
t.addEventListener('click',function()
{
    if (clc.style.display == "none")
    {
      clc.style.display = "block";
      beat.style.display = "none"
    }
})


