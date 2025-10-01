import { Article, Category } from '../types';

// --- MOCK DATA ---
// We are using mock data because NewsAPI's developer plan restricts client-side requests
// from domains other than localhost. A real-world application would use a backend proxy
// to make these API calls securely. This mock API simulates that behavior.

const mockArticles: Article[] = [
  {
    id: btoa('https://mock.news/tech/1'),
    title: 'Global Chip Shortage Continues to Impact Tech Giants',
    description: 'Major technology companies are still grappling with the ongoing global chip shortage, leading to production delays and price increases for consumers.',
    content: 'The semiconductor shortage, which began in 2020, shows no signs of abating. Companies like Apple, Samsung, and Sony are finding it difficult to meet the demand for their products. Experts predict the situation may not stabilize until late 2025.',
    imageUrl: 'https://picsum.photos/seed/tech1/800/600',
    url: 'https://mock.news/tech/1',
    author: 'Tech Weekly',
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    category: 'Technology',
    source: { id: null, name: 'Tech Weekly' },
  },
  {
    id: btoa('https://mock.news/sports/1'),
    title: 'Lakers Secure Victory in Overtime Thriller',
    description: 'In a nail-biting finish, the Los Angeles Lakers defeated the Boston Celtics with a last-second shot in overtime.',
    content: 'LeBron James scored 45 points, including the game-winning buzzer-beater, to lead the Lakers to a 125-123 victory. The crowd at the Staples Center was electric as the team clinched a crucial win in the series.',
    imageUrl: 'https://picsum.photos/seed/sports1/800/600',
    url: 'https://mock.news/sports/1',
    author: 'ESPN',
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    category: 'Sports',
    source: { id: null, name: 'ESPN' },
  },
  {
    id: btoa('https://mock.news/politics/1'),
    title: 'New Environmental Bill Passes in Congress',
    description: 'A landmark environmental protection bill was passed by a narrow margin in Congress today, aiming to reduce carbon emissions by 30% over the next decade.',
    content: 'The bill introduces stricter regulations on industrial pollution and provides incentives for renewable energy sources. While celebrated by environmental groups, it has faced strong opposition from industry lobbyists.',
    imageUrl: 'https://picsum.photos/seed/politics1/800/600',
    url: 'https://mock.news/politics/1',
    author: 'Reuters',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    category: 'Politics',
    source: { id: null, name: 'Reuters' },
  },
  {
    id: btoa('https://mock.news/business/1'),
    title: 'Stock Market Hits Record High Amidst Economic Optimism',
    description: 'The Dow Jones Industrial Average surged to an all-time high today as investors react positively to new economic data showing strong job growth.',
    content: 'Analysts attribute the market rally to a combination of factors, including a successful vaccine rollout and government stimulus packages. Tech and financial sectors saw the biggest gains.',
    imageUrl: 'https://picsum.photos/seed/business1/800/600',
    url: 'https://mock.news/business/1',
    author: 'The Wall Street Journal',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: 'Business',
    source: { id: null, name: 'The Wall Street Journal' },
  },
  {
    id: btoa('https://mock.news/entertainment/1'),
    title: 'Sci-Fi Epic "Galactic Odyssey" Dominates the Box Office',
    description: 'The highly anticipated space opera "Galactic Odyssey" has shattered box office records in its opening weekend, grossing over $200 million worldwide.',
    content: 'Directed by Jane Doe, the film has been praised for its stunning visual effects and compelling storyline. Critics are already calling it a contender for Best Picture at the upcoming Academy Awards.',
    imageUrl: 'https://picsum.photos/seed/entertainment1/800/600',
    url: 'https://mock.news/entertainment/1',
    author: 'Variety',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    category: 'Entertainment',
    source: { id: null, name: 'Variety' },
  },
  {
    id: btoa('https://mock.news/health/1'),
    title: 'Breakthrough in Alzheimer\'s Research: New Drug Shows Promise',
    description: 'Scientists have announced a significant breakthrough in the fight against Alzheimer\'s disease, with a new experimental drug showing the ability to slow cognitive decline in early-stage patients.',
    content: 'The clinical trial results, published in the New England Journal of Medicine, have been hailed as a major step forward. However, researchers caution that more studies are needed before the drug can be widely available.',
    imageUrl: 'https://picsum.photos/seed/health1/800/600',
    url: 'https://mock.news/health/1',
    author: 'Associated Press',
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: 'Health',
    source: { id: null, name: 'Associated Press' },
  },
  {
    id: btoa('https://mock.news/world/1'),
    title: 'Leaders Gather for G7 Summit to Discuss Climate Change',
    description: 'World leaders from the G7 nations are meeting in London to discuss a coordinated global response to climate change, with new emission targets on the agenda.',
    content: 'The summit aims to finalize commitments ahead of the upcoming UN Climate Change Conference. Key topics include carbon pricing, investment in green technologies, and support for developing nations.',
    imageUrl: 'https://picsum.photos/seed/world1/800/600',
    url: 'https://mock.news/world/1',
    author: 'BBC News',
    publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    category: 'World',
    source: { id: null, name: 'BBC News' },
  },
  {
    id: btoa('https://mock.news/tech/2'),
    title: 'The Rise of AI in Creative Industries: A Double-Edged Sword',
    description: 'Artificial intelligence is no longer just for data analysis. New AI tools are now creating art, music, and writing, raising both excitement and concern among creative professionals.',
    content: 'While AI offers powerful new tools for artists, it also poses questions about copyright, originality, and the future of creative jobs. The debate is heating up as the technology becomes more sophisticated.',
    imageUrl: 'https://picsum.photos/seed/tech2/800/600',
    url: 'https://mock.news/tech/2',
    author: 'Wired',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    category: 'Technology',
    source: { id: null, name: 'Wired' },
  },
];

// --- MOCK API FUNCTIONS ---

// Simulate network delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNews = async (category: Category | 'All'): Promise<Article[]> => {
  console.log(`Fetching mock news for category: ${category}`);
  await sleep(500); // Simulate network latency

  if (category === 'All' || category === 'Trending') {
    // For 'All' or 'Trending', return a shuffled list of all articles
    return [...mockArticles].sort(() => Math.random() - 0.5);
  }
  
  const filteredArticles = mockArticles.filter(article => article.category === category);
  
  // If a category has no specific articles, return a few general ones to avoid an empty page
  if(filteredArticles.length === 0) {
      return mockArticles.slice(0, 4).map(article => ({...article, category: category}));
  }

  return filteredArticles;
};

export const fetchTickerNews = async (): Promise<string[]> => {
  console.log('Fetching mock ticker news');
  await sleep(300); // Simulate network latency
  
  return [
    "Breaking: Global Chip Shortage Continues to Impact Tech Giants",
    "Live: Lakers Secure Victory in Overtime Thriller",
    "Update: New Environmental Bill Passes in Congress",
    "Just In: Stock Market Hits Record High Amidst Economic Optimism",
    "Hollywood: Sci-Fi Epic 'Galactic Odyssey' Dominates the Box Office",
  ];
};
