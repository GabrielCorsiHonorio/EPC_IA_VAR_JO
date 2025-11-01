import { useRouter } from 'next/router';
import styles from '../styles/AdI.module.css';
import { useState } from "react";
import Head from 'next/head';

const AdI = () => {
  const router = useRouter();

  const [tags, setTags] = useState(["Autonomous vehicles","Control systems", "Optimized control models", "Battery Energy Storage", "Energy market dynamics", "IoT", "Smart homes", "Health sensors", "Biomechanics"]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      title: "Exploring Quick-Response Control Systems Through Autonomous Vehicle Development",
      text: "I believe my recent experiences with the autonomous car project I'm part of focused on a small-scale, toy-like vehicle, have been fueling my growing interest in control systems. I know that various automatic braking technologies already exist and have been implemented in recent years, but I feel that something more is needed: a quick response to situations where human perception is limited. Decisions that are more complex than simply braking, such as swerving, maneuvering, and acting to resolve extremely challenging scenarios for us humans. \n\nMy intention is not for cars to become 100% autonomous, with everything left to the machines. Humans would still be the primary drivers of the vehicle, but in risky situations, like a person suddenly crossing the street or a runaway truck coming from behind, the system would take control and make the best decision. This approach does not aim to turn cars into fully autonomous vehicles but rather to create a quick-response technology that is less complex and, consequently, easier to disseminate. \n\nThe small-scale autonomous car model I’m developing in the project uses LIDAR and a camera as the foundation for navigation. I believe that integrating these sensors with an optimized control model has tremendous potential to reduce the number of vehicle related accidents.  \nFor me, it’s unacceptable that we continue to face so many accidents on a daily basis accidents that could be avoided through faster and more efficient control systems.  ",
      tags: ["Autonomous vehicles","Control systems", "Optimized control models"],
    },
    {
      id: 2,
      title: "Optimizing Battery Energy Storage Systems for Residential Solar Energy Use",
      text: "This interest stems from a research project I developed and wish to continue. The idea is to harness residential electricity generation through photovoltaic panels and store that energy. In contexts where there is no established electricity market, the project aims to complement the supply and reduce demand when solar production is no longer available. For example, in a house with photovoltaic panels, energy can be generated during the daylight hours. However, if the demand is low during this period, there might be underutilization of the generated energy.\n\nNow, in contexts with already established electricity markets, the use of batteries can lead to new behaviors in the market. The question would be to decide, during periods of high energy production and low demand, whether the best option would be to sell the energy or charge the battery to meet high demand in the home or even sell this energy in the future. There are countless possibilities, and I believe that finding the ideal sizing for these battery systems can drive the larger-scale use of renewable energy. The next step would be to develop a system that controls decisions such as storing, selling, supplying the residence, buying from the grid, among other options. This type of behavior, where people produce energy (not as their primary source of income) and consume it, characterizes the \"prosumer\" class.",
      tags: ["Battery Energy Storage", "Optimized control models", "Energy market dynamics"],
    },
    {
      id: 3,
      title: "Integrating IoT and Health Sensors for Enhanced Safety and Emergency Response in Smart Homes",
      text: "After developing a 100% personal IoT project involving actuators and sensors controlled by a web application, I realized the vast array of opportunities these technologies offer to solve everyday problems. Although smart homes are no longer a novelty, my idea is to go further by integrating health sensors implemented through well-known wearables not only for monitoring but also to provide responses in emergency situations. The main focus would be on people living alone, with features aimed at managing emergencies, such as the ability to call ambulances, for example. The concept of this idea is still in a more abstract stage, but it is based on the principle that we can integrate residential technologies to promote greater safety and health. \n\nNote: This approach could also be adapted for situations like gender based physical assaults or home invasions, for example.",
      tags: ["IoT", "Smart homes", "Health technology"],
    },
    {
      id: 4,
      title: "Advancing Biomechanical Devices for Improved Mobility and Health through Technology Integration",
      text: "My interest in this type of project doesn’t stem from the goal of making major discoveries, but rather from the popularization of technologies, such as cost reduction, testing new materials, improving sensors and control systems, among others. I believe that many devices related to biomechanics can benefit people in various situations, especially those with mobility difficulties caused by illnesses or accidents.",
      tags: ["Biomechanics", "Health technology","Optimized control models" ],
    },
  ]);

  const text_note = `This space is designed to share ideas for projects I'm interested in developing or launching. The goal is to engage with people and companies who share similar interests.`


  // Adiciona ou remove tags selecionadas para o filtro
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filtra os blocos com base nas tags selecionadas
  const filteredBlocks = selectedTags.length
    ? blocks.filter((block) =>
        selectedTags.every((tag) => block.tags.includes(tag))
      )
    : blocks;

  return (

          <>
     <Head>
        <link rel="icon" type="image/png" href="/images/page_icon.png" />
      </Head> 


    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a className={styles.title} onClick={() => router.push('/')}>
          Gabriel Corsi Honório
        </a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <a  className={styles.nav_link} onClick={() => router.push('/Experiences')}>
              Experiences
              </a>
            <a className={styles.nav_set}>Interest Areas</a>
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
          <div className={styles.sectionBlock}>
          <p className={styles.sectionText}>
          {text_note}
          </p>
          </div>
        </section>
          <div className={styles.tagsContainer}>
            <h3 className={styles.tagsTitle}>Tags:</h3>
            <div className={styles.tagsList}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`${styles.tagButton} ${
                    selectedTags.includes(tag) ? styles.activeTag : ""
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterContainer}>
          <img 
                src="/images/filter-icon.png" 
                alt="Filter icon" 
                className={styles.filterIcon} 
                onClick={() => console.log('Filtro clicado')} 
              />
            <span className={styles.filterText}>
              Filtering by: {selectedTags.join(", ") || "None"}
            </span>
          </div>

          <div className={styles.blocksContainer}>
            {filteredBlocks.map((block) => (
              <section key={block.id} className={styles.block}>
                <div className={styles.blockTags}>
                  {block.tags.map((tag) => (
                    <span key={tag} className={styles.blockTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className={styles.blockTitle}>{block.title}</h2>
                <p className={styles.blockText}>{block.text}</p>
                {/* {paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))} */}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>

    </>
  );
};

export default AdI;
