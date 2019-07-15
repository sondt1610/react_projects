import React, { Component } from "react";
import {connect} from 'react-redux';
import addTexts from './actions/index';


class App extends Component {
    componentDidMount(){
        // this.props.addTexts('ahihi');
        // this.props.userRequest();
        this.props.addTexts()
    }
    render() {
        return (
        <div>
          <h1>sdfs</h1>
        {/* {this.props.addText.map((data) => {
                return <h1>{data.text}</h1>
            })
        } */}
        </div>);
    }
}

const mapStateToProps = (state) => ({
    addText: state.addText
})

const mapDispatchToProps = (dispatch) => ({
    addTexts : () => dispatch(addTexts()),
    // addTexts : (text) => dispatch(addTexts(text)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);