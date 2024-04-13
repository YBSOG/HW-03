const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

trafficLightGreen.addEventListener('click', changeColor);
trafficLightYellow.addEventListener('click', changeColor);
trafficLightRed.addEventListener('click', changeColor);

function changeColor () {
     if (trafficLightGreen.style.background === ('green')){
        trafficLightGreen.style.background = ('black');
        trafficLightYellow.style.background = ('yellow');
    } else if (trafficLightYellow.style.background === ('yellow')) {
        trafficLightYellow.style.background = ('black');
        trafficLightRed.style.background = ('red');
    } else if (trafficLightRed.style.background === ('red')) {
        trafficLightRed.style.background = ('black');
        trafficLightGreen.style.background = ('green');
    } else {
        trafficLightGreen.style.background = ('green')
    }
}