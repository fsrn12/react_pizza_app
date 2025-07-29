import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

const Username = function () {
  const { username } = useSelector(getUser);
  if (!username) {
    return null;
  }
  return (
    <div>
      <p className="hidden text-sm font-semibold md:block">{username}</p>
    </div>
  );
};

export default Username;
