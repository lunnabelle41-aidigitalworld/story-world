import { useEffect } from 'react';

const AdSenseAd = ({ 
  slot,  // Required: Your AdSense ad unit ID (e.g., "1234567890")
  format = "auto", // Options: "auto", "rectangle", "vertical", or "horizontal"
  className = "my-8",
  layout = "",
  layoutKey = "",
  style = { display: 'block' },
  fullWidthResponsive = true
}) => {
  useEffect(() => {
    try {
      // Ensure we're in the browser before accessing window
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [slot]);

  // Check if slot is provided
  if (!slot) {
    console.warn("AdSenseAd: Missing ad slot ID. Please provide a valid ad unit ID from your AdSense account.");
    return null;
  }

  // Set ad format based on the format prop
  const adFormat = format === 'auto' ? {
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true'
  } : {
    'data-ad-format': format,
    'data-ad-layout': layout,
    'data-ad-layout-key': layoutKey,
    'data-full-width-responsive': fullWidthResponsive.toString()
  };

  return (
    <div className={`${className} text-center`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2894915343289598"
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </div>
  );
};

export default AdSenseAd;
