import React, { useState } from 'react';
import Tooltip from './Tooltip';

const ReviewHighlighter = ({ content, analytics }) => {
  

  const highlightSentences = () => {
    const highlightedContent = [];
    let lastIndex = 0;

    analytics.forEach((analysis, analysisIndex) => {
      const { sentences, sentiment, highlight_indices } = analysis;
      
      sentences.forEach((sentence, sentenceIndex) => {
        const startIndex = highlight_indices[sentenceIndex]?.[0] || content.indexOf(sentence, lastIndex);
        const endIndex = highlight_indices[sentenceIndex]?.[1] || startIndex + sentence.length;

        highlightedContent.push(
          <span
            key={`${analysisIndex}-${sentenceIndex}`} // Ensure unique keys for each sentence
            style={{ backgroundColor: getSentimentColor(sentiment) }}
           
          >
            {content.substring(lastIndex, startIndex)}
            <span className="highlighted-sentence">{content.substring(startIndex, endIndex)}</span>
          </span>
        );

        lastIndex = endIndex;
      });
    });

    highlightedContent.push(content.substring(lastIndex));
    return highlightedContent;
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return '#D9F2DD';
      case 'Negative':
        return '#F2DBD9';
      case 'Mixed':
        return '#e8bd6d3d';
      case 'Neutral':
        return '#eaf09b6b';
      default:
        return 'transparent';
    }
  };

  return (
    <div className="review">
      {highlightSentences()}
    
    </div>
  );
};

export default ReviewHighlighter;
