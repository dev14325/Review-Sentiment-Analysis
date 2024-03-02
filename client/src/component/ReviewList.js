import React from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import Tooltip from './Tooltip';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, reviewIndex) => (
        <div key={`review-${reviewIndex}`}>
          <ReviewHighlighter key={`highlighter-${reviewIndex}`} content={review.content} analytics={review.analytics} />
          {review.analytics.map((analysis, analysisIndex) => (
            <Tooltip key={`tooltip-${reviewIndex}-${analysisIndex}`} sentiment={analysis.sentiment} topic={analysis.topic} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
