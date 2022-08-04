let value = document.querySelector(".progress-bar");
let progress = document.querySelector(".progress");

let start = 0,
    end = 85,
    speed =10;
let incr = setInterval(() => {
    start++;
    // console.log(start);
    value.innerHTML = start;
    progress.style.background = `conic-gradient(red ${start * 3.6}deg,rgba(141, 141, 147, 0.911) 0deg)`
    if(start==end)
    {
        clearInterval(incr);
    }
}, speed);