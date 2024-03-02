import React from 'react';
import ReviewList from './component/ReviewList';
import './style.css' // Import your CSS file here

const reviewsData = require('./reviews_data.json');

const App = () => {
  return (
    <div className="app">
      <h1>Review Sentiment Analysis</h1>
      <ReviewList reviews={reviewsData} />
    </div>
  );
};

export default App;
