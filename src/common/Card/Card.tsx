import styles from './Card.module.css';

interface IProps {
    children: React.ReactElement;
}

function Card({ children }: IProps) {
    return <div className={styles.card}>{children}</div>;
}

export default Card;
