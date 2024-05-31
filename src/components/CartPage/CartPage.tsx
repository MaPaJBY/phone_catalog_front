type Props = {};
import { useCartSelector } from '../../hooks/reduxHooks';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Button from '../Button';
import CartItem from '../CartItem/CartItem';
import styles from './CartPage.module.scss';

export default function CartPage({}: Props) {
  const { itemCount, totalPrice } = useCartSelector(state => state);

  return (
    <main className={styles.cartPage}>
      <Breadcrumbs />
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <CartItem />
        </div>
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.cashInfo}>${totalPrice}</div>
          <div className={styles.itemInfo}>Total for {itemCount} items</div>
        </div>
        <Button
          title={'Checkout'}
          type="primary"
          className={styles.checkoutButton}
        />
      </div>
    </main>
  );
}
