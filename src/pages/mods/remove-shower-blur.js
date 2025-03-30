import React from 'react';
import ModPage from '../../components/ModPage';

export default function RemoveShowerBlurPage() {
  return (
    <ModPage
      modName="Remove Shower Blur"
      title="Remove Shower Blur Mod"
      description="Remove blur effects from shower, toilet, and other places in inZOI"
      summary="Enhance your inZOI experience by removing unwanted blur effects"
      image="/mods/remove-shower-blur.webp"
      author="FrancisLouis"
      category="Graphics"
      features={[
        'Removes blur effects from shower scenes',
        'Removes blur effects from toilet areas',
        'Improves visibility in affected locations',
        'No performance impact'
      ]}
      downloadUrl="https://www.nexusmods.com/inzoi/mods/13"
    />
  );
}