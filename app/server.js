const http = require("http");

const technologies = [
  {
    name: "Ubuntu",
    description: "Operating System",
    icon: "https://cdn.simpleicons.org/ubuntu/00ff88"
  },
  {
    name: "Docker",
    description: "Containerization",
    icon: "https://cdn.simpleicons.org/docker/00ff88"
  },
  {
    name: "Node.js",
    description: "Backend Runtime",
    icon: "https://cdn.simpleicons.org/nodedotjs/00ff88"
  },
  {
    name: "Traefik",
    description: "Reverse Proxy",
    icon: "https://cdn.simpleicons.org/traefikproxy/00ff88"
  },
  {
    name: "Let's Encrypt",
    description: "SSL Certificates",
    icon: "https://cdn.simpleicons.org/letsencrypt/00ff88"
  },
  {
    name: "GitHub",
    description: "Code Hosting",
    icon: "https://cdn.simpleicons.org/github/00ff88"
  },
  {
    name: "GitHub Actions",
    description: "CI/CD Pipeline",
    icon: "https://cdn.simpleicons.org/githubactions/00ff88"
  },
  {
    name: "Google Cloud",
    description: "Cloud Hosting",
    icon: "https://cdn.simpleicons.org/googlecloud/00ff88"
  }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Cloudsystems AP - 2026</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  min-height: 100%;
}

body {
  min-height: 100vh;
  font-family: "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top, rgba(0, 255, 136, 0.10), transparent 32%),
    linear-gradient(135deg, #000000, #020403 55%, #00140a);
  color: #eafff4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1120px;
  max-height: calc(100vh - 36px);
  padding: 28px 34px;
  text-align: center;
  background: rgba(0, 8, 4, 0.82);
  border: 1px solid rgba(0, 255, 136, 0.28);
  border-radius: 22px;
  box-shadow:
    0 0 35px rgba(0, 255, 136, 0.10),
    0 25px 80px rgba(0, 0, 0, 0.75);
}

.cloud-icon {
  width: 74px;
  height: 54px;
  margin: 0 auto 12px;
  display: block;
  filter: drop-shadow(0 0 14px rgba(0, 255, 136, 0.45));
}

h1 {
  font-size: clamp(2.1rem, 4.8vw, 3.7rem);
  line-height: 1;
  margin-bottom: 14px;
  letter-spacing: -1px;
  color: #f2fff8;
  text-shadow: 0 0 18px rgba(0, 255, 136, 0.18);
}

.intro {
  max-width: 850px;
  margin: 0 auto 26px;
  color: #b8f5d6;
  line-height: 1.5;
  font-size: clamp(0.95rem, 1.5vw, 1.12rem);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.card {
  min-height: 150px;
  padding: 20px 14px;
  background: rgba(0, 0, 0, 0.42);
  border: 1px solid rgba(0, 255, 136, 0.22);
  border-radius: 16px;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 255, 136, 0.75);
  box-shadow: 0 0 22px rgba(0, 255, 136, 0.13);
}

.logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 10px rgba(0, 255, 136, 0.35));
}

.card h2 {
  font-size: 1.18rem;
  margin-bottom: 6px;
  color: #f4fff9;
}

.card p {
  color: #a9eecb;
  font-size: 0.95rem;
}

footer {
  margin-top: 22px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 255, 136, 0.22);
  color: #a9eecb;
  font-size: 0.95rem;
}

footer a {
  color: #00ff88;
  text-decoration: none;
  font-weight: 600;
}

footer a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  body {
    overflow: auto;
  }

  .container {
    max-height: none;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  body {
    overflow: auto;
    padding: 12px;
  }

  .container {
    padding: 24px 18px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
</head>

<body>
  <main class="container">
    <svg class="cloud-icon" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-label="Cloud icon">
      <defs>
        <linearGradient id="cloudGradient" x1="0" y1="0" x2="120" y2="80">
          <stop offset="0%" stop-color="#00ff88"/>
          <stop offset="100%" stop-color="#008f5a"/>
        </linearGradient>
      </defs>
      <path
        d="M37 62H88C101 62 111 52 111 40C111 28 101 18 89 18C84 7 73 0 60 0C43 0 29 13 28 30C17 31 9 40 9 51C9 57 17 62 37 62Z"
        fill="none"
        stroke="url(#cloudGradient)"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <h1>Cloudsystems AP - 2026</h1>

    <p class="intro">
      This website was built as part of a school project for the cloud systems course
      as part of AP's programming graduate. Hosted using Google Cloud, it makes use
      of the following technologies to accomplish this setup:
    </p>

    <section class="grid">
      ${technologies.map(tech => `
        <article class="card">
          <img class="logo" src="${tech.icon}" alt="${tech.name}">
          <h2>${tech.name}</h2>
          <p>${tech.description}</p>
        </article>
      `).join("")}
    </section>

    <footer>
      Created by
      <a href="https://github.com/FreyrVL" target="_blank" rel="noopener noreferrer">FreyrVL</a>
      &nbsp; | &nbsp;
      <a href="https://github.com/FreyrVL" target="_blank" rel="noopener noreferrer">github.com/FreyrVL</a>
    </footer>
  </main>
</body>
</html>
`);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
