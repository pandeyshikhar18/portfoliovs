// components/RepoCard.tsx
import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithubAlt,
  VscLinkExternal,
  VscTypeHierarchy,
} from 'react-icons/vsc';
import { Repo } from '@/types';
import styles from '@/styles/RepoCard.module.css';

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{repo.name}</h3>
        {repo.language && (
          <div className={styles.language}>
            <VscTypeHierarchy className={styles.languageIcon} />
            <span>{repo.language}</span>
          </div>
        )}
      </div>

      <p>{repo.description || 'No description provided'}</p>

      <div className={styles.stats}>
        <div className={styles.leftStats}>
          <div className={styles.stat}>
            <VscStarEmpty className={styles.icon} /> {repo.stargazers_count ?? 0}
          </div>
          <div className={styles.stat}>
            <VscRepoForked className={styles.icon} /> {repo.forks ?? 0}
          </div>
          <div className={styles.stat}>
            <VscEye className={styles.icon} /> {repo.watchers ?? 0}
          </div>
        </div>

        <div className={styles.rightLinks}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository"
          >
            <VscGithubAlt className={styles.icon} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Live Site"
            >
              <VscLinkExternal className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;

