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
          <a className={styles.nav_link} onClick={() => router.push('/AreaDeInteresse')}>Interest Areas</a>
          <a className={styles.nav_set}>Contacts/CV</a>
          <a className={styles.nav_link} onClick={() => router.push('/QuemSouEu')}>About me</a>
        </nav>
        </div>
      </header>


      <div className={styles.pageContent}>
        <main className={styles.mainContent}>


        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Contacts</h2>
          <div className={styles.sectionBlock}>
          <a href="mailto:gabriel.corsi@ensta-paris.fr" className={styles.email_link}> gabriel.corsi@ensta-paris.fr 
          <img src="/images/email-icon.png" alt="Ícone de email" className={styles.imagem} />
          </a>
          </div>
        </section>


        

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>CV</h2>
          <div className={styles.sectionBlock}>
           <a href="/images/Gabriel_CORSI_HONORIO_CV_ING.pdf" download class="download-link" className={styles.download}>Click here to download</a>
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