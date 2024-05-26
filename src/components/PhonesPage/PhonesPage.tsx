type Props = {};
import { useEffect, useState } from 'react';
import { useProductsContext } from '../../context/ProductsContext';
import ProductCard from '../ProductCard';
import styles from './PhonesPage.module.scss';
import Icon from '../Icon';
import { IProductDetails, Icons, SortType } from '../../types';
import { CustomSelect } from './CustomSelect';

const options = [
  { value: SortType.AZ, label: 'A to Z' },
  { value: SortType.ZA, label: 'Z to A' },
  { value: SortType.LOW_TO_HIGH, label: 'Lowest Price' },
  { value: SortType.HIGH_TO_LOW, label: 'Highest Price' },
];

const itemsPerPageOptions = [
  { value: 8, label: '8' },
  { value: 16, label: '16' },
  { value: 24, label: '24' },
  { value: 32, label: '32' },
  { value: SortType.ALL, label: 'All' },
];

export default function PhonesPage({}: Props) {
  const { phones } = useProductsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const sortPhones = (
    phonesList: IProductDetails[],
    sortTypeParam: SortType,
  ) => {
    const sortedPhones = [...phonesList];

    switch (sortTypeParam) {
      case SortType.AZ:
        sortedPhones.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortType.ZA:
        sortedPhones.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case SortType.LOW_TO_HIGH:
        sortedPhones.sort((a, b) => a.priceDiscount - b.priceDiscount);
        break;
      case SortType.HIGH_TO_LOW:
        sortedPhones.sort((a, b) => b.priceDiscount - a.priceDiscount);
        break;
      case SortType.ALL:
        break;
      default:
        break;
    }

    return sortedPhones;
  };

  const [sortType, setSortType] = useState<SortType>(SortType.AZ);

  const sortedPhones = sortPhones(phones, sortType);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPhones.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(phones.length / itemsPerPage);

  const pagination = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;

    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow / 2, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => pagination(i)}
          className={
            currentPage === i
              ? `${styles.active} ${styles.pageNumber}`
              : styles.pageNumber
          }
          onMouseEnter={e => e.currentTarget.classList.add(styles.hover)}
          onMouseLeave={e => e.currentTarget.classList.remove(styles.hover)}
        >
          {i}
        </span>,
      );
    }

    return pageNumbers;
  };

  const handleSortChange = (sortTypeI: SortType | number) => {
    setSortType(sortTypeI as SortType);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: SortType | number) => {
    if (value === SortType.ALL) {
      setItemsPerPage(phones.length);
    } else {
      setItemsPerPage(value as number);
    }

    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [sortType]);

  return (
    <main className={styles.phonesPage}>
      <h1 className={styles.title}>Mobile Phones</h1>
      <span className={styles.subText}>95 models</span>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor="sort">
          Sort by:
        </label>
        <CustomSelect
          options={options}
          value={sortType}
          onChange={handleSortChange}
          className="my-custom-select"
        />
      </div>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor="itemsPerPage">
          Items per page:
        </label>
        <CustomSelect
          options={itemsPerPageOptions}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="my-custom-select"
        />
      </div>{' '}
      <div className={styles.cardsContainer}>
        {currentItems.map(phone => (
          <ProductCard key={phone.id} product={phone} />
        ))}
      </div>
      <div className={styles.pageSelector}>
        <Icon
          iconId={Icons.ARROW_LEFT}
          className={`${styles.arrowLeft} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {renderPageNumbers()}
        <Icon
          iconId={Icons.ARROW_RIGHT}
          className={`${styles.arrowRight} ${currentPage === totalPages || currentItems.length === 0 ? styles.disabled : ''}`}
          onClick={() => pagination(currentPage + 1)}
          disabled={currentPage === totalPages || currentItems.length === 0}
        />
      </div>
    </main>
  );
}
