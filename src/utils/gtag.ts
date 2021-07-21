declare global {
  interface Window {
    gtag: any;
  }
}

export const pageView: any = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};
