import { useRouter } from 'next/router';
import styles from '../styles/AdI.module.css';
import { useState } from "react";

const AdI = () => {
  const router = useRouter();

  const [tags, setTags] = useState(["Inteligencia artificial", "Controle automatico de veiculos", "Robotica", "Controle de energia"]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      title: "Project 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["Inteligencia artificial", "Controle automatico de veiculos"],
    },
    {
      id: 2,
      title: "Project 2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Controle automatico de veiculos", "Robotica", "Controle de energia"],
    },
    {
      id: 3,
      title: "Project 3",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      tags: ["Inteligencia artificial", "Controle de energia"],
    },
    {
      id: 4,
      title: "Project 4",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      tags: ["Inteligencia artificial", "Controle automatico de veiculos", "Robotica", "Controle de energia"],
    },
  ]);

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
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <a className={styles.title} onClick={() => router.push('/')}>
          Gabriel Corsi Honório
        </a>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
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
          This space is designed to share ideas for projects I'm interested in developing or launching. The goal is to engage with people and companies who share similar interests. 
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
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdI;
