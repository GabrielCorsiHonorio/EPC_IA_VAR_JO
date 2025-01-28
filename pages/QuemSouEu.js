import { useRouter } from 'next/router';
import styles from '../styles/QSM.module.css';


const QSM = () => {
    const router = useRouter();

 
    return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a  className={styles.title} onClick={() => router.push('/')}>Gabriel Corsi Honório</a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>   
          <a  className={styles.nav_link} onClick={() => router.push('/AreaDeInteresse')}>Interest Areas</a>
          <a  className={styles.nav_link} onClick={() => router.push('/contatosCV')}>Contacts/CV</a>
          <a  className={styles.nav_set} >About me</a>
        </nav>
        </div>
      </header>


      <div className={styles.pageContent}>
        <main className={styles.mainContent}>


        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Childhood</h2>
          <div className={`${styles.sectionBlock}`}>
          <div className={styles.circle_container}>
            <img src="/images/corsi.jpg" alt="Descrição da imagem" className={styles.circle_image} />
        </div>
          <p className={styles.sectionText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          </div>
        </section>

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Career</h2>
          <div className={`${styles.sectionBlock} ${styles.reverse}`}>
          <div className={styles.circle_container}>
            <img src="/images/corsi.jpg" alt="Descrição da imagem" className={styles.circle_image} />
        </div>
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

export default QSM;