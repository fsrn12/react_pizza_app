import { Link, useNavigate } from 'react-router-dom';

const LinkButton = function ({ to, children }) {
  const className = 'text-sm text-blue-400 hover:text-blue-600 hover:underline';
  if (to === '-1') {
    const navigate = useNavigate();
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
