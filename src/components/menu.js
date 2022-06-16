import '../css/sidebar.css';
import closeIcon from '../images/icon-close.svg'



const insertCloseIcon = (location) => {
    const img = document.createElement('img');
    img.src = closeIcon;   
    location.appendChild(img);
    return img;
}



export { insertCloseIcon }