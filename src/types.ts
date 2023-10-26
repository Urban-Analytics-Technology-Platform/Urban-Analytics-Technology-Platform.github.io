export type ProjectDetails = {
    name: string;
    description: string;
    // Project tier in UATP
    tier: number;
    image: {
        // Link to image preview on the main page
        url: string;
        // Alt text
        alt: string;
    }
    // External link to other online output(s)
    link: string;
    // External link to the project's GitHub repository
    github: string;
    // Tags for the project
    tags: string[];
    // Relative link to the project page on the UATP website. Astro generates
    // this automatically.
    internalUrl: string;
}
