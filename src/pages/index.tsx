import { motion } from 'framer-motion';
import React from 'react';

import LinkArrow from '~/components/common/LinkArrow';
import PlainText from '~/components/common/PlainText';
import Title from '~/components/common/Title';
import BouncingBall from '~/components/game/BouncingBall';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { fadeIn, fadeInHalf, staggerHalf } from '~/constants/animations';

export default function Home() {
  return (
    <Layout>
      <PageSEO />

      <motion.section variants={staggerHalf} initial="initial" animate="animate">
        <Title>lavinoys</Title>

        <motion.div variants={fadeInHalf} className="mb-4">
          Keep Going Test
        </motion.div>

        <motion.div variants={fadeInHalf}>
          <PlainText>Test.</PlainText>
        </motion.div>
      </motion.section>

      <BouncingBall />

      <motion.section className="mt-16" variants={staggerHalf} initial="initial" animate="animate">
        <motion.div variants={fadeIn}>
          <LinkArrow href="/blog" className="mt-8">
            Read all posts
          </LinkArrow>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
