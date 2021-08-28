import s from './../styles/sections/tools.module.scss';
import c from '../contents/sections/tools.json';

export default function ToolsSection () {
  return (
    <div className={`${s['tools-section']} main-wrapper`}>
      <div className={s['tools-section__content']}>
        <h2 className={s['tools-section__content__title']}>{c['TITLE']}</h2>

        <p className={s['tools-section__content__subtitle']}>{c['SUBTITLE']}</p>

        <p className={s['tools-section__content__text']}>{c['TEXT_1']}</p>
        <p className={s['tools-section__content__text']}>{c['TEXT_2']}</p>
      </div>

      <div className={s['tools-section__image-wrapper']}>
        <img
          className={s['tools-section__image']}
          src={c['IMAGE']} alt={c['IMAGE_ALT']} />
      </div>
    </div>
  );
}
