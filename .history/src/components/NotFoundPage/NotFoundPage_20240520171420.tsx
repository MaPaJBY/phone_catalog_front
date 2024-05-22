import { FC } from 'react';
import './NotFoundPage.module.scss';
import pageNotFound from '../../../public/img'

export const NotFoundPage: FC = () => {
  return (
    <div className="Title">
      <h1>404</h1>
      <p>Page not found</p>
      <img src={pageNotFound} alt="Not Found Image" />
    </div>
  );
};
