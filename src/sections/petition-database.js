import s from './../styles/sections/petition-database.module.scss';
import c from '../contents/sections/petition-database.json';

export default function PetitionDatabaseSection () {
  return (
    <div className={`${s['petition-database-section']} main-wrapper`} id="peticoes">
      <div className={s['petition-database-section__image-wrapper']}>
        <img
          className={s['petition-database-section__image']}
          src={c['IMAGE']} alt={c['IMAGE_ALT']} />
      </div>

      <div className={s['petition-database-section__content']}>
        <h2 className={s['petition-database-section__content__title']}>
          {c['TITLE']}
        </h2>

        <p className={s['petition-database-section__content__subtitle']}>
          {c['SUBTITLE']}
        </p>

        <ul className={s['petition-database-section__content__list']}>
          {c['PETITIONS'].map((petition, index) => {
            return (
              <li key={`petition-${index}`}>{petition}</li>
            );
          })}
        </ul>

        <a
          className={s['petition-database-section__content__link']}
          href={'#teste-gratis'}>
          {c['KNOW_MORE']}
        </a>
      </div>
    </div>
  );
}
