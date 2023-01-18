import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const logo = (
  <span style={{ fontSize: 20, fontWeight: 700 }}>
    Lama Cleaner
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const gitRepo = "https://github.com/Sanster/lama-cleaner";

const config: DocsThemeConfig = {
  logo,
  logoLink: gitRepo,
  project: {
    link: gitRepo,
  },
  docsRepositoryBase: "https://github.com/Sanster/lama-cleaner-docs",
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  footer: {
    component: <></>,
    text: "",
  },
  primaryHue: 48,
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  chat: {
    link: "https://Ko-fi.com/Z8Z1CZJGY",
    icon: (
      <img
        style={{ height: 32 }}
        src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_dark.png"
      />
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lama Cleaner" />
      <meta
        property="og:description"
        content="Image Inpainting Tool Powered SOTA AI Model"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lama-cleaner-docs.vercel.app" />
      <meta
        property="twitter:url"
        content="https://lama-cleaner-docs.vercel.app/"
      />
      <meta name="twitter:title" content="Lama Cleaner" />
      <meta
        name="twitter:description"
        content="Image Inpainting Tool Powered SOTA AI Model"
      />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/Sanster/lama-cleaner-docs/main/public/desktop_app.png"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Lama Cleaner",
    };
  },
};

export default config;
