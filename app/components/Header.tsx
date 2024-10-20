
// components/Header.tsx
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div>
      <header className={styles.header}>
      <div className={styles.content}>Free shipping, 30-day return or refund guarantee.</div>
      <div className={styles.options}>
        
      <div className={styles.register}>REGISTER</div>
        <div className={styles.signin}>SIGN IN</div>
        <div className={styles.faqs}>FAQS</div>
      </div>
      </header>
    </div>
  );
}

export default Header;
