
import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';

const Index = () => {
    const router = useRouter();

    return (
        <>

            
                <div className={styles.pageContainer}>
                    <h1 className={styles.title}>Gabriel Corsi Honório</h1>
                    <div className={styles.buttonsContainer}>
                        <a  className={styles.button} onClick={() => router.push('/AreaDeInteresse')}>Áreas de Interesse</a>
                        <a  className={styles.button} onClick={() => router.push('/contatosCV')}>Contatos/CV</a>
                        <a  className={styles.button} onClick={() => router.push('/QuemSouEu')}>Quem sou eu?</a>
                        {/* <a href="cv" className={styles.button}>CV</a> */}

                    </div>
                </div>
              
        </>
    );
};

export default Index;
