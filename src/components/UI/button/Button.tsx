import styles from './Button.module.scss';

export default function Button({ value, type }: { value: string; type: string }) {
  return <button className={styles.button}>{value}</button>;
}
