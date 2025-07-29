import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiResturant';
import MenuItem from './MenuItem';

// export const menuLoader = async function () {
//   const menu = await getMenu();
//   return menu;
// };
export const loader = async () => await getMenu();

const Menu = function () {
  const menu = useLoaderData();
  // console.log(menu[0]);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
