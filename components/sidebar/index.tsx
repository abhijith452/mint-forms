import type { NextPage } from 'next';
import styles from './styles.module.css';
import Logo from '../../icons/logo';
import EditIcon from '../../icons/edit';
import SettingsIcon from '../../icons/settings'
import FileIcon from '../../icons/file'
import GridIcon from '../../icons/grid'
import TaskIcon from '../../icons/task'

const Sidebar: NextPage = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.item_selected}>
        <GridIcon  width="18" height ="18"/>
        <p>Overview</p>
        </div>
      <div className={styles.item}>
        <EditIcon  width="18" height ="18"/>
        <p>Create</p>
      </div>
      <div className={styles.item}>
        <TaskIcon  width="18" height ="18"/>
        <p>Submission</p>
      </div>
      <div className={styles.item}>
        <SettingsIcon width="18" height ="18"/>
        <p>Settings</p>
      </div>
      <div className={styles.item}>
        <FileIcon width="18" height ="18"/>
        <p>Docs</p>
      </div>
    </div>
  );
};

export default Sidebar;
