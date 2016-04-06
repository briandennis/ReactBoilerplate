import React from 'react';
import ReactDOM from 'react-dom';

console.log('testing');

class Heading extends React.Component {
  render() {
    return <h1> Everything is running properly! </h1>;
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Heading />, app);
