import React, { Component, Fragment } from 'react';


class Counter extends Component {
    constructor() {
        super()
        this.handleClickIncrease = this.handleClickIncrease.bind(this)
        this.handleClickDecrease = this.handleClickDecrease.bind(this)
        this.handleClickReset= this.handleClickReset.bind(this)
       
    }

    state = {
        count: 0,
    }

    handleClickIncrease = () => this.setState({ count: this.state.count + 1 });

    handleClickDecrease = () => this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  
    handleClickReset = () => this.state.count !== 0 && this.setState({ count: 0 });
  

    render() {
        return (
            <div className='container'>
                <div class="item">
                    <button className='btn' onClick={this.handleClickDecrease}>
                        -
                    </button>
                    <span className='count'> {this.state.count} </span>
                    <button className='btn' onClick={this.handleClickIncrease}>
                        +
                    </button>
                </div>
                <p className='reset' onClick={this.handleClickReset}>Reset</p>
            </div>

        )
    }
}


export default Counter;