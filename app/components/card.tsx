// Card.tsx

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  // Add any other props you want to pass to the Card component here
  // For example:
  // title?: string;
  // className?: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
