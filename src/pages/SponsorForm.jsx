import backgroundVideo from "../assets/backgrounds/background.mp4";
import SponsorFormSection from "../sections/Forms/SponsorFormSection";
import SponsorFeedbackSection from "../sections/Forms/SponsorFeedbackSection";
import FooterSection from "../sections/Common/FooterSection";

const SponsorForm = () => {
  return (
    <div className="hero-container-sponsor">
      
        <title>Partner With Us | TEDxPVGCOET</title>
      
      <video autoPlay loop muted playsInline className="hero-video-sponsor">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <SponsorFormSection />
      <SponsorFeedbackSection />
      <FooterSection />
    </div>
  );
};

export default SponsorForm;
