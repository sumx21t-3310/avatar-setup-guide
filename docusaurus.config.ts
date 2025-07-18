import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'アバターセットアップガイド',
  tagline: 'VRChat向けのアバターのセットアップ方法の解説',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sumx21t-3310.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/avatar-setup-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sumx21t-3310', // Usually your GitHub org/user name.
  projectName: 'avatar-setup-guide', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sumx21t-3310/avatar-setup-guide',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'アバターセットアップガイド',
      logo: {
        alt: 'Avatar setup guide',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'チュートリアル',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {
          type: 'html',
          position: 'right',
          value: `
            <a href="https://sumx21tridg3.booth.pm" target="_blank" rel="noopener noreferrer">
              <img src="https://public.boxcloud.com/api/2.0/files/974353070800/content?preview=true&version=1053265752400&access_token=1!lsN9FCZf4XSRLknWio0U3Sh3jBxB_ryHtvS0U5YeGxlOx94ccMpaV6QWrBP094C7TcPjp1SCfA7h-v2dPqy_Av1DFFMqmdQQidehhfhxwwbws5Bxpw5e1EfvAdPM4E51ty-fAv1xFgK30mx2nePGMyTLhoSmUlfl_CgQPxB6PgK_O3BCkiQk-RV_w7H51y7tTSNKl7kq9z76NxdTHbhJ6lPbgiYEmIMHySeJeEjt8G4zcKdRHNHnyLoxBK6msUlAV_KNwLkAm6JF1VyrUogSSryQXnf0CmHCRyV14R2w5vfSYoYHYEr25OPdQcSnfxfEiswqUkKjfwWzzX6dZa42UcCBCXYi0s3MgGLcdjkMLmbH80mwgj2YYPNqVCru1Rm6-HqUWVTCEJctuPO-e5jJoWTm6vuGbBnC6NxMX6SXVC1K8zZOQUDGvyEQR1XQ1XPlNElTkdpB1ZCzHmnZPlv_9P77_47P5PdZ0RrBLo4tUihFEuPE-AWzINrUh2oKIrwA-mAIuSvuTl4cUMyop4VJrjiC6w-DAJ_KjV04x9tak8o6OJgafmlyUBHCkvNZAFVjhpHV4zEpLiUbcFCVdOVmVi60q7yM-sRqfpLU5YcQQp59t89CaqeYAOBGRb2R9pDoiBBsIj3OkpoESOw5STwaDCavTmz2ebTUlo-eT_sSeV33gXlv5P0.&shared_link=https%3A%2F%2Fpixiv1.app.box.com%2Fs%2Fyj9ymvhbnpcbj22vfkkzctugzv46cnos&box_client_name=box-content-preview&box_client_version=3.8.0" alt="External Link" style="height: 24px; vertical-align: middle;" />
            </a>
          `,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/sumx21t',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'BOOTH',
              href: 'https://sumx21tridg3.booth.pm/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sumx21t-3310/avatar-setup-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} かわいいは主食。. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
