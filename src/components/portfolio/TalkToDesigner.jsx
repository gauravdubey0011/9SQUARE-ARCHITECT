import './TalkToDesigner.css';

// Replace with your actual image
import designerImage from '../../assets/slide2.jpg';

export default function TalkToDesigner() {
  return (
    <section className="talkdesigner">
      <div className="talkdesigner__image-wrap">
        <img src={designerImage} alt="Interior design" className="talkdesigner__image" />
      </div>

      <div className="talkdesigner__panel">
        <h2 className="talkdesigner__heading">Talk to a designer</h2>

        <form className="talkdesigner__form">
          <input type="text" placeholder="Name" className="talkdesigner__input" />
          <input type="email" placeholder="Email" className="talkdesigner__input" />
          <input type="tel" placeholder="Phone Number" className="talkdesigner__input" />

          <select className="talkdesigner__select" defaultValue="">
            <option value="" disabled>
              City
            </option>
            <option value="lucknow">Lucknow</option>
            <option value="varanasi">Varanasi</option>
          </select>

          <a href="https://google.com" className="talkdesigner__submit">
            Book a free consultation
          </a>
        </form>
      </div>
    </section>
  );
}