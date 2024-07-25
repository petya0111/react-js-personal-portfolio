export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Petya</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Lifelong learner. Full-time Kotlin backend developer.
          </p><p></p>
        </div>
        <div>
          <p><a href="https://t.me/paspe0111" className="btn btn-primary">Get In Touch</a>
          </p>
        
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" width={150} height={150} alt="Hero Section" />
      </div>
    </section>
  );
}
