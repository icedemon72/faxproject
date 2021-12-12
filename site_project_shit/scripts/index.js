const copyTheNumber = (num) => navigator.clipboard.writeText(num);

const changeTheme = (dot = '') => {
    let imgSrc = document.getElementById('themeImg').src;
    if(imgSrc.endsWith('night.png')) {
        let url = imgSrc.split('/images/night.png')[0];
        document.getElementById('themeImg').src = `${url}${dot}/images/day.png`;
    } else {
        let url = imgSrc.split('/images/day.png')[0];
        document.getElementById('themeImg').src = `${url}${dot}/images/night.png`;
    }
}