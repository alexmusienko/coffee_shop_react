import Container from './components/container/container';
import Menu from './components/menu/menu';
import LogoDivider from './components/logo-divider/logo-divider';

// import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <Container bgLink={require('./img/main-bg.jpg')} height={640}>
            <Menu />
            <div className="title">
                <h1>Everything You Love About Coffee</h1>
                <LogoDivider />
                <p>We makes every day full of energy and taste<br/>Want to try our beans?</p>
                <button>More</button>
            </div>
        </Container>
    );
}

export default App;
