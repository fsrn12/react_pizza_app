import { Link } from 'react-router-dom';

const base =
  'inline-block text-sm rounded-md font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed';

const colorBase =
  'bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300';

const styles = {
  small: `${base} ${colorBase} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
  primary: `${base} ${colorBase} px-4 py-3 md:px-6 md:py-4`,
  round: `${base} ${colorBase} text-sm px-2.5 py-1 md:px-3.5 md:py-2.5`,
  secondary: `${base} border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200 px-4 py-2.5 md:px-6 md:py-3.5`,
};
const Button = function ({
  to,
  disabled = false,
  size,
  onClick = null,
  children,
}) {
  if (to) {
    return (
      <Link to={to} className={styles[size]}>
        {children}
      </Link>
    );
  }
  // if (onClick) {
  //   return (
  //     <button onClick={onClick} className={styles[size]}>
  //       {children}
  //     </button>
  //   );
  // }
  return (
    <button disabled={disabled} onClick={onClick} className={styles[size]}>
      {children}
    </button>
  );
};

export default Button;
