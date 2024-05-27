type Props = {};
import { useProductsContext } from '../../context/ProductsContext';
import Button from '../Button';
import CartItem from '../CartItem/CartItem';
import styles from './CartPage.module.scss';

export default function CartPage({}: Props) {
  const { phones, isItemInCart } = useProductsContext();

  const itemsInCart = phones.filter(phone => isItemInCart(phone.id));

  const totalCost = itemsInCart.reduce(
    (total, item) => total + item.priceDiscount,
    0,
  );

  return (
    <main className={styles.cartPage}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          <CartItem />
        </div>
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.cashInfo}>${totalCost}</div>
          <div className={styles.itemInfo}>
            Total for {itemsInCart.length} items
          </div>
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
