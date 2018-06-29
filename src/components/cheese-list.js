import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }

    render() {
        const cheeses = this.props.cheeses.map(cheese => {
            return <li key={cheese}>{cheese}</li>
        });

        return (
            <ul className="cheese-list">
                {cheeses}
            </ul>
        );
    }

}

const mapStateToProps = state => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);