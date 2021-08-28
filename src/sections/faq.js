import s from './../styles/sections/faq.module.scss';
import c from '../contents/sections/faq.json';

export default function FAQSection () {

  function openQuestion (id) {
    const allQuestions = document.querySelectorAll(`.${s['faq-section__question']}`);
    allQuestions.forEach((element) => {
      element.classList.remove(s['faq-section__question--active']);
    });

    const activeQuestion = document.getElementById(id);
    activeQuestion.classList.add(s['faq-section__question--active']);
  }

  return (
    <div className={s['faq-section']}>
      <div className={`main-wrapper ${s['faq-section__wrapper']}`}>
        <h2 className={s['faq-section__title']}>{c['TITLE']}</h2>
        <p className={s['faq-section__subtitle']}>{c['SUBTITLE']}</p>

        {c['FAQ'].map((faq, index) => {
          const id = `faq-question-${index}`;

          return (
            <div className={s['faq-section__question']} key={id} id={id}>
              <div className={s['faq-section__question__text']} onClick={() => openQuestion(id)}>
                <div className={s['faq-section__question__plus']}>
                  <div></div>
                  <div></div>
                </div>
                <span>{faq.QUESTION}</span>
              </div>
              <p className={s['faq-section__question__answer']}>{faq.ANSWER}</p>
            </div>
          );
        })}
      </div>
      <div className={s['faq-section__background-front']}></div>
      <div className={s['faq-section__background-back']}></div>
    </div>
  );
}
