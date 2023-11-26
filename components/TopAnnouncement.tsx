import React from 'react';

const TopAnnouncement: React.FC = () => {
    const customColorStyle = {
        backgroundColor: '#E1C300',
        color: '#000000',
        fontWeight: '700',
      };
  return (
    <div style={customColorStyle} className="w-full h-15 p-4 text-center uppercase">
      <a href="https://www.tiktok.com/@bravaland.com" target="_blank"><p>VISIT US ON TIKTOK @bravaland.com</p></a>
    </div>
  );
};

export default TopAnnouncement;
