import React from 'react';

const Tooltip = ({ sentiment, topic }) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext">{`Sentiment: ${sentiment}, Topic: ${topic}`}</span>
    </div>
  );
};

export default Tooltip;
