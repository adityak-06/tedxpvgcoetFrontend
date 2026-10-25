import { useEffect } from "react";

function CamRedirect() {
  useEffect(() => {
    window.location.href = "https://www.cam.tedxpvgcoet.in";
  }, []);

  return (
    <>
      
        <title>Redirecting... | TEDxPVGCOET</title>
      
      <p>Redirecting...</p>
    </>
  );
}

export default CamRedirect;
