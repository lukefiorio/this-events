//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/


var naviClass = document.getElementsByClassName('navi');

for (var i=0; i<naviClass.length; i++) {
    naviClass[i].addEventListener('click', NavDropDown);
}
// is there a way to store the display status as a variable?
function NavDropDown() {
    if (this.querySelectorAll('.inner')[0].style.display==='none') {
        this.querySelectorAll('.inner')[0].style.display='block';
    } else {
        this.querySelectorAll('.inner')[0].style.display='none';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



