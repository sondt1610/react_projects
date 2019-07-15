import React, { Component } from "react";
import {connect} from 'react-redux';
import addTexts from './actions/index';


class App extends Component {
    componentDidMount(){
        this.props.addTexts('ahihi');
    }
    render() {
        return (
        <div>
        {this.props.addText.map((data) => {
                return <h1>{data.text}</h1>
            })
        }
        </div>);
    }
}

const mapStateToProps = (state) => ({
    addText: state.addText
})

const mapDispatchToProps = (dispatch) => ({
    addTexts : (text) => dispatch(addTexts(text)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);