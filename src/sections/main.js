import s from './../styles/sections/main.module.scss';
import c from './../contents/sections/main.json';

export default function MainSection () {
  return (
    <div className={`${s['main-section']} main-wrapper`}>
      <div className={s['main-section__content']}>
        <h2 className={s['main-section__content__title']}>
          {c['TITLE'].map((titlePartial, index) => {
            return (
              <span key={`main-section-title-${index}`}>
                {titlePartial} <br />
              </span>
            );
          })}
        </h2>

        <p className={s['main-section__content__subtitle']}>
          {c['SUBTITLE'].map((subtitlePartial, index) => {
            return (
              <span key={`main-section-title-${index}`}>
                {subtitlePartial} <br />
              </span>
            );
          })}
        </p>

        <a
          className={s['main-section__content__link']}
          href={'#teste-gratis'}>
          {c['TEST_FREE']}
        </a>
      </div>

      <div className={s['main-section__image-wrapper']}>
        <img
          className={s['main-section__image']}
          src={c['IMAGE']} alt={c['IMAGE_ALT']} />
      </div>
    </div>
  );
}
