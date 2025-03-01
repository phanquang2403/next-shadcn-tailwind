import Link from 'next/link';
import ButtonLogout from './button-logout';
import { ModeToggle } from './toggle-theme';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/login'}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={'/register'}>Đăng Ký</Link>
        </li>
        <ButtonLogout />
      </ul>
      <ModeToggle />
    </div>
  );
};

export default Header;
