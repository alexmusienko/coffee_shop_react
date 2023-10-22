import { Component } from 'react';

import './search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState(({query}) => {
            return {
                query: value
            }
        });
        this.props.searchGoods(value);
    }

    render() {
        return(
            <form className='searchForm'>
                <label htmlFor='search'>Looking for</label>
                <input type="text" value={this.state.query} name='search' placeholder='start typing here...' onChange={this.onChange} />
            </form>
        );
    }
}