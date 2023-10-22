
import './container.scss';

function Container({ children, height, bgLink }) {
    const style = {};
    if (bgLink) {
        style.backgroundImage = `url(${bgLink})`;
    }
    if (height) {
        style.height = height;
    }

    return (
        <div className="container" style={style}>
            {children}
        </div>
    )

}

export default Container;