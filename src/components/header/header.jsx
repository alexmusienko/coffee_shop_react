import LogoDivider from '../logo-divider/logo-divider';
import Menu from '../menu/menu';
import './header.scss';

export default function Header({bgImg}) {

    return (
        <header className='container' style={{background: `url(${bgImg}) center no-repeat`}}>
            <Menu />
            <div className="title">
                <h1>Everything You Love About Coffee</h1>
                <LogoDivider />
                <p>We makes every day full of energy and taste<br />Want to try our beans?</p>
                <button>More</button>
            </div>
        </header>
    );
};