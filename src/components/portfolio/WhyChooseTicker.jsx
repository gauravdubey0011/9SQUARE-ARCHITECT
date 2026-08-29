import './WhyChooseTicker.css';

const tickerText = 'Because तुम्हारे पास लखनऊ में और कोई choice नहीं है, हम ही अच्छे हैं बस Livspace हैं पर महँगा है।';

export default function WhyChooseTicker() {
  return (
    <section className="ticker-section">
      <h2 className="ticker-section__heading">Why choose us</h2>

      <div className="ticker">
        <div className="ticker__track">
          <span className="ticker__item">{tickerText}</span>
          <span className="ticker__item">{tickerText}</span>
          <span className="ticker__item">{tickerText}</span>
          <span className="ticker__item">{tickerText}</span>
          <span className="ticker__item">{tickerText}</span>
          <span className="ticker__item">{tickerText}</span>
        </div>
      </div>
    </section>
  );
}