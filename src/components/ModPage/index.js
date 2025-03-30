import React from 'react';
import Layout from '@theme/Layout';

export default function ModPage({ 
  title,
  description,
  modName,
  summary,
  image,
  author,
  category,
  features,
  downloadUrl,
  installSteps = [
    'Download and install Vortex Mod Manager',
    'Download the mod from Nexus Mods',
    'Install using Vortex Mod Manager',
    'Enable the mod in Vortex',
    'Launch the game and enjoy mods'
  ]
}) {
  return (
    <Layout
      title={`${modName} | inZOI Mods`}
      description={description}
    >
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">
            {modName}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={image}
              alt={`${modName} Preview`}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-2">About This Mod</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold text-sky-900 w-24">Author:</span>
                <span className="text-gray-600">{author}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-900 w-24">Category:</span>
                <span className="text-gray-600">{category}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <a 
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                Download Mod
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">Installation Guide</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            {installSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  );
}