import type { MarkdownInstance } from "astro";

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

export function makeProjectFromMarkdown(md: MarkdownInstance<Record<string, any>>): ProjectDetails {
    return {
        name: md.frontmatter.title as string,
        description: md.frontmatter.description as string,
        tier: parseInt(md.frontmatter.tier),
        image: {
            url: md.frontmatter.image.url as string,
            alt: md.frontmatter.image.alt as string,
        },
        link: md.frontmatter.link as string,
        github: md.frontmatter.github as string,
        tags: md.frontmatter.tags as string[],
        internalUrl: md.url as string,
    };
}
