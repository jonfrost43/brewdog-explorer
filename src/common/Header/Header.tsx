import styles from './Header.module.css';

interface IProps {
    headingText: string;
    subHeadingText?: string;
}

function Header({ headingText, subHeadingText }: IProps) {
    return (
        <header className={styles.header}>
            <h2 className={styles.heading}>{headingText}</h2>
            <p className={styles.tagline}>{subHeadingText}</p>
        </header>
    );
}

export default Header;
