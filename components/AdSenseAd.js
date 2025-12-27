import { useEffect } from 'react';

const AdSenseAd = ({ 
  slot = "2228311077",  // Default to your ad slot
  format = "autorelaxed",
  className = "my-8"
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [slot]);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8040019263366199"
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </div>
  );
};

export default AdSenseAd;
