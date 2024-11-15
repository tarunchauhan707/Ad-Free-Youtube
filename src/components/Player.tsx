'use client';

import React from 'react';
import YouTube from 'react-youtube';
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

interface PlayerProps {
  videoId: string;
}

const Player: React.FC<PlayerProps> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
    >
      <Card css={{ margin: '0 auto', maxWidth: '700px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <YouTube videoId={videoId} opts={opts} />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Player;
