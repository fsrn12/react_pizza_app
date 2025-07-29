import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

const Home = function () {
  const { username } = useSelector((store) => store.user);
  return (
    <div className="my-10 px-6 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        Best Italian Pizza
        <br />
        <span className="text-yellow-500">Freshly made in wood fire oven</span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" size="primary">
          Browse Menu
        </Button>
      )}
    </div>
  );
};

export default Home;
