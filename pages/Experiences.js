import { useRouter } from 'next/router';
import styles from '../styles/Experiences.module.css';


const QSM = () => {
    const router = useRouter();

    const text1 = `During my internship, I contributed to the completion of a test bench designed to simulate railway tracks and detect defects under controlled conditions. The system consisted of a motor-driven wheel, a linear camera for image capture, and sensors for real-time data acquisition, all required to operate in perfect synchronization. \n\nMy main responsibility was to integrate and program the entire control system. I developed, in C, a finite state machine (FSM) running on an STM32 with FreeRTOS, responsible for motor control, data flow management, and system coordination. Communication was implemented using CAN for motor control, USART for interfacing with a Raspberry Pi (acting as a bridge between Ethernet and the STM32), and I2C for accelerometer data acquisition. \n\nIn addition to the main board, I configured a second STM32 dedicated to data acquisition, which received pulses from the wheel encoder to ensure synchronization between image lines and acceleration values. This integration enabled time-aligned data collection, increasing the reliability of the tests. \n\nOn the PC side, I developed a Python interface integrated with ROS 2, allowing the operator to start/stop the motor, adjust its speed, and monitor, in real time, the FSM state, sensor data, captured images, and system logs. \n\nBeyond embedded programming and software integration, I was also responsible for the electrical connections for power and communication, as well as designing and 3D-printing supports and enclosures to protect and organize the system modules. \n\nThis project provided me with hands-on experience in distributed systems with multiple MCUs, embedded development with FreeRTOS, communication protocols (CAN, USART, I2C, Ethernet), ROS 2 integration, and mechanical prototyping, strengthening my ability to deliver end-to-end solutions, from hardware to software.`
    
    const text2 = `Led a team of 16 students in the annual École normale supérieure (ENS) autonomous car competition, a continuing project where each year’s team improves the previous vehicle. The project used modified remote-control car platforms equipped with a LIDAR for “farthest point” navigation, a camera for orientation detection, and rear ultrasonic sensors to prevent collisions while reversing. \n\nAs project leader, I oversaw the entire project, coordinating the work of area leads for software development, mechanical design, testing, strategy definition, and simulation. I ensured alignment between teams, maintained communication with faculty and competition organizers, and consolidated a comprehensive work plan using tools such as Gantt charts, SWOT analysis, and risk assessment, all documented in a final report. \n\nI also proposed structural improvements for future teams, creating new role divisions and refining the project workflow based on lessons learned. On competition day, in addition to leading my team, I coordinated a cross-team task force to solve a critical technical issue, ensuring the event could proceed. \n\nDespite a setback in the final race, we achieved second place overall, completing the qualification rounds undefeated and earning recognition from other teams for having one of the best-performing vehicles.`
    return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a className={styles.title} onClick={() => router.push('/')}>
          Gabriel Corsi Honório
        </a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <a  className={styles.nav_set} onClick={() => router.push('/Experiences')}>Experiences </a> 
            <a className={styles.nav_link} onClick={() => router.push('/AreaDeInteresse')}>Interest Areas</a>
            <a className={styles.nav_link} onClick={() => router.push('/contatosCV')}>
              Contacts/CV
            </a>
            <a className={styles.nav_link} onClick={() => router.push('/QuemSouEu')}>
              About me
            </a>
          </nav>
        </div>
      </header>


      <div className={styles.pageContent}>
        <main className={styles.mainContent}>


              <section className={styles.section}>
        <p className={styles.sectiontype_professional}>Professional Experience</p>
        <h2 className={styles.sectionTitle}>Embedded Systems Intern – SNCF</h2>
        <p className={styles.sectionData}>05/2025 - 08/2025</p>
        <div className={`${styles.sectionBlock}`}>
          <div className={styles.textWrapper}>
          <p className={styles.sectionText}>{text1}</p>
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <p className={styles.sectiontype_academic}>Academic Experience</p>
        <h2 className={styles.sectionTitle}>Project Leader – Autonomous Vehicle Competition</h2>
         <p className={styles.sectionData}>11/2024 - 05/2025</p>
        <div className={`${styles.sectionBlock} ${styles.reverse}`}>
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
