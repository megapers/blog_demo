import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.png"
          alt="An image showing Cobra"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tim</h1>
      <p>This is a demo blog application build with NextJS</p>
    </section>
  );
}

export default Hero;
