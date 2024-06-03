import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

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
          <li>
            <Card
              img="/img/works/dibsmoney.png"
              title="DibsMoney"
              description="Casino website based on Avalanche"
              href="https://dibs.money"
              githubUrl="#private"
              topics={['node', 'react', 'tailwindcss', 'mongodb', 'avalanche']}
            />
          </li>
          <li>
            <Card
              img="/img/works/joepegs.png"
              title="Joepegs"
              description="Joepegs NFT Marketplace"
              href="https://joepegs.com"
              githubUrl="#private"
              topics={['node', 'nextjs', 'tailwindcss', 'mongodb', 'avalanche']}
            />
          </li>
          <li>
            <Card
              img="/img/works/taskify.jpg"
              title="Taskify"
              description="Task manager to keep track of your goals."
              href="https://taskify-ashen-delta.vercel.app/"
              githubUrl="https://github.com/athene227/taskify"
              topics={[
                'nextjs',
                'prisma',
                'typescript',
                'stripe',
                'tailwindcss',
              ]}
            />
          </li>
          <li>
            <Card
              img="/img/works/youtube-clone.jpg"
              title="YouTube"
              description="Youtube clone using rapid api - demo."
              href="https://youtube-clone-nailheart.vercel.app/"
              githubUrl="https://github.com/athene227/youtube-clone"
              topics={['react', 'typescript', 'rapid-api', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/figma-land.jpg"
              title="Figma land"
              description="Landing page."
              href="https://nailheart.github.io/figma-land/"
              githubUrl="https://github.com/athene227/figma-land"
              topics={['html', 'sass', 'gulp', 'green-sock']}
            />
          </li>
          <li>
            <Card
              img="/img/works/cat-energy.jpg"
              title="Cat Energy"
              description="Online food store for cats."
              href=""
              githubUrl="https://github.com/athene227/cat-energy"
              topics={['html', 'less', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/bitpool.png"
              title="BitPool"
              description="Play Bitpool Online"
              href="https://play.bitpool.gg"
              githubUrl="#private"
              topics={['react', 'tailwindcss', 'mongodb']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
