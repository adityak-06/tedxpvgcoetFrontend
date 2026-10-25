import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import shipTheseusHero from "../assets/shipOfThesus/ShipTheseus1.png";
import shipTheseusHeroPortrait from "../assets/shipOfThesus/ShipTheseusPortrait.png";
import themeVideo from "../assets/shipOfThesus/themevideo.mp4";
import shipTheseusContentBackground from "../assets/shipOfThesus/ContentBG.png";
import FooterSection from "../sections/Common/FooterSection";
import ShipTheseusSpeakers from "../sections/ShipTheseusSpeakers";
import ShipTheseusIllusions from "../sections/ShipTheseusIllusions";
import ShipExperienceCard from "../components/ShipExperienceCard";
import "../sections/Booknow.css";
import "../sections/Events/Drishti/DrishtiVideo.css";
import "./ShipOfTheseusEvent.css";

const ShipOfTheseusEvent = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [videoInView, setVideoInView] = useState(false);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      reduceMotion.matches ||
      !hero ||
      !image ||
      !("IntersectionObserver" in window)
    ) {
      return undefined;
    }

    let observer;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            hero.classList.add("theseus-event-hero--revealed");
          } else {
            hero.classList.remove("theseus-event-hero--revealed");
          }
        },
        { threshold: [0, 0.15] }
      );
      observer.observe(image);
      hero.classList.add("theseus-event-hero--reveal-ready");
    } catch {
      observer?.disconnect();
      hero.classList.remove(
        "theseus-event-hero--reveal-ready",
        "theseus-event-hero--revealed"
      );
      return undefined;
    }

    return () => {
      observer.disconnect();
      hero.classList.remove(
        "theseus-event-hero--reveal-ready",
        "theseus-event-hero--revealed"
      );
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return undefined;

    const playVideo = () => {
      if (reduceMotion.matches) return;
      setVideoInView(true);
      video.play()?.catch(() => {});
    };

    if (!("IntersectionObserver" in window)) {
      playVideo();
      return () => video.pause();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          playVideo();
        } else {
          setVideoInView(false);
          video.pause();
        }
      },
      { threshold: [0, 0.2] }
    );

    const handleMotionPreference = () => {
      if (reduceMotion.matches) {
        setVideoInView(false);
        video.pause();
      } else {
        observer.unobserve(video);
        observer.observe(video);
      }
    };

    observer.observe(video);
    reduceMotion.addEventListener?.("change", handleMotionPreference);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener?.("change", handleMotionPreference);
      video.pause();
    };
  }, []);

  return (
    <main className="theseus-event-page">
      <title>Ship of Theseus | TEDxPVGCOET</title>
      <section
        className="theseus-event-hero"
        ref={heroRef}
        aria-label="Ship of Theseus event"
        style={{
          "--theseus-hero-art": `url("${shipTheseusHero}")`,
          "--theseus-hero-mobile-art": `url("${shipTheseusHeroPortrait}")`,
        }}
      >
        <picture className="theseus-event-hero__picture">
          <source
            media="(max-width: 600px)"
            srcSet={shipTheseusHeroPortrait}
          />
          <img
            ref={imageRef}
            className="theseus-event-hero__image"
            src={shipTheseusHero}
            alt="Ship of Theseus event artwork"
            fetchPriority="high"
          />
        </picture>
        <div className="theseus-event-hero__shade" aria-hidden="true" />
        <h1 className="theseus-event-sr-only">Ship of Theseus</h1>
        <div className="theseus-event-booking">
          <button
            className="book-now-btn"
            type="button"
            aria-disabled="true"
          >
            BOOK NOW
          </button>
        </div>
      </section>
      <ShipExperienceCard heroRef={heroRef} />
      <section
        className="theseus-event-video"
        aria-label="Ship of Theseus event film"
      >
        <div className="theseus-event-video__content">
          <div className="theseus-event-video__frame">
            <video
              ref={videoRef}
              className="theseus-event-video__player"
              autoPlay={videoInView}
              muted
              loop
              preload="none"
              playsInline
              aria-label="Ship of Theseus event film"
              onError={() => setVideoError(true)}
            >
              <source src={themeVideo} type="video/mp4" />
              Your browser cannot play this MP4 video. {" "}
              <a href={themeVideo}>Open the video file</a>.
            </video>
          </div>
          <a
            className="btn watch-btn theseus-event-watch-link"
            href="https://www.instagram.com/reel/DehWn2uIgds/?mdxt=MXQ4Zjh0b3A4NThtNA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            WATCH NOW
          </a>
          {videoError && (
            <p className="theseus-event-video__fallback" role="status">
              Video playback is unavailable in this browser. {" "}
              <a href={themeVideo} target="_blank" rel="noreferrer">
                Open the video file
              </a>
              .
            </p>
          )}
        </div>
      </section>
      <section
        className="theseus-event-content"
        aria-labelledby="theseus-event-content-title"
        style={{
          "--theseus-content-art": `url("${shipTheseusContentBackground}")`,
        }}
      >
          <span className="theseus-event-content__corner-label theseus-event-content__corner-label--top">
            ...ORIGIN
        </span>
        <div className="theseus-event-content__copy">
          <h2 id="theseus-event-content-title">The Ship of Theseus</h2>
          <p>
            What makes something the same when everything about it can change?
            The Ship of Theseus is an ancient philosophical paradox that
            questions the nature of identity, continuity, and transformation. If
            a ship has each of its planks replaced over time, one by one, until
            none of its original parts remain, is it still the same ship? And if
            the discarded planks are used to rebuild the original vessel, which
            ship is the real one? At TEDxPVGCOET 2026, we explore this question
            beyond the boundaries of an ancient ship, looking at what it means
            for people, ideas, relationships, and the world around us. We are
            constantly shaped by our experiences, memories, choices, and the
            passage of time. Our beliefs evolve, our perspectives shift, and the
            people we once were gradually become the people we are today. Yet,
            somewhere within this continuous change, we still recognize a sense
            of self. Is our identity defined by what we are made of, by the
            memories we carry, by the stories that connect our past to our
            present, or by something that cannot be easily explained? The Ship
            of Theseus invites us to look beyond appearances and question the
            assumptions we make about what remains unchanged. It challenges us
            to consider whether identity lies in our original form or in the
            continuity of our existence. Perhaps change does not erase who we
            are; perhaps it is the very process through which we become who we
            are. The question is not simply whether a ship remains the same
            after its parts are replaced, but what it truly means for
            anything—or anyone—to remain the same at all.
          </p>
        </div>
          <span className="theseus-event-content__corner-label theseus-event-content__corner-label--bottom">
            BECOMING...
        </span>
      </section>
      <ShipTheseusSpeakers />
      <ShipTheseusIllusions />
      <FooterSection />
    </main>
  );
};

export default ShipOfTheseusEvent;
