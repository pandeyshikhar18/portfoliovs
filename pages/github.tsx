import Image from 'next/image';
import { VscRepo } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

// Favorite repos and their descriptions
const favoriteRepos = [
  {
    name: "codedai-aicodeeditor",
    description: "An AI-powered code editor with smart autocomplete, explanations, and corrections."
  },
  {
    name: "News_Summarizer_TTS",
    description: "A news summarization tool with text-to-speech support, providing concise news updates."
  },
  {
    name: "cursor-ai",
    description: "A productivity tool that integrates AI assistance within your development workflow."
  },
  {
    name: "Crop-Disease-Prediction",
    description: "Machine learning model to predict crop diseases and suggest solutions for farmers."
  }
];

const GithubPage = ({ repos, user }: GithubPageProps) => {
  // Sort repos so favorites come first
  const sortedRepos = [
    ...favoriteRepos
      .map(fav => {
        const repo = repos.find(r => r.name === fav.name);
        if (repo) {
          return { ...repo, description: fav.description };
        }
      })
      .filter(Boolean),
    ...repos.filter(r => !favoriteRepos.some(f => f.name === r.name))
  ].slice(0, 4); // Only show top 4 repos

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub repositories and see what I&apos;ve been
          working on. These are my favorite repositories and other public projects.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Favorite Repositories</h3>
        </div>

        <div className={styles.reposContainer}>
          {sortedRepos.map(repo => (
            <RepoCard key={repo.id} repo={repo} description={repo.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  // Fetch user
  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const user = await userRes.json();

  // Fetch repos
  const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  const repos: Repo[] = await repoRes.json();

  return {
    props: { repos, user },
    revalidate: 600,
  };
}

export default GithubPage;
