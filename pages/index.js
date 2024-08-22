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
          <img src="/images/us.jpg" alt="Our Team" className={styles.heroImage} />
          <img src="/images/us2.jpg" alt="Our Team" className={styles.heroImage} />
        </section>
        <section className={styles.teamSection}>
          <div className={styles.teamMember}>
            <img src="/images/corsi.jpg" alt="Gabriel" className={styles.memberImage} />
            <div className={styles.memberInfo}>
            <h1>Gabriel Corsi Honório</h1>
              <h3>Directeur de la Recherche et du Développement Technologique</h3>
              <p>Responsable de diriger les initiatives de recherche et développement technologique de l'entreprise, supervisant la création de solutions innovantes pour les problèmes d'arbitrage dans le sport. Il coordonne les équipes de développement et s'assure que les solutions sont viables, efficaces et alignées avec les besoins du marché.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/nivia.jpg" alt="Nivia" className={styles.memberImage} />
            <div className={styles.memberInfo}>
            <h1>Nivia Araujo da Nóbrega</h1>
            <h3>Directrice des Opérations et de la Mise en Œuvre</h3>
              <p>Dirige les opérations quotidiennes de l'entreprise, garantissant que les solutions technologiques sont mises en œuvre avec succès dans différents contextes sportifs. Elle supervise la planification, l'exécution et le suivi des projets de mise en œuvre, assurant la qualité et l'efficacité des services offerts.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/yujia.jpg" alt="Yujia" className={styles.memberImage} />
            <div className={styles.memberInfo}>
            <h1>Yujia Guo</h1>
            <h3>Directrice de l'Intelligence Artificielle et de l'Analyse des Données</h3>
              <p>Responsable du développement et de l'application d'algorithmes d'intelligence artificielle et d'analyse de données pour améliorer la précision des décisions d'arbitrage. Elle dirige l'équipe de scientifiques de données et d'ingénieurs en IA, en se concentrant sur la création de modèles applicables à différentes disciplines sportives.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
          
            <img src="/images/davy.jpg" alt="Davy" className={styles.memberImage} />
            <div className={styles.memberInfo}>
            <h1>Davy Araujo Sa Teles</h1>
            <h3>Directeur de l'Innovation et des Nouveaux Marchés</h3>
              <p>Concentré sur l'expansion et l'innovation continue de l'entreprise, Davy explore de nouvelles opportunités commerciales et des partenariats stratégiques. Il identifie les tendances émergentes et s'assure que l'entreprise est à la pointe des solutions technologiques dans le sport, tout en promouvant l'adoption des innovations développées.</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/vitor.jpg" alt="vitor" className={styles.memberImage} />
            <div className={styles.memberInfo}>
            <h1>Vitor Marques</h1>
            <h3>Directeur des Relations Institutionnelles et de la Conformité</h3>
              <p>Gère les relations de l'entreprise avec les fédérations sportives, les entités réglementaires et d'autres parties prenantes, garantissant que les solutions technologiques respectent les réglementations et les normes du secteur. Vitor est également responsable de s'assurer que toutes les pratiques de l'entreprise sont conformes aux lois et réglementations applicables.</p>
            </div>
          </div>
        </section>
        <section className={styles.missionSection}>
          <h1>Notre Mission</h1>
          <h3>Nous nous engageons à fournir le meilleur service possible. Notre équipe est passionnée par l’idée de faire la différence et de fournir des résultats de haute qualité.</h3>
          <p>Nous innovons pour transformer l'arbitrage sportif avec des solutions technologiques avancées, garantissant des décisions précises et justes. En intégrant l'intelligence artificielle et l'analyse de données, nous répondons aux besoins des fédérations et des athlètes, tout en établissant de nouveaux standards d'excellence dans le sport. Notre engagement est d'assurer un jeu plus équitable et passionnant pour tous.</p>
        </section>

        <footer className={styles.footer}>
        <p>&copy; 2024 Blog Technologique</p>
      </footer>
        </div>
    </div>
    );
};

export default Index;