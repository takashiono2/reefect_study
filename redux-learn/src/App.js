import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Count from './components/Count';

function App({ count }) {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);