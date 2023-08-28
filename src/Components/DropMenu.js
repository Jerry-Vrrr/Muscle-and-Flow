import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import MenuIcon from '../Images/MFmenu.png'

export default function DropMenu() {
  return (
    <Menu menuButton={<button className='menu'><img className='menu' src={MenuIcon} alt="MF menu" /> </button>} transition>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </Menu>
  );
}