import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './Settings.module.scss';
import {useState} from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import PaletteIcon from '@mui/icons-material/Palette';

const SettingsModal = ({isOpen, handleClose}) => {
  const [theme, setTheme] = useState('default');
  const [language, setLanguage] = useState('english');
    return(
        <Modal
        open={isOpen}
        onClose={handleClose}
        className={styles.wrapperModal}
    >
      <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Settings</h3>
      <div className={styles.wrapperSelect}>
      <label className={styles.selectTheme}>
      <div className={styles.labelContent}>
      <PaletteIcon/>
      <h4 className={styles.labelTitle}>Theme</h4>
      </div>
      <Select
      fullWidth
        margin="dense"
          labelId="theme"
          id="theme"
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        > 
          <MenuItem value={'default'}>default</MenuItem>
          <MenuItem value={'dark'}>dark</MenuItem>
          <MenuItem value={'light'}>light</MenuItem>
        </Select>
        </label>
        <label className={styles.selectLanguage}>
        <div className={styles.labelContent}>
        <TranslateIcon/>
        <h4 className={styles.labelTitle}>Language</h4>
        </div>
        <Select
        fullWidth
        margin="dense"
          labelId="language"
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <MenuItem value={'english'}>english</MenuItem>
          <MenuItem value={'ukrainian'}>ukrainian</MenuItem>
        </Select>
        </label>
      </div>
      </div>
    </Modal>
    );
};

export default SettingsModal;