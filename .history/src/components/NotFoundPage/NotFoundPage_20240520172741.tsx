import { FC } from 'react';
import './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className="Title">
      <h1></h1>
      <img src={require('./page-not-found.png')} alt="" srcSet="" />
    </div>
  );
};
