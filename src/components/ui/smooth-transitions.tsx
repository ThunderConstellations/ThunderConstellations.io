
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface SmoothTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const SmoothPageTransition: React.FC<SmoothTransitionProps> = ({
  children,
  className = ''
}) => {
  const location = useLocation();

  return (
    <TransitionGroup className={className}>
      <CSSTransition
        key={location.pathname}
        classNames="page-transition"
        timeout={300}
        unmountOnExit
      >
        <div className="page-transition-wrapper">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};
