'use client';

import { useState } from 'react';
import {Button, ButtonGroup} from "@nextui-org/button";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,Spacer} from "@nextui-org/react";
import { motion } from 'framer-motion'; // Importing motion for animations
import Player from '../components/Player';
import { extractVideoId } from '../utils/extractVideoId';


export default function Home() {
  const [url, setUrl] = useState<string>('');
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
    } else {
      alert('Invalid YouTube URL');
    }
  };

  return (
    <>
      {/* Navbar */}

      {/* Main Content */}
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          style={{
            fontSize: '36px',
            marginBottom: '20px',
            color: '#000000',
            fontFamily: 'Arial, sans-serif',
          }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 80}}
        >
          Ad-Free YouTube Viewer
        </motion.h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your YouTube video link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              marginBottom: '20px',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '100%',
            }}
          />
          <Spacer y={1} />
          <Button
            type="submit"
            shadow
            color="primary"
            auto
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FF2929",  // Add a background color (blue)
              color: "#fff",               // Set text color to white
              border: "none",              // Remove the border
              cursor: "pointer",           // Change cursor to pointer
              transition: "background-color 0.3s ease", // Smooth transition on hover
            }}
            
          >
            Watch
          </Button>
        </form>
        <Spacer y={2} />
        {videoId && (
          <motion.div
            style={{ marginTop: '30px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Player videoId={videoId} />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
