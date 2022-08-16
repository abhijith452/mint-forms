import type { NextPage } from 'next';
import styles from './styles.module.css';
import UserIcon from '../../icons/user';

const TopNav: NextPage = () => {
  return (
    <div className={styles.container}>
      <UserIcon width="30" height="30" />
    </div>
  );
};

export default TopNav;
