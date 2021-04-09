import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, onIncrease, onDecrease, setDiff }){
    return (
        <Counter
            //state
            number={number}
            diff={diff}
            //action dispatching functions
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={setDiff}
        />
    );
}

//mapStateToProps observes redux store state and defines which ones to put in props
//Gets current redux state as parameter
const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
});

//mapDispatchToProps creates a function that dispatches action and put it into props
//Gets dispatch as parameter
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increase,
            decrease,
            setDiff
        }
    );


//use mapStateToProps and mapDispatchToProps as params for connect
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer); 

