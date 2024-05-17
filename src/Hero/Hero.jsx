import "./Hero.css";

const Hero = () => {
  const hero = (
    <main className="hero">
      <div className="hero-text">
        <p>
          Hi, I&apos;m Marcus<span></span>
        </p>
        <p>
          I&apos;m a <span>Full Stack Developer</span>
        </p>
        <p>
          For the past year, I&apos;ve been honing my skills through a
          full-stack development course with Code Your Future. It&apos;s been an
          amazing journey learning JS, React, NodeJS, PostgreSQL, AWS, HTML &
          CSS.
        </p>
      </div>
      <img src="/programmer.svg" className="programmer-svg" />
    </main>
  );

  return hero;
};

export default Hero;
