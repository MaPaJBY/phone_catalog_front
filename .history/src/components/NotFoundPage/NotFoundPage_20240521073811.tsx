import { FC } from 'react';
import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>Page not found</h1>
      <img src={require('./page-not-found.png')} alt="not found page" />
    </div>
    <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/404" component={NotFoundPage} />
  </Router>
  );
};

export default NotFoundPage;
