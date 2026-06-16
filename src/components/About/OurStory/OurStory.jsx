import "./style/OurStory.css";
import { ourStoryData } from "../../../data/aboutData.js";

const OurStory = () => {
  const { title, paragraph1, paragraph2, quote } = ourStoryData;

  return (
    <section className="our-story-section">
      <div className="container">
        <h2 className="story-title">{title}</h2>

        <p className="story-text">{paragraph1}</p>

        <p className="story-text">{paragraph2}</p>

        <blockquote className="story-quote">
          "{quote}"
        </blockquote>
      </div>
    </section>
  );
};

export default OurStory;