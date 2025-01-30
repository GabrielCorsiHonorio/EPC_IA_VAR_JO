import { useRouter } from 'next/router';
import styles from '../styles/QSM.module.css';


const QSM = () => {
    const router = useRouter();

    const text1 = `I am Brazilian, born and raised in São Paulo, where I spent the early years of my life. Even then, I had a natural curiosity about how things around me worked. This often led me to take objects apart and put them back together—sometimes earning scoldings from my mother when I couldn’t return them to their original state.  \n\nI remember being fascinated by cartoons like *The Adventures of Jimmy Neutron* and *Dexter’s Laboratory*, and whenever someone asked what I wanted to be when I grew up, my answer was always "an inventor." Years later, I realized that this profession existed—but under the name of engineer.  \n\nThroughout my life, I studied in several schools, as I moved frequently from city to city. What I learned most from these experiences was how to socialize and create a comfortable environment wherever I was. Today, I recognize how childhood behaviors and events play a crucial role in shaping who we become as adults.`
 
    const text2 = `My educational journey, more focused on the professional side, began when I entered high school with an integrated technical course in mechatronics. This experience was, without a doubt, one of the most defining moments of my life. It wasn’t where I discovered my interest in robotics and embedded systems—I had already developed that passion while spending time in my grandfather’s workshop, working with motors, lamps, and relays. What this period gave me was clarity on where to find what I truly wanted.  

During my technical training, I had the opportunity to explore various fields, such as machining, electrical installations, automation circuits, pneumatics, and embedded systems. Through this process, I realized that while I loved understanding mechanical systems composed of gears, pistons, and similar components, my greatest interest lay in how to control these systems—whether through microcontrollers, electronic circuits, or integrated circuits. That’s how I discovered that my path was in electrical engineering.  

During my undergraduate studies, despite the challenges, I never stopped saying that I loved what I was doing. My favorite experiences were in the laboratory—designing circuits, conducting research, and solving problems to meet specifications and requirements. I always preferred tackling practical challenges, thinking critically, analyzing, and arriving at hypotheses and solutions rather than simply testing my knowledge through exams.  

Studying at a prestigious university in Brazil gave me the opportunity to take on one of the biggest challenges of my life: moving to another continent to continue my studies, thanks to a dual-degree program. This journey was far from easy, and I had to push myself multiple times. Like when, during the pandemic, I was preparing for university entrance exams while finishing my technical degree thesis, or when I trained my English conversation skills just days before the dual-degree interview and later studied French grammar every day before my university classes. I learned both languages on my own.  

Today, I see that I’m still passionate about control systems projects, and I also take pride in the knowledge I’ve gained in areas like mechanics and programming—fields that only enrich and enhance my professional growth.`
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


              <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Childhood</h2>
        <div className={`${styles.sectionBlock}`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/images/childhood.jpg" 
              alt="Descrição da imagem" 
              className={styles.circleImage} 
            />
          </div>
          <div className={styles.textWrapper}>
          <p className={styles.sectionText}>{text1}</p>
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional growth</h2>
        <div className={`${styles.sectionBlock} ${styles.reverse}`}>
          <div className={styles.imageWrapper}>
            <img 
              src="/images/fotoCV.jpg" 
              alt="Descrição da imagem" 
              className={styles.circleImage} 
            />
          </div>
          <div className={styles.textWrapper}>
          <p className={styles.sectionText}>{text2}</p>
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

export default QSM;