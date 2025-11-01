
import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';
import Head from 'next/head'

const Index = () => {
    const router = useRouter();

    return (
        <>

     <Head>
        <meta property="og:title" content="Gabriel Corsi Honório's Portfolio" />
        <meta property="og:description" content="Discover my experiences, interests, contacts, and more about me." />
        <meta property="og:image" content="https://www.gabriel-ch.com.br/images/page_icon.png" />
        <meta property="og:url" content="https://www.gabriel-ch.com.br" />
        <meta property="og:type" content="website" />

        <meta name="title" content="Gabriel Corsi Honório's Portfolio" />
        <meta name="description" content="Discover my experiences, interests, contacts, and more about me." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gabriel Corsi Honório's Portfolio" />
        <meta name="twitter:description" content="Discover my experiences, interests, contacts, and more about me." />
        <meta name="twitter:image" content="https://www.gabriel-ch.com.br/images/page_icon.png" />

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
