import { Component } from 'react';
import './filter.scss';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilter: ''
        }
    }

    onClick = (e) => {
        const filterValue = e.target.getAttribute('data-filter');
        this.setState(({ activeFilter }) => {
            const newFilter = (activeFilter === filterValue) ? '' : filterValue;
            this.props.filterGoods(newFilter);
            return { activeFilter: newFilter };
        });
    }

    render() {
        const { countries } = this.props;

        const buttons = countries.map((item, i) => {
            let classList = '';
            if (item === this.state.activeFilter) classList = 'active';
            return (
                <button key={i} data-filter={item} className={classList} onClick={this.onClick}>{item}</button>
            );
        });

        return (
            <div className='filter'>
                <p>Or filter</p>
                {buttons}
            </div>
        );
    }
}