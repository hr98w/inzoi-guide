import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Extensive Mods',
    description: 'Nexus Mods is the largest mod sharing platform for inZOI, offering a rich collection of mods.',
    icon: '📦'
  },
  {
    title: 'Safe & Reliable',
    description: 'All mods are community-reviewed to ensure safety and compatibility.',
    icon: '🛡️'
  },
  {
    title: 'User Friendly',
    description: 'Easy download and installation process, perfect for beginners.',
    icon: '🔧'
  },
  {
    title: 'Active Community',
    description: 'Connect with mod creators and players, share ideas and experiences.',
    icon: '👥'
  }
];

const installSteps = [
  {
    title: 'Create Account',
    description: 'Visit Nexus Mods website and create a free account'
  },
  {
    title: 'Get Mod Manager',
    description: 'Install Vortex Mod Manager for automatic downloads and installations'
  },
  {
    title: 'Browse & Download',
    description: 'Explore the inZOI section and download your favorite mods'
  },
  {
    title: 'Install & Play',
    description: 'Use Vortex to install mods with one click and enjoy enhanced gameplay'
  }
];

export default function NexusModsPage() {
  return (
    <Layout
      title="Nexus Mods | inZOI Mods Download Platform"
      description="Learn how to download and install inZOI Mods from Nexus Mods"
    >
      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">
            inZOI Nexus Mods
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most popular inZOI mod sharing platform, offering extensive mod resources and easy installation
          </p>
          <a 
            href="https://www.nexusmods.com/inzoi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
          >
            Visit Nexus Mods
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-xl text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tutorial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">
            How to Use Nexus Mods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
          <h3 className="text-xl font-bold text-orange-900 mb-2">Important Tips</h3>
          <ul className="text-orange-700 space-y-2">
            <li>• Backup your save files before installing mods</li>
            <li>• Ensure mod versions are compatible with your game version</li>
            <li>• Read installation instructions carefully</li>
            <li>• Check mod comments section for help if needed</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}