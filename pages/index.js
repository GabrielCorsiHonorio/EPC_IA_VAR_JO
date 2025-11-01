
import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';
import Head from 'next/head'

const Index = () => {
    const router = useRouter();

    return (
        <>

     <Head>
        <link rel="icon" type="image/png" href="/images/page_icon.png" />
      </Head>    
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Gabriel Corsi Honório</h1>
            <div className={styles.buttonsContainer}>
                <a  className={styles.button} onClick={() => router.push('/Experiences')}>Experiences</a>
                <a  className={styles.button} onClick={() => router.push('/AreaDeInteresse')}>Interest Areas</a>
                <a  className={styles.button} onClick={() => router.push('/contatosCV')}>Contacts/CV</a>
                <a  className={styles.button} onClick={() => router.push('/QuemSouEu')}>About me</a>
            </div>
        </div>
              
        </>
    );
};

export default Index;
