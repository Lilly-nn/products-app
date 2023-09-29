import styles from './Button.module.scss';

export default function Button({
  value,
  type,
  disabled,
  onClick,
}: {
  value: string;
  type: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {value}
    </button>
  );
}
