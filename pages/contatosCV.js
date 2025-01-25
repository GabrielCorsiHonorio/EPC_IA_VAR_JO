import { useRouter } from 'next/router';
import styles from '../styles/contatosCV.module.css';


const Contact = () => {
    const router = useRouter();

 
    return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a  className={styles.title} onClick={() => router.push('/')}>Gabriel Corsi Honório</a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>   
          <a className={styles.nav_link} onClick={() => router.push('/AreaDeInteresse')}>Áreas de Interesse</a>
          <a className={styles.nav_set}>Contatos/CV</a>
          <a className={styles.nav_link} onClick={() => router.push('/QuemSouEu')}>Quem sou eu</a>
        </nav>
        </div>
      </header>


      <div className={styles.pageContent}>
        <main className={styles.mainContent}>


        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Contacts</h2>
          <div className={`${styles.sectionBlock}`}>
          <div className={styles.circle_container}>
        </div>
          </div>
        </section>

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>CV</h2>
          <div className={`${styles.sectionBlock} ${styles.reverse}`}>
          <div className={styles.circle_container}>
        </div>
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

export default Contact;