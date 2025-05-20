import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

// Types for project details
type ProjectLink = {
  title: string;
  url: string;
};

type Project = {
  id: string;
  title: string;
  organization: string;
  description: string;
  outcome: string;
  technologies: string[];
  images: string[];
  links: ProjectLink[];
};

// Detailed project data
const projectDetails: { [key: string]: Project } = {
  uniswap: {
    id: 'uniswap',
    title: 'Strategy Analysis',
    organization: 'Uniswap Foundation',
    description: 'As part of the Auditless team, I provided strategic guidance and operational support to the Uniswap Foundation, helping to drive Unichain\'s ecosystem growth through analysis, partnerships, and developer programs. My strategic work focused on high-impact areas that contributed directly to Unichain\'s growth, with particular emphasis on DeFi Partnership Strategy, Trading Hub Strategy, and developing thesis and strategy for key verticals including lending protocols, AI agents, and Telegram bot integration.',
    outcome: 'The collaborative efforts between Auditless and the Uniswap Foundation yielded significant results: accelerating growth in TVL and transaction volume for Unichain, successful onboarding of multiple partnership projects identified through strategic analysis, expansion of the developer ecosystem through the grants program, and establishment of scalable frameworks for ongoing ecosystem development initiatives.',
    technologies: ['Web3 Research', 'Data Analysis', 'DeFi', 'AI Research', 'Ecosystem Development'],
    images: [
      '/images/Unichain1.png',
      '/images/Unichain2.png',
    ],
    links: [],
  },
  gcr: {
    id: 'gcr',
    title: 'Research Analysis',
    organization: 'Global Coin Research',
    description: 'As a Research Analyst for Global Coin Research, I produce comprehensive, technically rigorous analysis on emerging trends, protocols, and technologies within the blockchain and cryptocurrency space. My work spans multiple domains including novel consensus mechanisms, technical protocol innovations, AI integration with blockchain, and DeFi applications.',
    outcome: 'Each article combines technical analysis, market insights, and forward-looking perspectives on blockchain technology evolution. My research provides both technical and non-technical audiences with accessible explanations of complex blockchain concepts while maintaining technical accuracy.',
    technologies: ['Technical Writing', 'Web3 Research', 'DeFi', 'AI Research'],
    images: [
      '/images/GlobalCoinResearch1.png',
      '/images/GlobalCoinResearch2.png',
    ],
    links: [
      { title: 'Global Coin Research', url: 'https://globalcoinresearch.com/' },
    ],
  },
  'ai-agents': {
    id: 'ai-agents',
    title: 'AI Agent Development',
    organization: 'Independent Projects',
    description: 'My work in AI agent development focuses on creating autonomous systems that dramatically reduce manual work in specialized domains. I\'ve built several production agents that deliver significant time and resource savings for web3 research, event discovery, and content repurposing.',
    outcome: 'Each agent has achieved substantial efficiency improvements, with the CryptoResearch Agent reducing research report creation time from 20 hours to 4 hours (80% reduction). These agents integrate specialized AI capabilities including semantic search, content relevance evaluation, natural language generation, and autonomous decision-making.',
    technologies: ['AI Development', 'Software Development', 'AI Research', 'Web3 Research'],
    images: [
      '/images/AIAgentDev.png',
      '/images/AIAgentDev2.png',
    ],
    links: [
      { title: 'CryptoResearch Agent', url: 'https://github.com/0xLukasinho/CryptoResearchAgent/tree/main' },
    ],
  },
  'data-analysis': {
    id: 'data-analysis',
    title: 'Data Analysis',
    organization: 'Independent Project',
    description: 'The Base Mega Dashboard represents my skills in blockchain data analysis and SQL query development. This personal project showcases my ability to transform complex on-chain data into accessible, actionable insights. The dashboard provides detailed analytics on Base\'s ecosystem performance across multiple dimensions.',
    outcome: 'This dashboard exists primarily as a showcase of my analytical abilities, though the insights it provides have informed various strategic recommendations throughout my other projects including my work with the Uniswap Foundation.',
    technologies: ['Data Analysis', 'Web3 Research', 'SQL', 'Dune Analytics'],
    images: [
      '/images/DataAnalysis.png',
      '/images/DataAnalysis2.png',
    ],
    links: [
      { title: 'Base Mega Dashboard', url: 'https://dune.com/0xlukasinho/base-mega-dashboard' },
    ],
  },
  'game-development': {
    id: 'game-development',
    title: 'Game Design & Entrepreneurship',
    organization: 'Kelepar',
    description: 'Led product management and ecosystem growth for a Web3 game developed at Kelepar. The game integrates blockchain technology to provide players with true ownership of in-game assets, a player-driven economy, and decentralized governance features.',
    outcome: 'Successfully launched the game and built a thriving community around it. The project has gained recognition in the Web3 gaming space and continues to evolve with new features and improvements based on player feedback.',
    technologies: ['Product Management', 'Ecosystem Development', 'Web3 Research'],
    images: [
      '/images/GameDesign.png',
      '/images/GameDesign2.webp',
    ],
    links: [
      { title: 'Ashen Horizon', url: 'https://ashenhorizon.com/' },
    ],
  },
  substack: {
    id: 'substack',
    title: 'Technical Writing',
    organization: 'Personal Substack & Auditless',
    description: 'I create insightful technical content across Web3 domains including marketing analysis, technology deep dives, and investment theses. My work spans multiple platforms including Auditless Research and my personal Lukasinho substack, where I explore cryptocurrency topics with both technical depth and accessible explanations.',
    outcome: 'My articles have reached a diverse audience of blockchain professionals, investors, and technology enthusiasts. Each piece demonstrates my ability to analyze complex systems, evaluate emerging technologies, and communicate sophisticated concepts clearly.',
    technologies: ['Technical Writing', 'Web3 Research', 'AI Research', 'Market Analysis'],
    images: [
      '/images/Writing1.png',
      '/images/Writing2.png',
    ],
    links: [
      { title: 'Personal Substack', url: 'https://lukasinho.substack.com/' },
      { title: 'Base Marketing Analysis (Auditless)', url: 'https://research.auditless.com/p/al-90-building-a-rollup-one-tweet' },
      { title: 'Hyperliquid Investment Thesis', url: 'https://lukasinho.substack.com/p/why-i-finally-bought-hype-hyperliquid' },
      { title: 'REI: AI Agent Deep Dive', url: 'https://lukasinho.substack.com/p/rei-building-intelligent-agents-that' },
      { title: 'Token Gating Business Model Analysis', url: 'https://lukasinho.substack.com/p/is-token-gating-access-superior-to' },
    ],
  },
};

// Generate static params for all projects
export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectDetails[slug];
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  // Special content for Uniswap project
  const isUniswap = slug === 'uniswap';
  // Special content for GCR project
  const isGcr = slug === 'gcr';
  // Special content for AI Agents project
  const isAiAgents = slug === 'ai-agents';
  // Special content for Data Analysis project
  const isDataAnalysis = slug === 'data-analysis';
  // Special content for Game Development project
  const isGameDev = slug === 'game-development';
  // Special content for Technical Writing project
  const isTechnicalWriting = slug === 'substack';

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <FiArrowLeft className="mr-2" size={16} /> Back to Projects
          </Link>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="p-8">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {project.organization}
              </span>
              <h1 className="text-3xl font-bold mt-2 mb-6">{project.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              
              <div className="prose dark:prose-invert prose-lg prose-ul:list-disc prose-li:marker:text-gray-500 max-w-none mb-8">
                {isUniswap ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Strategic Initiatives</h2>
                    <p>My strategic work focused on high-impact areas that contributed directly to Unichain's growth:</p>
                    
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <strong>DeFi Partnership Strategy:</strong> Developed comprehensive partnership frameworks to attract key DeFi protocols to Unichain, identifying strategic integration opportunities and creating incentive models that aligned with ecosystem goals
                      </li>
                      <li className="mb-2">
                        <strong>Trading Hub Strategy:</strong> Analyzed and proposed actionable steps for positioning Unichain as a premier trading hub, including liquidity optimization tactics
                      </li>
                      <li className="mb-2">
                        <strong>Thesis & Strategy for Key Verticals:</strong> Created in-depth analysis and strategic roadmaps for critical ecosystem components:
                        <ul className="list-circle pl-6 mt-2 space-y-1">
                          <li>Lending protocols (Compound) integration strategy</li>
                          <li>AI agents analysis and implementation recommendations</li>
                          <li>Telegram bot integration opportunities to enhance user engagement</li>
                        </ul>
                      </li>
                      <li className="mb-2">
                        <strong>L2 Comparative Analysis:</strong> Conducted research on Uniswap's performance across different L2s (Arbitrum vs. Base), identifying optimization opportunities
                      </li>
                      <li className="mb-2">
                        <strong>Financial Modeling:</strong> Developed forecasting models for incentive campaigns and fee switch mechanisms to predict economic outcomes
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Developer Ecosystem Development</h2>
                    <p>Beyond analysis, I conceptualized and implemented strategies to grow the developer ecosystem:</p>
                    
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <strong>Grant Program Strategy & Design:</strong> Ideated and designed comprehensive grant programs (Retro Grants and Infinite Hackathon) to stimulate development on Unichain
                      </li>
                      <li className="mb-2">
                        <strong>End-to-End Implementation:</strong> Built the entire operational infrastructure including application systems, evaluation frameworks, and judging processes
                      </li>
                      <li className="mb-2">
                        <strong>Talent Identification:</strong> Conducted thorough screening of early applications to identify high-potential projects and teams worthy of investment
                      </li>
                      <li className="mb-2">
                        <strong>Program Management:</strong> Guided programs from concept through execution, ensuring alignment with broader ecosystem goals
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Outcome</h2>
                    <p>{project.outcome}</p>

                    <p className="text-sm italic mt-4">Note: All work was performed as part of the Auditless team, working in close collaboration with Uniswap Foundation leadership to drive forward their strategic vision for Unichain.</p>
                  </>
                ) : isGcr ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <p>{project.description}</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Research Portfolio</h2>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Award-Winning Research</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/bitvm-the-first-real-path-to-bitcoin-layer-2s"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>BitVM: The First Real Path to Bitcoin Layer 2s</strong>
                        </a> - First comprehensive analysis of BitVM technology (Winner in <a href="https://twitter.com/sosovalue/status/1720519792984457392" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SosoValue Brain Battle</a>, Mega Brain category)
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Protocol Technical Deep Dives</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/megaeth-deep-dive"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>MegaETH Deep Dive</strong>
                        </a> - Technical analysis of MegaETH's architecture and approach to scaling
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/deep-dive-into-move-based-blockchains"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Deep Dive into Move-based Blockchains</strong>
                        </a> - Comparative assessment of blockchains using the Move programming language
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/near-da-and-super-fast-finality-layer-near-s-push-into-the-modular-blockchain-space"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>NEAR DA and Super Fast Finality Layer</strong>
                        </a> - Analysis of NEAR's approach to modular blockchain architecture (written in collaboration with the NEAR Foundation)
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/will-sonic-start-the-fantom-redemption-arc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Will Sonic Start the Fantom Redemption Arc?</strong>
                        </a> - Technical deep dive into Fantom's Sonic architecture
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/parallel-evms-monad-sei-v2-neon-eclipse"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Parallel EVMs: Monad, Sei v2, Neon, Eclipse</strong>
                        </a> - Comparative analysis of parallel EVM implementations across multiple projects
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">AI & Blockchain Convergence</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/why-ai-agents-matter-and-will-revolutionize-crypto"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Why AI Agents Matter and Will Revolutionize Crypto</strong>
                        </a> - Analysis of how autonomous AI agents are transforming the cryptocurrency landscape
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Financial Systems & Tokenization</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/defi-through-a-tradfi-lens"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>DeFi Through a TradFi Lens</strong>
                        </a> - Applied traditional finance frameworks to evaluate DeFi protocols
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://globalcoinresearch.com/research/tokenizing-the-world-the-potential-and-challenges-of-real-world-assets"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Tokenizing the World: The Potential and Challenges of Real-World Assets</strong>
                        </a> - Analysis of the opportunities and challenges in tokenizing traditional assets
                      </li>
                    </ul>
                  </>
                ) : isAiAgents ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Automating High-Value Web3 Workflows</h2>
                    <p>My work in AI agent development focuses on creating autonomous systems that dramatically reduce manual work in specialized domains. I've built several production agents that deliver significant time and resource savings:</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">CryptoResearch Agent <a href="https://github.com/0xLukasinho/CryptoResearchAgent/tree/main" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-base font-normal">(View on GitHub)</a></h3>
                    <p>Built a comprehensive multi-agent AI system that automates cryptocurrency research, content analysis, and article generation. This agent:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">Performs autonomous information discovery across Substacks, YouTube, and user-provided materials</li>
                      <li className="mb-2">Conducts deep content analysis with relevance evaluation</li>
                      <li className="mb-2">Generates research outlines and full articles matching personalized writing style</li>
                      <li className="mb-2">Reduces research report creation time from 20 hours to 4 hours (80% reduction)</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Web3 Events Calendar Agent</h3>
                    <p>Developed for Auditless, this agent:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">Automatically discovers web3 events across multiple online sources</li>
                      <li className="mb-2">Extracts key event details (date, location, organizers, etc.)</li>
                      <li className="mb-2">Populates and maintains the company event calendar without human intervention</li>
                      <li className="mb-2">Ensures comprehensive coverage of industry events with minimal oversight</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Content Repurposing Agent</h3>
                    <p>Currently developing an agent that:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">Transforms research reports into optimized social media content</li>
                      <li className="mb-2">Automatically schedules posts for maximum engagement</li>
                      <li className="mb-2">Tailors content format to platform-specific requirements</li>
                      <li className="mb-2">Measures performance and adapts posting strategies</li>
                    </ul>
                    
                    <p>Each agent integrates specialized AI capabilities including semantic search, content relevance evaluation, natural language generation, and autonomous decision-making to eliminate repetitive knowledge work.</p>
                  </>
                ) : isDataAnalysis ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Base Mega Dashboard</h2>
                    <p>The <a href="https://dune.com/0xlukasinho/base-mega-dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Base Mega Dashboard</a> represents my skills in blockchain data analysis and SQL query development. This personal project showcases my ability to transform complex on-chain data into accessible, actionable insights.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">What the Dashboard Offers</h3>
                    <p>The dashboard provides detailed analytics on Base's ecosystem with specific metrics including:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">User adoption and growth rates</li>
                      <li className="mb-2">Sequencer revenues, gas usage & economics</li>
                      <li className="mb-2">AMM activity & DEX market shares</li>
                      <li className="mb-2">Stablecoins, ETH & LSTs volume and dominance</li>
                      <li className="mb-2">Lending protocol activities</li>
                      <li className="mb-2">NFT activity & market share</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Skills Showcase</h3>
                    <p>This dashboard highlights my capabilities in:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">Writing efficient SQL queries for large blockchain datasets</li>
                      <li className="mb-2">Creating clear visualizations that tell data stories</li>
                      <li className="mb-2">Identifying key metrics that reveal ecosystem health</li>
                      <li className="mb-2">Tracking trends that inform strategic decisions</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Connection to Other Work</h3>
                    <p>The data analysis skills demonstrated here directly supported:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">My strategic work with Uniswap Foundation, where I used similar techniques to compare Unichain performance against Base</li>
                      <li className="mb-2">Development of my AI agents, which rely on structured data extraction and processing</li>
                      <li className="mb-2">Research articles, which gain credibility through data-backed assertions</li>
                    </ul>
                    
                    <p>This dashboard exists primarily as a showcase of my analytical abilities, though the insights it provides have informed various strategic recommendations throughout my other projects.</p>
                  </>
                ) : isGameDev ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Entrepreneurial Journey at Kelepar GmbH</h2>
                    <p>As the founder of Kelepar GmbH, I embarked on an ambitious venture to create <a href="https://ashenhorizon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Ashen Horizon</a>, a Web3 game built within the Cosmos ecosystem. This journey stretched me across multiple domains and provided invaluable experience in product management, team leadership, and startup operations.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Product Management in Web3 Gaming</h3>
                    <p>The core of my role centered on product management, navigating the unique challenge of creating a gaming experience that leveraged blockchain without compromising gameplay. I developed our product roadmap by balancing competing priorities: integrating tokenomics with engaging gameplay, designing progression systems that ensured both player interest and economic sustainability, and creating features that appealed to both Web3 enthusiasts and traditional gamers.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Building a Distributed Team</h3>
                    <p>Leading a remote-first team across multiple time zones, I established effective communication protocols and implemented agile methodologies tailored for our Web3 startup. The diverse talents on our team—from game designers to blockchain specialists—required a leadership approach that united different perspectives while maintaining our shared vision.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Business Development & Fundraising</h3>
                    <p>On the business side, I secured seed investment from strategic partners aligned with our vision, developed go-to-market strategies, and established partnerships within the ecosystem. As the public face of the project, I spoke at conferences, hosted community AMAs, and built relationships with ecosystem thought leaders to grow our early adopter community.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Learnings from the Journey</h3>
                    <p>While Kelepar ultimately didn't achieve the scale we envisioned, the experience provided invaluable lessons that continue to inform my work today. I gained deep insights into product-market fit challenges, fundraising dynamics, the importance of timing in market entry, and the delicate balance between innovation and user adoption.</p>
                    
                    <p className="mt-4">The most valuable takeaways came from navigating the full lifecycle of a startup—from ideation through fundraising, development, and community building. These experiences gave me a holistic understanding of entrepreneurship and product development in Web3 that continues to serve me in subsequent roles.</p>
                  </>
                ) : isTechnicalWriting ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Analysis Across Web3 Domains</h2>
                    <p>My technical writing spans multiple platforms and covers a diverse range of Web3 topics, from marketing analysis to investment thesis development. These articles demonstrate both my analytical approach and ability to communicate complex concepts clearly.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Featured Publications</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Ecosystem Analysis</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://research.auditless.com/p/al-90-building-a-rollup-one-tweet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Building a Rollup One Tweet at a Time: Based Culture</strong>
                        </a> - An analytical examination of Base's social media strategy and how it contributed to sustainable growth, published in Auditless Research
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Technology & Investment Analysis</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://lukasinho.substack.com/p/rei-building-intelligent-agents-that"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>REI: Building Intelligent Agents that Understand Crypto</strong>
                        </a> - Technical deep dive exploring the integration of AI agents with cryptocurrency protocols
                      </li>
                      <li className="mb-2">
                        <a
                          href="https://lukasinho.substack.com/p/why-i-finally-bought-hype-hyperliquid"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Why I Finally Bought HYPE: Hyperliquid Bull Thesis</strong>
                        </a> - Comprehensive investment thesis analyzing Hyperliquid's product-market fit, value accrual mechanisms, and key risk factors
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Business Model Innovation</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li className="mb-2">
                        <a
                          href="https://lukasinho.substack.com/p/is-token-gating-access-superior-to"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <strong>Is Token Gating Access Superior to Traditional Subscription Models?</strong>
                        </a> - Comparative analysis of Web3 business models examining token gating as an alternative to traditional subscription approaches
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Writing Approach</h3>
                    <p>My articles combine rigorous research with accessible explanations, making complex Web3 concepts understandable without sacrificing technical depth. Each piece typically includes data analysis, technical evaluation, and strategic insights that readers can apply to their own projects or investments.</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <p>{project.description}</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Outcome</h2>
                    <p>{project.outcome}</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Process & Challenges</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget arcu nisi. Sed eget metus vitae nisi laoreet hendrerit. Maecenas vel velit at urna tempus condimentum. Sed fermentum ipsum in eros ultrices, a scelerisque arcu gravida.</p>
                    
                    <p>Integer vitae lacus nec justo tristique efficitur. Morbi eget tempus tellus. Quisque euismod metus vitae eros tempor, vel dapibus mauris dictum. Nullam varius enim eget magna rutrum, a interdum nunc aliquet.</p>
                  </>
                )}
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies & Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.links && project.links.length > 0 && !isGcr && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Links</h2>
                  <div className="flex flex-col gap-2">
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.title}
                        <FiExternalLink className="ml-1" size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 