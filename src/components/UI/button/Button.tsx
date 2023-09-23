import styles from './Button.module.scss';

export default function Button({
  value,
  type,
  disabled,
}: {
  value: string;
  type: string;
  disabled?: boolean;
}) {
  return (
    <button disabled={disabled} className={styles.button}>
      {value}
    </button>
  );
}
