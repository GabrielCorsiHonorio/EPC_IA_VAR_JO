import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/vote.module.css';

const Index = () => {
    const router = useRouter();
    const [selections, setSelections] = useState([null, null, null]);
    const [results, setResults] = useState([null, null, null]);

    const handleSelection = (choice, index) => {
        const newSelections = [...selections];
        newSelections[index] = choice;
        setSelections(newSelections);
    };

    const handleVerification = () => {
        const correctAnswers = ['Verdadeiro', 'Falso', 'Verdadeiro'];
        const newResults = selections.map((selection, index) => {
            if (selection === null) {
                return 'Por favor, faça uma escolha.';
            } else if (selection === correctAnswers[index]) {
                return 'Correto!';
            } else {
                return 'Errado!';
            }
        });
        setResults(newResults);
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <nav className={styles.nav}>   
                    <button className={styles.nav_link} onClick={() => router.push('/')}>Home</button>
                    <button className={styles.nav_link} onClick={() => router.push('/infos')}>Infos</button>
                </nav>
            </header>

            <div className={styles.blocksContainer}>
                {[0, 1, 2].map((index) => (
                    <div className={styles.block} key={index}>
                        <img src={`/images/impedimento${index + 1}.jpg`} alt={`Imagem ${index + 1}`} className={styles.image} />
                        <div className={styles.buttons}>
                            <button 
                                className={`${styles.optionButton} ${selections[index] === 'Verdadeiro' ? styles.selected : ''}`} 
                                onClick={() => handleSelection('Verdadeiro', index)}
                            >
                                Verdadeiro
                            </button>
                            <button 
                                className={`${styles.optionButton} ${selections[index] === 'Falso' ? styles.selected : ''}`} 
                                onClick={() => handleSelection('Falso', index)}
                            >
                                Falso
                            </button>
                        </div>
                        {results[index] && <p className={styles.result}>{results[index]}</p>}
                    </div>
                ))}
            </div>

            <button className={styles.verifyButton} onClick={handleVerification}>
                Verificar
            </button>
        </div>
    );
};

export default Index;
