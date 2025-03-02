import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./github-projects.module.css";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const GITHUB_USERNAME = "RoghanBehm";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  return (
    <div className={styles.projects}>
      <h2 className={styles.sectionTitle}>The GitHub Graveyard</h2>
      <p>An assortment of repositories of varying usefulness, purpose, completion and age.</p>
      <div className={styles.projectsContainer}>
        {repos.map((repo) => (
          <div key={repo.id} className={styles.projectItem}>
            <div className={styles.projectContent}>
              <a href={repo.html_url} className={styles.projectTitle} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description || "No description available"}</p>
              <p className={styles.language}>{repo.language}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
