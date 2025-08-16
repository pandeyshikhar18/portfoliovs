export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'CodAIED - AI Code Editor',
    description: 'AI code editor with Monaco, GPT-3.5, voice-to-code, and multi-language support.',
    logo: '/logos/cai-removebg-preview.png',
    link: 'https://github.com/pandeyshikhar18/codedai-aicodeeditor',
    slug: 'codedai-aicodeeditor',
  },
  {
    title: 'News Summarizer TTS',
    description: 'Summarizes news using BART and converts it to speech via gTTS.',
    logo: '/logos/tts.png',
    link: 'https://github.com/pandeyshikhar18/News_Summarizer_TTS',
    slug: 'news-summarizer-tts',
  },
  {
    title: 'TextoHand-Text to Handwriting Converter',
    description: 'Converts typed text into realistic handwriting styles (Coming soon).',
    logo: '/logos/HC.png',
    link: 'https://github.com/pandeyshikhar18/TextoHand/tree/main',
    slug: 'text-to-handwriting',
  },
  {
    title: 'VSCode Portfolio',
    description: 'VS Code themed developer portfolio.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/pandeyshikhar18/portfoliovs',
    slug: 'vscode-portfolio',
  },
];
