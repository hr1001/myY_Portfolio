export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suguru Yamamoto",
          url: "https://github.com/sgryjp",
          sameAs: [
            "https://github.com/sgryjp",
            "https://linkedin.com/in/suguru-yamamoto-4a8032165",
            "https://x.com/sgryjp"
          ],
          jobTitle: "Senior Full Stack Developer",
          knowsAbout: ["AI Integration", "Enterprise Development", "Microservices", "TypeScript", "React", "Node.js", "Java", "Python"],
          image: "/profile.jpg",
          description: "Software engineer with 9 years of experience in backend and full-stack development and AI model integration."
        })
      }}
    />
  );
} 