let day_input = document.querySelector('#day_input');
let select = document.querySelector('#select');
let btn = document.querySelector('.btn');
let output = document.querySelector('#output');
let reset = document.querySelector('#reset');

btn.addEventListener('click', function () {
        if (day_input.value > 0) {
            if (select.value === "seconds") {
                let seconds = 86400;
                output.innerHTML = day_input.value * seconds + ' Seconds';
            } else if (select.value === "minutes") {
                let minutes = 1440;
                output.innerHTML = day_input.value * minutes + ' Minutes';
            } else if (select.value === "hours") {
                let hours = 24;
                output.innerHTML = day_input.value * hours + ' Hours';
            } else {
                output.innerHTML = 'Invalid input';
            }
        } else if (day_input.value == 0) {
            output.innerHTML = 'Your Day Input Empty !!';
        }    
    }

)
reset.addEventListener('click',function(){
    output.innerHTML=''
})