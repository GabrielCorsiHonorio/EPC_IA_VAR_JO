import { useRouter } from 'next/router';
import styles from '../styles/infos.module.css';


const Index = () => {
    const router = useRouter();


    return (
    <div className={styles.pageContainer}>
    <header className={styles.header}>
        <nav className={styles.nav}>   
        <button className={styles.nav_link} onClick={() => router.push('/')}>À propos de nous</button>
        <button className={styles.nav_set} >Information</button>
        <button className={styles.nav_link} onClick={() => router.push('/vote')}>Vote</button>
        </nav>
      </header>
        <div className={styles.pageContent}>
        <main className={styles.mainContent}>
        <section className={styles.section} id="vue-ensemble">
          <h2 className={styles.sectionTitle}>Vue d'Ensemble</h2>
          <p className={styles.sectionText}>
            L'arbitrage des jeux, qu'il s'agisse de sports professionnels ou
            amateurs, est une tâche exigeante nécessitant une grande précision
            et une rapidité dans la prise de décisions. L'incorporation de
            technologies portables peut considérablement améliorer l'efficacité,
            la précision et l'impartialité des décisions des arbitres, réduisant
            les erreurs humaines et permettant une meilleure expérience pour
            tous les participants. Ce projet vise à développer une solution
            innovante de technologie portable pour les arbitres, utilisant des
            capteurs avancés et des systèmes de communication en temps réel, pour
            soutenir la prise de décisions pendant les jeux.
          </p>
        </section>

        <section className={styles.section} id="objectifs">
          <h2 className={styles.sectionTitle}>Objectifs</h2>
          <ul className={styles.sectionList}>
            <li className={styles.listItem}>
              <strong>Amélioration de la Prise de Décisions:</strong> Équiper les
              arbitres de capteurs capables de détecter des événements critiques,
              tels que les contacts avec le ballon, les fautes ou les situations de
              hors-jeu, et de fournir des alertes instantanées.
            </li>
            <li className={styles.listItem}>
              <strong>Amélioration de la Communication :</strong> Développer un
              système de communication en temps réel entre les arbitres (central et
              assistants), avec un retour haptique ou auditif, pour une coordination
              rapide et efficace.
            </li>
            <li className={styles.listItem}>
              <strong>Surveillance de l'État Physique de l'Arbitre :</strong> Mettre
              en place des capteurs qui surveillent la fréquence cardiaque, le niveau
              de stress et la fatigue, avec des alertes en cas de conditions extrêmes
              pouvant compromettre la prise de décisions.
            </li>
            <li className={styles.listItem}>
              <strong>Intégration avec les Technologies Existantes :</strong> Veiller
              à ce que la solution soit compatible avec les systèmes d'assistance
              vidéo à l'arbitrage (VAR) et d'autres ressources technologiques déjà
              utilisées dans le sport.
            </li>
            <li className={styles.listItem}>
              <strong>Ergonomie et Confort :</strong> Développer des dispositifs
              légers, durables et confortables, qui n'interfèrent pas avec la
              mobilité de l'arbitre pendant le match.
            </li>
          </ul>
        </section>

        <section className={styles.section} id="specifications">
          <h2 className={styles.sectionTitle}>Spécifications Techniques</h2>
          <ul className={styles.sectionList}>
            <li className={styles.listItem}>
              <strong>Capteurs de Détection d'Événements :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Accéléromètres et gyroscopes pour détecter des mouvements spécifiques.
                </li>
                <li className={styles.listItem}>
                  Capteurs de proximité et de contact pour identifier les interactions
                  physiques, comme les fautes ou les contacts avec le ballon.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Système de Communication :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Dispositif intra-auriculaire ou de poignet avec connectivité Bluetooth à
                  faible latence.
                </li>
                <li className={styles.listItem}>
                  Retour haptique pour des communications discrètes entre les arbitres.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Surveillance de la Santé :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Moniteur cardiaque et de stress intégré dans la tenue, avec alertes
                  automatiques.
                </li>
                <li className={styles.listItem}>
                  Application mobile associée pour l'analyse post-match des conditions
                  physiques et psychologiques.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Connectivité et Intégration :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Compatibilité avec les systèmes d'assistance vidéo à l'arbitrage et
                  autres technologies d'analyse en temps réel.
                </li>
                <li className={styles.listItem}>
                  Interface utilisateur intuitive pour des réglages rapides et des
                  rapports post-match.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Design et Matériaux :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Matériau résistant à l'eau et à la sueur.
                </li>
                <li className={styles.listItem}>
                  Design léger et adaptable au corps, garantissant un confort pendant
                  de longues périodes.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section} id="jalons">
          <h2 className={styles.sectionTitle}>Jalons du Projet</h2>
          <ul className={styles.sectionList}>
            <li className={styles.listItem}>
              <strong>Phase de Recherche et Développement (0-3 mois) :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Analyse du marché et des exigences spécifiques des arbitres.
                </li>
                <li className={styles.listItem}>
                  Développement de premiers prototypes.
                </li>
                <li className={styles.listItem}>
                  Tests en laboratoire axés sur l'ergonomie et la fonctionnalité de base.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Phase de Tests sur le Terrain (4-6 mois) :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Mise en œuvre de tests lors de matchs réels, en collaboration avec des
                  ligues sportives.
                </li>
                <li className={styles.listItem}>
                  Collecte des retours d'expérience des arbitres et ajustements techniques
                  basés sur les résultats obtenus.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Phase d'Intégration et d'Amélioration (7-9 mois) :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Intégration de la technologie avec les systèmes VAR et autres dispositifs
                  de soutien.
                </li>
                <li className={styles.listItem}>
                  Amélioration de l'interface utilisateur et du design des dispositifs.
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <strong>Phase de Fabrication et de Distribution (10-12 mois) :</strong>
              <ul className={styles.nestedList}>
                <li className={styles.listItem}>
                  Lancement de la production à grande échelle.
                </li>
                <li className={styles.listItem}>
                  Distribution aux organisations sportives et mise en place de formations
                  pour les arbitres.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Blog Technologique</p>
      </footer>
        </div>
    </div>
    );
};

export default Index;