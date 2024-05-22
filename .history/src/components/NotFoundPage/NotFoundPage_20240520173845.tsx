import { FC } from 'react';
import styles'./NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className="All">
      <h1 className="Title">Page not found</h1>
      <img
        className="Image"
        src={require('./page-not-found.png')}
        alt="not found page"
      />
    </div>
  );
};
