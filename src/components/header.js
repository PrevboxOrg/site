import Link from 'next/link';
import s from './../styles/components/header.module.scss';
import c from './../contents/components/header.json';

export default function Header () {
  return (
    <div className={s['header']}>
      <img
        className={s['header__logo']}
        src={c['LOGO']} alt={c['LOGO_ALT']} />

      <ul className={s['header__menu']}>
        {c['MENU'].map((menuItem, index) => {
          return (
            <li key={`header-menu-item-${index}`}>
              <Link href={menuItem.LINK}>
                <a className={s['header__menu__item']} target={menuItem.EXTERNAL ? '_blank' : '_self'}>
                  {menuItem.TEXT}
                </a>
              </Link>
            </li>
          );
        })}

        <li>
          <button className={s['header__menu__login-button']}>
            {c['LOGIN_BUTTON']}
          </button>
        </li>
      </ul>
    </div>
  );
}
