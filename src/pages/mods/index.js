import React from 'react';
import Layout from '@theme/Layout';

const ModList = [
  {
    title: 'Nexus Mods',
    author: '',
    category: 'Collections',
    description: 'Large amount of inZOI mod collections',
    link: 'https://www.nexusmods.com/games/inzoi',
    isHighlight: true
  },
  {
    title: 'InZOI Mod Enabler',
    author: 'FrancisLouis',
    category: 'General',
    description: 'Allows InZOI to load unsigned mods through the ~mods folder.',
    link: 'https://www.nexusmods.com/inzoi/mods/1',
  },
  {
    title: 'Remove Shower Blur',
    author: 'FrancisLouis',
    category: 'Character',
    description: 'Removes blur from the shower, toilet, and any other place it might be used.',
    link: 'https://www.nexusmods.com/inzoi/mods/13',
  },
  {
    title: 'Higher Quality Skin and Faces',
    author: 'FrancisLouis',
    category: 'Character',
    description: 'Restores the original high-quality textures that were removed from the early access build.',
    link: 'https://www.nexusmods.com/inzoi/mods/5',
  },
  {
    title: 'InZOI Optimizer',
    author: 'FrancisLouis',
    category: 'Performance',
    description: 'Optimizes InZOI and reduces stuttering considerably by optimizing shader compilation and assets streaming.',
    link: 'https://www.nexusmods.com/inzoi/mods/3',
  },
  {
    title: 'inZOI Patching',
    author: 'Johntaber',
    category: 'General',
    description: 'A tool for decrypting .pak files to extract them',
    link: 'https://www.nexusmods.com/inzoi/mods/12',
  },
  {
    title: 'Skip Intro',
    author: 'FrancisLouis',
    category: 'General',
    description: 'Skips the into videos',
    link: 'https://www.nexusmods.com/inzoi/mods/2',
  },
  {
    title: 'Fast Launch (Skip Startup - Intro Videos)',
    author: 'instanity',
    category: 'General',
    description: 'Makes the game launch faster by automatically skipping startup video.',
    link: 'https://www.nexusmods.com/inzoi/mods/9',
  },

];

function ModCard({ title, author, category, description, link, isHighlight }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline h-full block"
    >
      <div className={`h-full p-6 border rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col
        ${isHighlight ? 'bg-orange-50 border-orange-200' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold ${isHighlight ? 'text-orange-900' : 'text-sky-900'}`}>
            {title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm
            ${isHighlight ? 'bg-orange-100 text-orange-800' : 'bg-sky-100 text-sky-800'}`}>
            {category}
          </span>
        </div>
        <p className={`mb-4 flex-grow ${isHighlight ? 'text-orange-600' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          {/* <span>Author: {author}</span> */}
        </div>
      </div>
    </a>
  );
}

export default function ModsPage() {
  return (
    <Layout
      title="inZOI Mods"
      description="Browse and download mods for inZOI"
    >
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-sky-900 mb-12">
          inZOI Mods
        </h1>
        

        {/* Mods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ModList.map((mod, index) => (
            <ModCard key={index} {...mod} />
          ))}
        </div>
      </div>
    </Layout>
  );
}