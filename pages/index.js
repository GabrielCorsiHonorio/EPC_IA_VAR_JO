import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';


const Index = () => {
    const router = useRouter();


    return (
    <div className={styles.pageContainer}>
    <header className={styles.header}>
        <nav className={styles.nav}>
        <button className={styles.nav_set} >À propos de nous</button>   
        <button className={styles.nav_link} onClick={() => router.push('/infos')}>Information</button>
        <button className={styles.nav_link} onClick={() => router.push('/vote')}>Vote</button>
        </nav>
      </header>
        <div className={styles.pageContent}>
        <section className={styles.heroSection}>
          <h1>About Us</h1>
          <img src="/images/us.jpg" alt="Our Team" className={styles.heroImage} />
        </section>
        <section className={styles.teamSection}>
          <div className={styles.teamMember}>
            <img src="/images/corsi.jpg" alt="Gabriel" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2>Gabriel Corsi Honório</h2>
              <p>Jane is our lead designer with a passion for creating visually stunning and user-friendly interfaces.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/nivia.jpg" alt="Nivia" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2>Nivia</h2>
              <p>Jane is our lead designer with a passion for creating visually stunning and user-friendly interfaces.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/yujia.jpg" alt="Yujia" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2>Yujia</h2>
              <p>John is our project manager who ensures everything runs smoothly and on time.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/davy.jpg" alt="Davy" className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2>Davy</h2>
              <p>John is our project manager who ensures everything runs smoothly and on time.</p>
            </div>
          </div>
        </section>
        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>We are dedicated to providing the best service possible. Our team is passionate about making a difference and delivering high-quality results.</p>
          <p>Feel free to reach out to us if you have any questions or need further information.</p>
        </section>
        </div>
    </div>
    );
};

export default Index;