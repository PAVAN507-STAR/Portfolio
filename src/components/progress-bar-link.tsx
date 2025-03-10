import React from 'react';

interface ProgressBarLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ProgressBarLink: React.FC<ProgressBarLinkProps> = ({ href, children }) => {
  return (
    <a href={href}>
      {children}
    </a>
  );
}; 