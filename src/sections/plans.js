import s from './../styles/sections/plans.module.scss';
import c from '../contents/sections/plans.json';

export default function PlansSection () {
  return (
    <div className={s['plans-section']} id="assinaturas">
      <div className={`main-wrapper ${s['plans-section__wrapper']}`}>
        <h2 className={s['plans-section__title']}>{c['TITLE']}</h2>
        <p className={s['plans-section__subtitle']}>{c['SUBTITLE']}</p>

        <div className={s['plans-section__plans']}>
          <div className={s['plan']}>
            <p className={s['plan__title']}>{c['PLAN_INITIAL'].TITLE}</p>
            <img className={s['plan__image']} src={c['PLAN_INITIAL'].IMAGE} alt={c['PLAN_INITIAL'].TITLE} />

            <span className={s['plan__price']}>
              {c['PLAN_INITIAL'].PRICE.VALUE}

              <span className={s['plan__price__currency']}>{c['PLAN_INITIAL'].PRICE.CURRENCY}</span>
              <span className={s['plan__price__cents']}>,{c['PLAN_INITIAL'].PRICE.VALUE_CENTS}</span>
              <span className={s['plan__price__period']}>{c['PLAN_INITIAL'].PRICE.PERIOD}</span>
            </span>

            {c['PLAN_INITIAL'].BENEFITS.map((benefit, index) => {
              return (
                <p className={s['plan__benefit']} key={`benefit-initial-${index}`}>{benefit}</p>
              );
            })}

            <a className={s['plan__button']} href="#">
              {c['PLAN_INITIAL'].BUTTON}
            </a>
          </div>

          <div className={s['plan']}>
            <p className={s['plan__title']}>{c['PLAN_ANTECIPATED'].TITLE}</p>
            <img className={s['plan__image']} src={c['PLAN_ANTECIPATED'].IMAGE} alt={c['PLAN_ANTECIPATED'].TITLE} />

            <span className={s['plan__price']}>
              <span className={s['plan__price__currency']}>{c['PLAN_ANTECIPATED'].PRICE.CURRENCY}</span>
              <span className={s['plan__price__value']}>{c['PLAN_ANTECIPATED'].PRICE.VALUE}</span>
              <span className={s['plan__price__cents']}>,{c['PLAN_ANTECIPATED'].PRICE.VALUE_CENTS}</span>
              <span className={s['plan__price__period']}>{c['PLAN_ANTECIPATED'].PRICE.PERIOD}</span>
            </span>

            {c['PLAN_ANTECIPATED'].BENEFITS.map((benefit, index) => {
              return (
                <p className={s['plan__benefit']} key={`benefit-initial-${index}`}>{benefit}</p>
              );
            })}

            <a className={s['plan__button']} href="#">
              {c['PLAN_ANTECIPATED'].BUTTON}
            </a>
          </div>

          <div className={s['plan']}>
            <p className={s['plan__title']}>{c['PLAN_PREMIUM'].TITLE}</p>
            <img className={s['plan__image']} src={c['PLAN_PREMIUM'].IMAGE} alt={c['PLAN_PREMIUM'].TITLE} />

            <span className={s['plan__price']}>
              <span className={s['plan__price__currency']}>{c['PLAN_PREMIUM'].PRICE.CURRENCY}</span>
              <span className={s['plan__price__value']}>{c['PLAN_PREMIUM'].PRICE.VALUE}</span>
              <span className={s['plan__price__cents']}>,{c['PLAN_PREMIUM'].PRICE.VALUE_CENTS}</span>
              <span className={s['plan__price__period']}>{c['PLAN_PREMIUM'].PRICE.PERIOD}</span>
            </span>

            {c['PLAN_PREMIUM'].BENEFITS.map((benefit, index) => {
              return (
                <p className={s['plan__benefit']} key={`benefit-initial-${index}`}>{benefit}</p>
              );
            })}

            <a className={s['plan__button']} href="#">
              {c['PLAN_PREMIUM'].BUTTON}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}