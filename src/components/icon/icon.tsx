import { FC, SVGProps } from 'react';

import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

import ArrowUp from '@/../public/img/icons/arrow-up.svg';
import Code from '@/../public/img/icons/code.svg';
import CSS from '@/../public/img/icons/css.svg';
import ExternalLink from '@/../public/img/icons/external-link.svg';
import Figma from '@/../public/img/icons/figma.svg';
import Golang from '@/../public/img/icons/golang.svg';
import Rust from '@/../public/img/icons/rust.svg';
import Firebase from '@/../public/img/icons/firebase.svg';
import GraphQL from '@/../public/img/icons/graphql.svg';
import MySQL from '@/../public/img/icons/mysql.svg';
import Mongodb from '@/../public/img/icons/mongodb.svg';
import Sequelize from '@/../public/img/icons/sequelize.svg';
import Svelte from '@/../public/img/icons/svelte.svg';
import Bitcoin from '@/../public/img/icons/bitcoin.svg';
import AWS from '@/../public/img/icons/aws.svg';
import Docker from '@/../public/img/icons/docker.svg';
import Azure from '@/../public/img/icons/azure.svg';
import Vue from '@/../public/img/icons/vue.svg';
import Mastodon from '@/../public/img/icons/mastodon.svg';
import Reddit from '@/../public/img/icons/reddit.svg';
import Discord from '@/../public/img/icons/discord.svg';
import Solidity from '@/../public/img/icons/solidity.svg';
import Node from '@/../public/img/icons/node.svg';
import Avalanche from '@/../public/img/icons/avalanche.svg';
import Github from '@/../public/img/icons/github.svg';
import Gulp from '@/../public/img/icons/gulp.svg';
import HTML from '@/../public/img/icons/html.svg';
import JS from '@/../public/img/icons/js.svg';
import LinkedIn from '@/../public/img/icons/linkedin.svg';
import Location from '@/../public/img/icons/location.svg';
import Mail from '@/../public/img/icons/mail.svg';
import NextJs from '@/../public/img/icons/nextjs.svg';
import React from '@/../public/img/icons/react.svg';
import Rocket from '@/../public/img/icons/rocket.svg';
import Sass from '@/../public/img/icons/sass.svg';
import Skype from '@/../public/img/icons/skype.svg';
import Telegram from '@/../public/img/icons/tg.svg';
import TypeScript from '@/../public/img/icons/typescript.svg';
import GoogleMaps from '@/../public/img/icons/google-maps.svg';
import Jinja from '@/../public/img/icons/jinja.svg';
import Less from '@/../public/img/icons/less.svg';
import Linkify from '@/../public/img/icons/linkify.svg';
import RapidApi from '@/../public/img/icons/rapid-api.svg';
import SimpleBar from '@/../public/img/icons/simple-bar.svg';
import Pusher from '@/../public/img/icons/pusher.svg';
import Upstash from '@/../public/img/icons/upstash.svg';
import Redis from '@/../public/img/icons/redis.svg';
import Tailwindcss from '@/../public/img/icons/tailwindcss.svg';
import Gsap from '@/../public/img/icons/gsap.svg';
import Codepen from '@/../public/img/icons/codepen.svg';
import Prisma from '@/../public/img/icons/prisma.svg';
import Stripe from '@/../public/img/icons/stripe.svg';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  arrowUp: ArrowUp,
  code: Code,
  css: CSS,
  externalLink: ExternalLink,
  figma: Figma,
  github: Github,
  gulp: Gulp,
  html: HTML,
  golang: Golang,
  rust: Rust,
  js: JS,
  vue: Vue,
  aws: AWS,
  azure: Azure,
  bitcoin: Bitcoin,
  docker: Docker,
  firebase: Firebase,
  graphql: GraphQL,
  mongodb: Mongodb,
  mysql: MySQL,
  sequelize: Sequelize,
  svelte: Svelte,
  mastodon: Mastodon,
  reddit: Reddit,
  discord: Discord,
  solidity: Solidity,
  node: Node,
  avalanche: Avalanche,
  linkedIn: LinkedIn,
  location: Location,
  mail: Mail,
  nextjs: NextJs,
  react: React,
  rocket: Rocket,
  sass: Sass,
  skype: Skype,
  telegram: Telegram,
  typescript: TypeScript,
  'google-maps': GoogleMaps,
  jinja: Jinja,
  less: Less,
  linkify: Linkify,
  'rapid-api': RapidApi,
  'simple-bar': SimpleBar,
  pusher: Pusher,
  upstash: Upstash,
  redis: Redis,
  tailwindcss: Tailwindcss,
  'green-sock': Gsap,
  codepen: Codepen,
  prisma: Prisma,
  stripe: Stripe,
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

const Icon: FC<Props> = ({ name, size = 24, className, ...rest }) => {
  const SVG = icons[name];

  return (
    <SVG
      className={cn(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export { Icon };
