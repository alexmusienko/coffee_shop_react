import LogoDivider from "../logo-divider/logo-divider";
import Menu from "../menu/menu";

import './footer.scss';

export default function Footer(props) {
    return (
        <footer className="container">
            <Menu color={'black'} />
            <LogoDivider color={'black'} />
        </footer>
    );
}