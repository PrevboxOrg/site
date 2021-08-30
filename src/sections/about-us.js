import s from './../styles/sections/about-us.module.scss';
import c from '../contents/sections/about-us.json';

export default function AboutUsSection () {
  return (
    <div className={`${s['about-us-section']} main-wrapper`} id="sobre-nos">
      <div className={s['about-us-section__content']}>
        <h2 className={s['about-us-section__content__title']}>{c['TITLE']}</h2>

        <p className={s['about-us-section__content__subtitle']}>{c['SUBTITLE']}</p>

        <p className={s['about-us-section__content__text']}>{c['TEXT_1']}</p>
        <p className={s['about-us-section__content__text']}>{c['TEXT_2']}</p>
      </div>

      <div className={s['about-us-section__image-wrapper']}>
        <img
          className={s['about-us-section__image']}
          src={c['IMAGE']} alt={c['IMAGE_ALT']} />
      </div>
    </div>
  );
}
