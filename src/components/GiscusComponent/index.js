import React from 'react';
import Giscus from "@giscus/react";
// import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
//   const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="hr98w/inzoi-guide"
      repoId="R_kgDONtYRHg"
      category="Announcements"
      categoryId="DIC_kwDONtYRHs4CmbZ8"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="light_tritanopia"
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}