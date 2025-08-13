import ThemeInfo from '@/components/ThemeInfo';
import styles from '@/styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {/* Default VS Code Dark */}
        <ThemeInfo
          name="VS Code Dark"
          icon="/logos/vscode1.png"
          publisher="Microsoft"
          theme="default"
        />
        {/* GitHub Dark */}
        <ThemeInfo
          name="GitHub Dark"
          icon="/logos/github.png"
          publisher="GitHub"
          theme="github-dark"
        />
        {/* Light Theme */}
        <ThemeInfo
          name="Warm Light"
          icon="/logos/warmlight.png"
          publisher="Custom"
          theme="soft-mint"
        />
        {/* Aurora Glow */}
        <ThemeInfo
          name="Aurora Glow"
          icon="/logos/auro.png"
          publisher="Creative"
          theme="aurora-glow"
        />
        {/* Nordic Sky */}
        <ThemeInfo
          name="Nordic Sky"
          icon="/logos/nordic.png"
          publisher="Creative"
          theme="nordic-sky"
        />
        {/* Owl Eclipse */}
        <ThemeInfo
          name="Owl Eclipse"
          icon="/logos/owl.png"
          publisher="Creative"
          theme="owl-eclipse"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
