import './menu.scss';
import logoWhite from '../../icons/logo-white.svg';
import logoBlack from '../../icons/logo-black.svg';

function Menu({color}) {
    const img = (color === 'black') ? logoBlack : logoWhite;
    const classList = (color === 'black') ? "black" : "";
    return (
        <menu className={classList}>
            <ul>
                <li><a className={classList} href="localhost:3000"><img src={img} alt="logo" />Coffee house</a></li>
                <li><a className={classList} href="localhost:3000">Our coffee</a></li>
                <li><a className={classList} href="localhost:3000">For your pleasure</a></li>
            </ul>
        </menu>
    );
}

export default Menu;