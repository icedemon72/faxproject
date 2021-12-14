const copyTheNumber = (num) => navigator.clipboard.writeText(num);

const changeTheme = () => {
    let imgSrc = document.getElementById('themeImg').src;
    if (imgSrc.endsWith('night.png')) {
        let url = imgSrc.split('/images/night.png')[0];
        document.getElementById('themeImg').src = `${url}/images/day.png`;
    } else {
        let url = imgSrc.split('/images/day.png')[0];
        document.getElementById('themeImg').src = `${url}/images/night.png`;
    }
    
}

let el = document.getElementById('scrollToTop');

window.onscroll = () => {
    el.style.display = (document.body.scrollTop > 244 || document.documentElement.scrollTop > 244) ?  'block' : 'none';
};
