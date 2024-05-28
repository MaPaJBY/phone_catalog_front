import { FC } from 'react';
import cn from 'classnames';

import s from './ProductCard.module.scss';
import Button from '../../components/Button';
import { Icons, ProductT } from '../../types';
import { useAppDispatch, useCartSelector } from '../../hooks/reduxHooks';
import { addCartItem } from '../../slices/cartSlice';

interface Props {
  product: ProductT;
  isSlider?: boolean;
}
const ProductCard: FC<Props> = ({ product, isSlider }) => {
  const { cart } = useCartSelector(state => state);
  const dispatch = useAppDispatch();

  const {
    itemId: id,
    name,
    capacity,
    ram,
    price,
    fullPrice,
    screen,
    image,
  } = product;

  const isProductInCard = Object.hasOwn(cart, id);

  const cartProduct = {
    id,
    name,
    image,
    price,
  };

  return (
    <div
      className={cn(
        {
          [s.sliderCardContainer]: isSlider,
          [s.container]: !isSlider,
        },
        '__app-PhoneCard-container',
      )}
      data-cy="cardsContainer"
    >
      <a href={`/*`} className={s.link}>
        <img
          className={cn({
            [s.sliderCardImage]: isSlider,
            [s.image]: !isSlider,
          })}
          src={`/${image}`}
          alt={name}
        />
      </a>
      <a href={`/*`} className={s.name}>
        {name}
      </a>
      <div className={s.price}>
        <span className={s.currentPrice}>{`$${price}`}</span>
        <span className={s.fullPrice}>{`$${fullPrice}`}</span>
      </div>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>Screen</span>
          <span>{screen}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>Capacity</span>
          <span>{capacity}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailsTitle}>RAM</span>
          <span>{ram}</span>
        </li>
      </ul>
      <div className={s.buttons}>
        <Button
          onClick={() => dispatch(addCartItem(cartProduct))}
          isSelected={false}
          className={s.addToCard}
          title={isProductInCard ? 'Added to cart' : 'Add to cart'}
        />
        <Button
          onClick={() => {}}
          type="secondary"
          className={s.addToFavorite}
          icon={Icons.HEART}
        />
      </div>
    </div>
  );
};

export default ProductCard;
