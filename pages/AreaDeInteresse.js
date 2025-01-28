import { useRouter } from 'next/router';
import styles from '../styles/AdI.module.css';


const AdI = () => {
    const router = useRouter();

 
    return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a className={styles.title} onClick={() => router.push('/')}>Gabriel Corsi Honório</a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>   
          <a className={styles.nav_set} >Interest Areas</a>
          <a className={styles.nav_link} onClick={() => router.push('/contatosCV')}>Contacts/CV</a>
          <a className={styles.nav_link} onClick={() => router.push('/QuemSouEu')}>About me</a>
        </nav>
        </div>
      </header>


      <div className={styles.pageContent}>
        <main className={styles.mainContent}>

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Project 1</h2>
          <div className={styles.sectionBlock}>
          <p className={styles.sectionText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          </div>
        </section>

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Project 2</h2>
          <div className={styles.sectionBlock}>
          <p className={styles.sectionText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          </div>
        </section>

        </main>

          {/* <footer className={styles.footer}>
            <p>&copy; 2024 Blog Technologique</p>
          </footer> */}
      </div>
  </div>
    );
};

export default AdI;