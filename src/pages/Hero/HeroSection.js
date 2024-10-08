// src/pages/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          I am a UX/UI Designer
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          View My Work
        </Button>
      </motion.div>
    </Box>
  );
};

export default HeroSection;