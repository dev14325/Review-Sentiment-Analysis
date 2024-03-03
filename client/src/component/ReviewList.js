import React from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewHighlighter key={index} content={review.content} analytics={review.analytics} />
      ))}
    </div>
  );
};

export default ReviewList;
