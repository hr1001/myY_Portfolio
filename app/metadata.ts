export const defaultMetadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: "Suguru Yamamoto | Senior Full Stack Developer",
  description:
    "Software engineer with 9 years of experience in backend and full-stack development and AI model integration. Delivered scalable APIs, microservices, and AI-enabled solutions for enterprise, e-commerce, and smart city projects at NEC, Rakuten, and Fujitsu.",
  keywords: [
    "Suguru Yamamoto",
    "Senior Full Stack Developer",
    "AI Integration Lead",
    "Enterprise Developer",
    "React Developer",
    "Node.js Developer",
    "Spring Boot Developer",
    "Kubernetes Expert",
    "Fujitsu Engineer",
    "Rakuten Developer",
    "NEC Engineer",
    "TypeScript",
    "Java Developer",
    "Python Developer",
    "Portfolio",
    "Software Engineer",
    "Tokyo Developer",
    "Japan Developer",
  ],
  authors: [{ name: "Suguru Yamamoto" }],
  creator: "Suguru Yamamoto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgryjp.github.io",
    title: "Suguru Yamamoto | Senior Full Stack Developer",
    description:
      "Software engineer with 9 years of experience in backend and full-stack development and AI model integration. Delivered scalable APIs, microservices, and AI-enabled solutions for enterprise, e-commerce, and smart city projects at NEC, Rakuten, and Fujitsu.",
    siteName: "Suguru Yamamoto Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suguru Yamamoto - Senior Full Stack Developer",
      },
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Suguru Yamamoto - Senior Full Stack Developer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suguru Yamamoto | Senior Full Stack Developer",
    description:
      "Software engineer with 9 years of experience in backend and full-stack development and AI model integration. Delivered scalable APIs, microservices, and AI-enabled solutions for enterprise, e-commerce, and smart city projects at NEC, Rakuten, and Fujitsu.",
    creator: "@sgryjp",
    images: ["/profile.jpg", "/og-image.jpg"],
  },
};
