import Link from 'next/link';

import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>

      <ul className={styles.list}>
        <li>
          <Card
            img="/img/works/kussin.png"
            title="Kussin"
            description="Kussin eCommerce und online marketing"
            href="https://kussin.de"
            githubUrl="#private"
            topics={['golang', 'react', 'tailwindcss']}
          />
        </li>
        <li>
          <Card
            img="/img/works/nftmarket.png"
            title="Test NFT Marketplace"
            description="NFT Marketplace test project"
            href="https://athene-nft-marketplace.vercel.app/"
            githubUrl="https://github.com/athene227/nft-marketplace"
            topics={['nextjs', 'tailwindcss']}
          />
        </li>
        <li>
          <Card
            img="/img/works/nftonpulse.png"
            title="NFTOnPulse"
            description="NFT Marketplace"
            href="https://nftonpulse.io"
            githubUrl="#private"
            topics={['node', 'react', 'tailwindcss', 'mongodb', 'solidity']}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };
