import React, { FC } from 'react';
import './NotFoundPage.module.scss';

export const NotFoundPage: Raact.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};
