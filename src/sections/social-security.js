import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import cn from 'classnames';
import s from './../styles/sections/social-security.module.scss';
import c from './../contents/sections/social-security.json';

export default function SocialSecuritySection () {
  const [activeVerticarSlider, setActiveVerticalSlider] = useState(0);

  SwiperCore.use([Pagination]);

  return (
    <div className={s['social-security-section']} id="calculos">
      <div className={`main-wrapper ${s['social-security-section__wrapper']}`}>
        <h2 className={s['social-security-section__title']}>{c['TITLE']}</h2>
        <p className={s['social-security-section__subtitle']}>{c['SUBTITLE']}</p>

        <div className={s['categories']}>
          <button
            className={cn({
              [s['categories__category']]: true,
              [s['categories__category--active']]: activeVerticarSlider === 0
            })}
            onClick={() => setActiveVerticalSlider(0)}>
            {c['BENEFITS'].NAME}
          </button>

          <button
            className={cn({
              [s['categories__category']]: true,
              [s['categories__category--active']]: activeVerticarSlider === 1
            })}
            onClick={() => setActiveVerticalSlider(1)}>
            {c['REVIEWS'].NAME}
          </button>

          <button
            className={cn({
              [s['categories__category']]: true,
              [s['categories__category--active']]: activeVerticarSlider === 2
            })}
            onClick={() => setActiveVerticalSlider(2)}>
            {c['OTHERS'].NAME}
          </button>
        </div>

        <div className={s['slides']}>
          <div className={s['slides__vertical-slider']} style={{ transform: `translateY(${activeVerticarSlider * -33.3333333333333333}%)` }}>
            <Swiper
              className={s['slides__wrapper']}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerGroup={4}
              grabCursor={true}
              pagination={{ clickable: true }}
            >
              {c['BENEFITS'].ITEMS.map((item, index) => {
                return (
                  <SwiperSlide key={`item-benefit-${index}`}>
                    <div className={s['slide-item']}>
                      <img
                        className={s['slide-item__image']}
                        src={`/sections/calculos-previdenciarios/${item.IMG}`}
                        alt={item.TITLE} />

                      <p className={s['slide-item__title']}>
                        {item.TITLE}
                      </p>

                      {item.DESCRIPTIONS.map((itemDescription, itemDescriptionIndex) => {
                        return (
                          <p
                            className={s['slide-item__description']}
                            key={`item-benefit-${index}-description-${itemDescriptionIndex}`}>
                            {itemDescription}
                          </p>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Swiper
              className={s['slides__wrapper']}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerGroup={4}
              grabCursor={true}
              pagination={{ clickable: true }}
            >
              {c['REVIEWS'].ITEMS.map((item, index) => {
                return (
                  <SwiperSlide key={`item-benefit-${index}`}>
                    <div className={s['slide-item']}>
                      <img
                        className={s['slide-item__image']}
                        src={`/sections/calculos-previdenciarios/${item.IMG}`}
                        alt={item.TITLE} />

                      <p className={s['slide-item__title']}>
                        {item.TITLE}
                      </p>

                      {item.DESCRIPTIONS.map((itemDescription, itemDescriptionIndex) => {
                        return (
                          <p
                            className={s['slide-item__description']}
                            key={`item-benefit-${index}-description-${itemDescriptionIndex}`}>
                            {itemDescription}
                          </p>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Swiper
              className={s['slides__wrapper']}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerGroup={4}
              grabCursor={true}
              pagination={{ clickable: true }}
            >
              {c['OTHERS'].ITEMS.map((item, index) => {
                return (
                  <SwiperSlide key={`item-benefit-${index}`}>
                    <div className={s['slide-item']}>
                      <img
                        className={s['slide-item__image']}
                        src={`/sections/calculos-previdenciarios/${item.IMG}`}
                        alt={item.TITLE} />

                      <p className={s['slide-item__title']}>
                        {item.TITLE}
                      </p>

                      {item.DESCRIPTIONS.map((itemDescription, itemDescriptionIndex) => {
                        return (
                          <p
                            className={s['slide-item__description']}
                            key={`item-benefit-${index}-description-${itemDescriptionIndex}`}>
                            {itemDescription}
                          </p>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={s['social-security-section__background-front']}></div>
      <div className={s['social-security-section__background-back']}></div>
    </div>
  );
}
