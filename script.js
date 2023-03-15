const currentDate = new Date();
const options = {month:'short', day: 'numeric', year:'numeric'};
const formattedDate = currentDate.toLocaleDateString('en-Us', options);
document.getElementById('current-date').textContent = formattedDate;

const themechanger = document.querySelector('.themebtn');
const themeicon = document.querySelector('.themebtn i');
const body = document.querySelector('body');

//usinglocal storage to store the users preference on dark mode
//checking for user preference

const isDarkMode = localStorage.getItem('darktheme') ==="true";
if(isDarkMode){
    body.classList.add('darktheme');
}

//toggle dark mode when button is clicked

themechanger.addEventListener('click', () =>{
    body.classList.toggle('darktheme');
    themeicon.classList.toggle('bxs-sun');

    //save user preference

    const isDarkMode = body.classList.contains('darktheme');
    localStorage.setItem('darktheme', isDarkMode)
})