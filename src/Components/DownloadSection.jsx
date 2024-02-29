import React from 'react';
import './DownloadSection.scss'; // Import your SCSS file for styling

function DownloadSection() {
  return (
    <div className="container">
    <center>
      <h2 className="h3 py-4">Join the community,
Download the app!</h2>
      {/* App Store button */}
      <a href="https://www.kobinet.com.tr/" className="market-btn apple-btn" role="button">
        <span className="market-button-subtitle">Download on the</span>
        <span className="market-button-title">App Store</span>
      </a>

      {/* Google Play button */}
      <a href="https://www.kobinet.com.tr/" className="market-btn google-btn" role="button">
        <span className="market-button-subtitle">Get it on </span>
        <span className="market-button-title">Google Play</span>
      </a>
    </center>
  </div>
  );
}

export default DownloadSection;
