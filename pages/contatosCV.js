import { useRouter } from 'next/router';
import styles from '../styles/contatosCV.module.css';
import Head from 'next/head';


const Contact = () => {
    const router = useRouter();

 
    return (

            <>
     <Head>
        <link rel="icon" type="image/png" href="/images/page_icon.png" />
      </Head> 


    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a  className={styles.title} onClick={() => router.push('/')}>Gabriel Corsi Honório</a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}> 
          <a  className={styles.nav_link} onClick={() => router.push('/Experiences')}>Experiences </a>  
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
          <a href="mailto:corsihonoriog@gmail.com" className={styles.email_link}> corsihonoriog@gmail.com 
          <img src="/images/email-icon.png" alt="Ícone de email" className={styles.imagem} />
          </a>
          </div>
        </section>


        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Social</h2>
          <div className={styles.sectionBlock}>
          <a href="https://github.com/Gabriel-CorsiHonorio" className={styles.email_link}> Github 
          <img src="/images/social.png" alt="Ícone github" className={styles.imagem} />
          </a>
          </div>
          <div className={styles.sectionBlock}>
          <a href="https://www.linkedin.com/in/gabriel-corsi-hon%C3%B3rio-baa08b281?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ3eKeg5fQW2csCc%2FNrVOGA%3D%3D" className={styles.email_link}> Linkedin 
          <img src="/images/linkedin.png" alt="Ícone github" className={styles.imagem} />
          </a>
          </div>
        </section>


        

        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>CV</h2>
          <div className={styles.sectionBlock}>
           <a href="/images/Gabriel_CORSI_HONORIO_CV_ING.pdf"  className={styles.download}>Click here to download</a>
          </div>
        </section>



        </main>

          {/* <footer className={styles.footer}>
            <p>&copy; 2024 Blog Technologique</p>
          </footer> */}
      </div>
  </div>

  </>
    );
};

export default Contact;