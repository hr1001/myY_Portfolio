export function ProfileImagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://github.com/sgryjp",
          },
          about: {
            "@type": "Person",
            name: "Suguru Yamamoto",
            description:
              "Software engineer with 9 years of experience in backend and full-stack development and AI model integration.",
          },
          associatedMedia: [
            {
              "@type": "ImageObject",
              contentUrl: "https://github.com/sgryjp/profile.jpg",
              name: "Suguru Yamamoto - Senior Full Stack Developer Professional Photo",
              description:
                "Professional profile photo of Suguru Yamamoto, Senior Full Stack Developer",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
            {
              "@type": "ImageObject",
              contentUrl: "https://github.com/sgryjp/profile.jpg",
              name: "Suguru Yamamoto - Senior Full Stack Developer Profile Photo",
              description:
                "Profile photo of Suguru Yamamoto, showcasing professional appearance",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
          ],
        }),
      }}
    />
  );
}
