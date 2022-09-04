export const sectionsMap: Readonly<TSection[]> = Object.freeze([
  {
    title: `Jobbher`,
    links: [
      {
        displayName: `Din Side`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Få en Jobbagent`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Opprett cv`,
        url: `https://jobbher.no`,
      },
    ],
  },
  {
    title: `For arbeidsgivere`,
    links: [
      {
        displayName: `Din kundeside`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Legg ut annonse`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Stillingsannonsering`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Employer branding`,
        url: `https://jobbher.no`,
      },
      {
        displayName: `Se bedriftsprofil`,
        url: `https://jobbher.no`,
      },
    ],
  },
]);

export type TLink = {
  displayName: string;
  url: string;
};

export type TSection = {
  title: string;
  links: TLink[];
};
