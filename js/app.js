//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/


var naviClass = document.getElementsByClassName('navi');

for (var i=0; i<naviClass.length; i++) {
    naviClass[i].addEventListener('click', NavDropDown);
}
// is there a way to store the display status as a variable?
function NavDropDown() {
    if (this.querySelectorAll('.inner')[0].style.display==='none' || this.querySelectorAll('.inner')[0].style.display==='') {
        this.querySelectorAll('.inner')[0].style.display='block';
    } else {
        this.querySelectorAll('.inner')[0].style.display='none';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var nameClass = document.getElementsByClassName('name');

for (var i = 0; i<nameClass.length; i++) {
    nameClass[i].addEventListener('click',feedMe);
}

function feedMe() {
    if (this.querySelectorAll('.menu')[0].style.display==='block') {
        this.querySelectorAll('.menu')[0].style.display='none';
    } else {
        this.querySelectorAll('.menu')[0].style.display='block';
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/




//var downThumbClass = document.getElementsByClassName('svg-inline--fa fa-thumbs-down fa-w-16');
// console.log(downThumbClass);
// console.log(downThumbClass.length);

//var downThumbClass = document.getElementsByClassName('far fa-thumbs-down');

// dont like that it clicks the button no matter where along the horizontal i click.
var downThumbClass = document.getElementsByClassName('thumb');
console.log(downThumbClass.length);

for (var i=0;i<downThumbClass.length; i++) {
    downThumbClass[i].addEventListener('click',downCnt);
}

function downCnt() {
    console.log('boo!!');
}
