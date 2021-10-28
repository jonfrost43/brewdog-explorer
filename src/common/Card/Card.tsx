import styles from './Card.module.css';

interface IProps {
    children: React.ReactElement | React.ReactElement[];
    className?: string | string[];
    linkOnly?: boolean;
}

function Card({ children, className, linkOnly }: IProps) {
    const classNames = [styles.card, className, linkOnly ? styles.link : ''].join(' ');
    return <div className={classNames}>{children}</div>;
}

export default Card;
