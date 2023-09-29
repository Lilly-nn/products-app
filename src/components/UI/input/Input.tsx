import styles from './Input.module.scss';

export default function Input({ placeholder, text }: { placeholder: string; text: string }) {
  return (
    <div className={`${styles.container} cont`}>
      <input className={`${styles.input} input`} type='text' placeholder={placeholder} />
      <button className={`${styles.button} btn`} type='button'>
        {text}
      </button>
    </div>
  );
}
