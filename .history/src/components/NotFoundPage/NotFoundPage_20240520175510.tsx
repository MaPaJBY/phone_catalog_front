import { FC } from 'react';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>Page not found</h1>
      <img src={require('./page-not-found.png')} alt="not found page" />
    </div>
  );
};

export default NotFoundPage
