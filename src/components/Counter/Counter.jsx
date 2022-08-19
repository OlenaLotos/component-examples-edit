import React from 'react';
import './Counter.css';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({value: 123112}) як обєкт - коли перезаписуємо значення, як функція - коли відштовхуємось від попереднього значення і його змінюємо відповідно.
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    // console.log('click on button +1');
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // console.log('click on button -1');
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
