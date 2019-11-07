import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

import { addIteam,  removeIteam } from './action'

const App = ({ car, additionalPrice, additionalFeatures, addIteam,  removeIteam }) => {
 
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeIteam(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addIteam(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    // state: state
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}


export default connect(
  mapStateToProps,
  { addIteam,  removeIteam }
)(App);

// export default App;
