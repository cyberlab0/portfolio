export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Olowoselu",
    "url": "https://portfolio-v0rz.onrender.com",
    "image": "https://portfolio-v0rz.onrender.com/favicon.ico",
    "sameAs": [
      "https://github.com/cyberlab0",
      "https://www.linkedin.com/in/michael-olowoselu-727871394",
      "https://x.com/cyberlab222?s=11",
      "https://www.instagram.com/michael_olowoselu/",
      "https://youtube.com/@cyberlab0-p5v?si=kAKOIFbuVMCRqMyS",
      "https://www.facebook.com/share/1EQEoe4m1x/?mibextid=wwXIfr",
      "https://vt.tiktok.com/ZSX8bqj1v/"
    ],
    "jobTitle": "SOC Analyst & Cybersecurity Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "SentraLog"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Michael Olowoselu | Cybersecurity Portfolio",
    "url": "https://portfolio-v0rz.onrender.com",
    "description": "Portfolio of Michael Olowoselu, SOC Analyst, Cybersecurity Engineer, and Founder of SentraLog."
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line -- safe: static JSON.stringify of hardcoded schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line -- safe: static JSON.stringify of hardcoded schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
