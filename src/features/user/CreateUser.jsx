import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateName } from './userSlice';

const CreateUser = function () {
  // const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let username = '';
  const handleSubmit = function (e) {
    e.preventDefault();
    username = e.target.elements.username.value;
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome! Please start by entering your name
      </p>
      <input
        type="text"
        placeholder="Enter Full Name"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        name="username"
        className="input mb-8 w-72"
      />
      {username !== '' && (
        <div>
          <Button size="primary">Start Ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
