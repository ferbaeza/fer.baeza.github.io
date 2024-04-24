import "./about.css";
import Me from "../../img/yo.black.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          The best gift an enthusiast can have is to be asked to do something he doesn't know.
        </p>
        <p className="a-desc">
          You will be able to investigate, stumble and above all learn while you will be developing your potential and knowledge.
        </p>
        <div className="a-Me">
          <div className="a-award-texts">
            <h4 className="a-award-title">My motto</h4>
            <p className="a-award-desc">
              Why do we fall?
            </p>
            <p className="a-award-desc">
              To rise stronger..!
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;