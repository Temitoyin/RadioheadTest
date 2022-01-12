import React, { useEffect, useRef } from "react";
import BrandList from "components/BrandList/brandList";
import Button from "components/Button/button";
import InfoLink from "components/InfoLink/infoLink";
import Navigation from "components/Navigation/navigation";
import appleStore from "assets/images/appleStore.png";
import googleStore from "assets/images/googleStore.png";
import playList1 from "assets/images/playList1.png";
import playList2 from "assets/images/playList2.png";
import { infoLinkData, infoLinkImageData, whyRadioHeadData } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "components/Footer/footer";
import styles from "./App.module.scss";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  let headerInfo = useRef(null);
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#albumImageWrapper",
        start: "0 80%",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#handPickedWrapper",
        start: "0 80%",
      },
    });

    gsap.from(headerInfo.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 1,
      ease: "power2.in",
    });
    gsap.from("#brandList", {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.3,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#brandListWrapper",
        // toggleActions: "play complete reverse reset",
        start: "0 80%",
      },
    });
    tl1.from("#albumImage", {
      opacity: 0,
      x: -100,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.in",
    });
    tl1.from("#infoLink1", {
      opacity: 0,
      y: -10,
      duration: 1,
      ease: "power1.in",
    });
    tl2.from("#infoLink2", {
      opacity: 0,
      y: -10,
      duration: 1,
      ease: "power1.in",
    });
    tl2.from("#musicPlayersWrapper", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power1.in",
    });
  }, []);
  return (
    <div className={styles.home}>
      <nav className={styles.home__navigation}>
        <Navigation />
      </nav>
      <header className={styles.home__header}>
        <div className={styles.home__header__info} ref={headerInfo}>
          <h1>Discover, search, and play any song featuring voice control.</h1>
          <div className={styles.home__header__infoBtn}>
            <Button title="Try it free" variant={1} />
          </div>
          <div className={styles.home__header__infoImages}>
            <img src={appleStore} alt="apple store badge" />
            <img src={googleStore} alt="google store badge" />
          </div>
        </div>
      </header>
      <main>
        <section id="brandListWrapper">
          <BrandList />
        </section>
        <section className={styles.home__musicYouLove}>
          <div
            className={styles.home__musicYouLove__images}
            id="albumImageWrapper"
          >
            {infoLinkImageData &&
              infoLinkImageData.map((e, i) => (
                <img src={e} id="albumImage" alt="album art" />
              ))}
          </div>
          <div id="infoLink1">
            <InfoLink
              header={infoLinkData[0].header}
              subText={infoLinkData[0].subText}
              link={infoLinkData[0].link}
            />
          </div>
        </section>
        <section className={styles.home__handPicked} id="handPickedWrapper">
          <div id="infoLink2">
            <InfoLink
              header={infoLinkData[1].header}
              subText={infoLinkData[1].subText}
              link={infoLinkData[1].link}
            />
          </div>
          <div
            className={styles.home__handPicked__musicPlayers}
            id="musicPlayersWrapper"
          >
            <img src={playList1} alt="music player" />
            <img src={playList2} alt="music player" />
          </div>
        </section>
        <section className={styles.home__whyRadioHead}>
          <h2 className={styles.home__whyRadioHead__header}>Why radiohead?</h2>
          <div className={styles.home__whyRadioHead__list}>
            {whyRadioHeadData &&
              whyRadioHeadData.map((e, i) => (
                <div
                  className={styles.home__whyRadioHead__listItem}
                  key={e.header}
                >
                  <div className={styles.home__whyRadioHead__listItemBar} />
                  <div className={styles.home__whyRadioHead__listItemText}>
                    <h3>{e.header}</h3>
                    <p>{e.subText}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
