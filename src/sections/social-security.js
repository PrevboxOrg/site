import s from './../styles/sections/social-security.module.scss';
import c from './../contents/sections/social-security.json';

export default function SocialSecuritySection () {
  return (
    <div className={s['social-security-section']}>
      <div className={'main-wrapper'}></div>
      <div className={s['social-security-section__background-front']}></div>
      <div className={s['social-security-section__background-back']}></div>
    </div>
  );
}
