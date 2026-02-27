export default function Advantages() {
  return (
    <>
      <section id="advantages">
        <div className="container">
          <div className="section-label">Переваги</div>
          <h2 className="section-title reveal">Чому обирають нас</h2>
          <div className="red-divider"></div>
          
          <div className="adv-grid">
            <div className="adv-card">
              <div className="adv-num">01</div>
              <div className="adv-title">Персональний менеджер</div>
              <p style={{fontSize:'14px',color:'#aaaaaa',lineHeight:'1.7',marginTop:'0',opacity:1}}>Супровід на всіх етапах запуску. Підбір формату та міста для максимально ефективного результату.</p>
            </div>
            <div className="adv-card">
              <div className="adv-num">02</div>
              <div className="adv-title">Оптові знижки</div>
              <p style={{fontSize:'14px',color:'#aaaaaa',lineHeight:'1.7',marginTop:'0',opacity:1}}>Спеціальні умови для запусків у кількох містах або по всій Україні. Вигідні пакетні пропозиції для масштабних кампаній.</p>
            </div>
            <div className="adv-card">
              <div className="adv-num">03</div>
              <div className="adv-title">Гнучкі формати розміщення</div>
              <p style={{fontSize:'14px',color:'#aaaaaa',lineHeight:'1.7',marginTop:'0',opacity:1}}>Прямий рекламний пост, нативна інтеграція або серія розміщень. Формат підбирається відповідно до ваших цілей.</p>
            </div>
            <div className="adv-card">
              <div className="adv-num">04</div>
              <div className="adv-title">Пріоритет для партнерів</div>
              <p style={{fontSize:'14px',color:'#aaaaaa',lineHeight:'1.7',marginTop:'0',opacity:1}}>Доступ до пріоритетних дат розміщення та індивідуальних умов співпраці. Окремі переваги для постійних партнерів.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
