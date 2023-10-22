import { Component } from 'react';
import Card from '../card/card';
import Search from '../search/search';
import Filter from '../filter/filter';

import './our-best.scss';

export default class OurBest extends Component {

    constructor(props) {   // { bgImg, title }
        super(props);
        this.state = {
            goods: [],
            countries: [],
            query: '',
            filter: '',
        }
    }

    getData = (query, filter) => {
        fetch('http://localhost:3001/goods')
            .then(resp => resp.json())
            .then(data => {
                this.setState(state => {

                    if (query === null) query = state.query;
                    if (filter === null) filter = state.filter;

                    const filteredData = data.filter(item => ((item.title.indexOf(query) !== -1) && ((filter === '') || (item.country === filter))));
                    const uniqueCountries = [...new Set(data.map(item => item.country))];

                    return {
                        goods: filteredData,
                        countries: uniqueCountries,
                        query: query,
                        filter: filter
                    }
                });
            });
    }

    componentDidMount() {
        this.getData('', '');
    }

    searchGoods = (query) => {
        this.getData(query, null);
    }

    filterGoods = (filter) => {
        this.getData(null, filter);
    }

    render() {
        const { bgImg, title } = this.props;
        const style = {};
        if (bgImg) {
            style.background = `url(${bgImg}) top left`;
        }

        const cards = this.state.goods.map(item => (
            <Card
                key={item.id}
                img={item.img}
                title={item.title}
                country={item.country}
                price={item.price} />
        ));

        return (
            <section className="ourbest container" style={style}>
                <h2>{title}</h2>
                <div className='filterWrapper'>
                    <Search searchGoods={this.searchGoods} />
                    <Filter countries={this.state.countries} filterGoods={this.filterGoods} />
                </div>
                <div className="cards">
                    {cards}
                </div>
            </section>
        );
    }
}