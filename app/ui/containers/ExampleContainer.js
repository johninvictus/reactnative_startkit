import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';

/*
* actions
* */
import {onShowExample} from '../../actions'

class ExampleContainer extends Component {

    componentDidMount() {
        this.props.onShowExample();
    }

    render() {
        return (
            <Text>{this.props.example}</Text>
        );
    }
}

const mapStateToProps = (state) => {
    const {example} = state.example;
    return {
        example
    }
};

export default connect(mapStateToProps, {onShowExample})(ExampleContainer);
