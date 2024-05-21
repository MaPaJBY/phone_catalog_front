import { FC } from 'react';
import './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className="Title">
      <h1>Page not found</h1>
      <img class src={require('./page-not-found.png')} alt="not found page" />
    </div>
  );
};
