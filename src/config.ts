import { DefaultSeoProps } from 'next-seo';

export const headerConfig = {};

export const siteConfig = {
  url: 'https://lavinoys.github.io',
  title: 'lavinoys blog',
  description: 'Test.',
  copyright: 'lavinoys © All rights reserved.',
  since: 2023,
  googleAnalyticsId: '',
  author: {
    name: 'Tom',
    photo: 'https://avatars.githubusercontent.com/u/9602847?v=4',
    bio: 'Developer',
    contacts: {
      email: 'mailto:devjay0530@gamil.com',
      github: 'lavinoys',
      twiter: '',
      velog: '',
      linkedin: '',
      youtube: '',
      instagram: '',
    },
  },
  menus: [
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
    {
      label: 'Archives',
      path: '/archives',
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author.name,
    },
  ],
};
