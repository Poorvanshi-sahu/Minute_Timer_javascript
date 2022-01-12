let h1 = document.querySelector("#main h1");
let r = document.querySelector("#r");
let s = document.querySelector("#s");
let out = document.querySelector("#timeout");
var time = 0;
var i = 0;


function reset() {
    let a = prompt("Enter time in minutes : second format :");
    time = a.split(":")[0] * 60 + Number(a.split(":")[1]);
    console.log(typeof time)
    if (!a.includes(":")) {
        alert("invalid")
        return 0;
    }
    i = setInterval(function(val) {
        if (time > 0) {
            time--;
            show(time);
        } else if (time === 0) {
            document.querySelector("#timeout").style.zIndex = "99";
            document.querySelector("#mus").play();
        }
    }, 1000);
}


function show(time) {
    let f = Math.floor(time / 60);
    let s = f * 60;
    let r = time - s;
    h1.innerHTML = f + ":" + r;
}


r.addEventListener('click', function(val) {
    reset();
})

s.addEventListener('click', function() {
    clearInterval(i);
    document.querySelector("#mus").pause();
})


out.addEventListener('click', function() {
    document.querySelector("#timeout").style.zIndex = "-9";
    clearInterval(i);
    document.querySelector("#mus").pause();
})