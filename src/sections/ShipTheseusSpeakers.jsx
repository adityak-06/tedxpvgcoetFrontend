import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaGlobe, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import "./ShipTheseusSpeakers.css";
import speaker01 from "../assets/shipOfThesus/speakers/speaker-01.webp";
import speaker02 from "../assets/shipOfThesus/speakers/speaker-02.webp";
import speaker03 from "../assets/shipOfThesus/speakers/speaker-03.webp";
import speaker04 from "../assets/shipOfThesus/speakers/speaker-04.webp";
import speaker05 from "../assets/shipOfThesus/speakers/speaker-05.webp";
import speaker06 from "../assets/shipOfThesus/speakers/speaker-06.webp";
import speaker07 from "../assets/shipOfThesus/speakers/speaker-07.webp";
import speaker08 from "../assets/shipOfThesus/speakers/speaker-08.webp";

const speakers = [
  {
    name: "Sukrut Deo",
    title: "Theatre & Comedy",
    image: speaker01,
    trimSideBars: true,
    biography:
      "Sukrut Deo is a Marathi theatre artist and performer known for his engaging stage presence and versatility. With experience in theatre and television, he brings together performance, humour, and storytelling, connecting with audiences through his expressive and relatable style.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/sukkhi_ala_re?dlrf=azc2cjh6ZHNjajI5",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Shama Bhate",
    title: "Kathak Exponent",
    image: speaker02,
    trimSideBars: true,
    biography:
      "Guru Shama Bhate is a renowned Kathak exponent, choreographer, educator, and artistic director of Nadroop, a dance institute based in Pune. With decades of experience, she has developed a distinctive approach to Kathak that combines technical precision with expressive storytelling, while mentoring generations of dancers and contributing to the evolution of Indian classical dance.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/bhateshama?xtok=MXZjMXY1Y2ZjMWd3",
        icon: FaInstagram,
      },
      {
        label: "Website",
        href: "https://nadroop.org/guru-shama-bhate/",
        icon: FaGlobe,
      },
    ],
  },
  {
    name: "Sanskruti Balgude",
    title: "Arts & Culture",
    image: speaker03,
    biography:
      "Sanskruti Balgude is an Indian actress known for her work in Marathi cinema and television. Recognised for her expressive performances and versatility, she has built a presence in regional entertainment through a range of roles that showcase her passion for acting and the performing arts.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/sanskruti_balgude_official?mdxt=eW9qcm0wdThqbWZt",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Shruti Kotwal",
    title: "Sports",
    image: speaker04,
    trimSideBars: true,
    biography:
      "Shruti Kotwal is an Indian ice speed skater who has represented India in international competitions. A trailblazer in Indian women's ice speed skating, she has earned recognition for her competitive achievements, including medals at national and international events, inspiring others through her dedication, resilience, and commitment to sport.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/indianspeedskater?mdxt=MXJ1MTk0bjM5MWQ4cg==",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Lieutenant Commander Nikhil Kumar Chandrakala",
    title: "Armed Forces",
    image: speaker05,
    trimSideBars: true,
    biography:
      "Lieutenant Commander Nikhil Kumar Chandrakala (Retd.) is a former Indian Navy officer and a trained Group Testing Officer with experience in assessing candidates for the Services Selection Board. He helps aspiring defence officers develop leadership, confidence, and officer-like qualities.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/ltcdr_nikhil_the_gto?rpxt=OW5mM3M5aWx6ajJi",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Parimal Phadke",
    title: "Bharatanatyam Virtuoso",
    image: speaker06,
    trimSideBars: true,
    biography:
      "Parimal Phadke is an accomplished Bharatanatyam dancer, choreographer, and educator based in Pune. Recognised by the Indian Council for Cultural Relations (ICCR), he has contributed to Indian classical dance through performances, choreography, teaching, and cultural initiatives, combining a deep understanding of tradition with artistic expression.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/parimal_phadke?dlrf=MXV5bWZjcjIyaXowaQ==",
        icon: FaInstagram,
      },
      {
        label: "Website",
        href: "https://www.parimalphadke.com",
        icon: FaGlobe,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/parimalphadke",
        icon: FaLinkedin,
      },
    ],
  },
  {
    name: "Ravinder Singal",
    title: "Civil Services",
    image: speaker07,
    trimSideBars: true,
    biography:
      "Ravinder Singal is a senior Indian Police Service (IPS) officer known for his work in law enforcement, public safety, and policing administration. Through his career in the police service, he has contributed to maintaining law and order and addressing public-safety challenges, reflecting the importance of leadership, integrity, and responsibility in civil services.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/ravindersingal?xtok=MTQ5bTI4Y3BzNXRhNg==",
        icon: FaInstagram,
      },
    ],
  },
  {
    name: "Dr. Satilal Patil",
    title: "Science & Entrepreneurship",
    image: speaker08,
    biography:
      "Dr. Satilal Patil is a scientist, entrepreneur, author, and researcher specialising in biocontrol and sustainable agricultural solutions. His work includes developing biopesticides, biofertilisers, and plant-growth products, alongside contributions to research, training, and entrepreneurship. He advocates innovation and practical scientific solutions that support agriculture and wider social development.",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/drsatilalpatil?obrf=Zzd0aHNnaXg3bTV6",
        icon: FaInstagram,
      },
      {
        label: "Website",
        href: "https://drsatilalpatil.com/",
        icon: FaGlobe,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/drsatilalpatil",
        icon: FaLinkedin,
      },
    ],
  },
];

const ShipTheseusSpeakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [panelPosition, setPanelPosition] = useState({ left: 12, top: 12 });
  const triggerRefs = useRef([]);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeProfile = useCallback(() => {
    setActiveSpeaker(null);
    setIsModal(false);
  }, []);

  const openProfile = (index) => {
    const useModal = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    setActiveSpeaker(index);
    setIsModal(useModal);
  };

  useEffect(() => {
    if (activeSpeaker === null) return undefined;
    if (isModal) closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProfile();
        triggerRefs.current[activeSpeaker]?.focus();
        return;
      }

      if (!isModal || event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (
        isModal ||
        panelRef.current?.contains(event.target) ||
        triggerRefs.current.some((trigger) => trigger?.contains(event.target))
      ) {
        return;
      }
      closeProfile();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeSpeaker, closeProfile, isModal]);

  useLayoutEffect(() => {
    if (activeSpeaker === null || isModal) return undefined;
    const updatePosition = () => {
      const trigger = triggerRefs.current[activeSpeaker];
      const panel = panelRef.current;
      if (!trigger || !panel) return;

      const rect = trigger.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const margin = 12;
      const left = Math.max(
        margin,
        Math.min(rect.left, window.innerWidth - panelRect.width - margin)
      );
      const below = rect.bottom + 12;
      const top =
        below + panelRect.height <= window.innerHeight - margin
          ? below
          : Math.max(margin, rect.top - panelRect.height - 12);

      setPanelPosition({ left, top });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [activeSpeaker, isModal]);

  const active = activeSpeaker === null ? null : speakers[activeSpeaker];

  return (
    <section
      className="theseus-speakers"
      aria-labelledby="theseus-speakers-title"
    >
      <header className="theseus-speakers__header">
        <h2 className="theseus-speakers__title" id="theseus-speakers-title">
          <span>MEET THE</span>
          <span>SPEAKERS</span>
        </h2>
      </header>
      <div className="theseus-speakers__grid">
        {speakers.map((speaker, index) => (
          <article
            className="theseus-speakers__card"
            key={speaker.name}
          >
            <div className="theseus-speakers__card-poster">
              <span className="theseus-speakers__category">{speaker.title}</span>
              {speaker.trimSideBars ? (
                <span className="theseus-speakers__image-frame theseus-speakers__image-frame--trimmed">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ) : (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            <button
              ref={(node) => {
                triggerRefs.current[index] = node;
              }}
              className="theseus-speakers__view-profile"
              type="button"
              aria-haspopup="dialog"
              aria-expanded={activeSpeaker === index}
              aria-label={`View profile for ${speaker.name}`}
              onClick={() => openProfile(index)}
            >
              VIEW PROFILE ↗
            </button>
          </article>
        ))}
      </div>

      {active &&
        createPortal(
          <>
            {isModal && (
              <button
                type="button"
                className="theseus-speakers__backdrop"
                aria-label="Close speaker profile"
                onClick={() => {
                  closeProfile();
                  triggerRefs.current[activeSpeaker]?.focus();
                }}
              />
            )}
            <section
              ref={panelRef}
              className={`theseus-speakers__profile${isModal ? " theseus-speakers__profile--modal" : ""}`}
              style={isModal ? undefined : panelPosition}
              role="dialog"
              aria-modal={isModal || undefined}
              aria-labelledby={`theseus-speaker-name-${activeSpeaker}`}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="theseus-speakers__profile-close"
                aria-label={`Close ${active.name} profile`}
                onClick={() => {
                  closeProfile();
                  triggerRefs.current[activeSpeaker]?.focus();
                }}
              >
                <FaTimes aria-hidden="true" focusable="false" />
              </button>
              <div className="theseus-speakers__profile-image-wrap">
                <img
                  className="theseus-speakers__profile-image"
                  src={active.image}
                  alt=""
                  decoding="async"
                />
              </div>
              <div className="theseus-speakers__profile-content">
                <p className="theseus-speakers__profile-eyebrow">{active.title}</p>
                <h3
                  className="theseus-speakers__profile-name"
                  id={`theseus-speaker-name-${activeSpeaker}`}
                >
                  {active.name}
                </h3>
                <p className="theseus-speakers__profile-biography">
                  {active.biography}
                </p>
                <nav
                  className="theseus-speakers__profile-links"
                  aria-label={`${active.name} social and professional links`}
                >
                  {active.links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${active.name} — ${label}`}
                      title={label}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Icon aria-hidden="true" focusable="false" />
                    </a>
                  ))}
                </nav>
              </div>
            </section>
          </>,
          document.body
        )}
    </section>
  );
};

export default ShipTheseusSpeakers;
