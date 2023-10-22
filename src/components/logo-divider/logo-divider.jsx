import './logo-divider.scss';
import beansWhite from '../../icons/beans-white.svg';
import beansBlack from '../../icons/beans-black.svg';

function LogoDivider({ color }) {
    const img = (color === 'black') ? beansBlack : beansWhite;
    const lineClass = "logo-line" + ((color === 'black') ? ' black' : '');
    return (
        <div className="logo-divider">
            <div className={lineClass}></div>
            <img src={img} alt="logo" />
            <div className={lineClass}></div>
        </div>
    );
}

export default LogoDivider;