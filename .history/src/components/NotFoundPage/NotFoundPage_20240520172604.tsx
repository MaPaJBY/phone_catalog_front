import { FC } from 'react';
import './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className="Title">
      <h1>404</h1>
      <p>Page not found</p>
      <img
        src={require('./public/img/page-not-found.png')}
        alt=""
        srcSet=""
      />
    </div>
  );
};
