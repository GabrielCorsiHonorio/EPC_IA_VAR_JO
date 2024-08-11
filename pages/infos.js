import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';


const Index = () => {
    const router = useRouter();


    return (
    <div className={styles.pageContainer}>
    <header className={styles.header}>
        <nav className={styles.nav}>   
        <button className={styles.nav_link} onClick={() => router.push('/')}>À propos de nous</button>
        <button className={styles.nav_set} >Information</button>
        <button className={styles.nav_link} onClick={() => router.push('/vote')}>Vote</button>
        </nav>
      </header>
        <div className={styles.pageContent}>

        </div>
    </div>
    );
};

export default Index;