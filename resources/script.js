let icon = document.getElementById('img_box_share');
let icon_svg = document.getElementById('share_img');
let share_div = document.getElementById('mypopup');

icon.addEventListener('click', () => {
    share_div.classList.toggle("show");

    if (icon_svg.style.filter === 'brightness(0) invert(1)') { //change svg image color to white
        icon_svg.style.filter = 'invert(18%) sepia(44%) saturate(700%) hue-rotate(222deg) brightness(70%) contrast(91%)'
        icon.style.backgroundColor = 'hsl(210, 46%, 95%)';
    } else {
        icon.style.backgroundColor = 'hsl(214, 17%, 51%)';
        icon_svg.style.filter = 'brightness(0) invert(1)';
    }
});