import React from 'react';

const Tooltip = ({ sentiment, topic }) => {
  return (
    <div className="tooltip">
      <p><strong>{sentiment}:</strong> {topic}</p>
    </div>
  );
};

export default Tooltip;
