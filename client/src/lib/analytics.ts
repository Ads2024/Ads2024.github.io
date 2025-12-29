// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-4Z1ZQSQR1V';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

// Initialize Google Analytics
export const initGA = () => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
        window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Make gtag available globally
    window.gtag = gtag;
};

// Track page views
export const trackPageView = (path: string) => {
    if (window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: document.title
        });
    }
};

// Track resume downloads
export const trackResumeDownload = () => {
    if (window.gtag) {
        window.gtag('event', 'resume_download', {
            event_category: 'engagement',
            event_label: 'Resume Download'
        });
    }
};

// Track section views
export const trackSectionView = (sectionName: string) => {
    if (window.gtag) {
        window.gtag('event', 'section_view', {
            event_category: 'engagement',
            event_label: sectionName
        });
    }
};
