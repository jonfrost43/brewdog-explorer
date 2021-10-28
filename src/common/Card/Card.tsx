import styles from './Card.module.css';

interface IProps {
    children: React.ReactElement | React.ReactElement[];
    className?: string | string[];
}

function Card({ children, className }: IProps) {
    const classNames = [styles.card, className].join(' ');
    return <div className={classNames}>{children}</div>;
}

export default Card;
