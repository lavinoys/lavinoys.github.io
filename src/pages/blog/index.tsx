import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import PlainText from '~/components/common/PlainText';
import PostListItem from '~/components/common/PostListItem';
import SearchInput from '~/components/common/SearchInput';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import {
  fadeIn,
  fadeInHalf,
  fadeInSlideToLeft,
  fadeInUp,
  staggerHalf,
  staggerOne,
} from '~/constants/animations';
import { allSeries, reducedAllBlogPosts } from '~/constants/dataset';
import { ReducedPost, Series } from '~/libs/types';
import useSearch from '~/libs/useSearch';

export const getStaticProps = () => {
  return {
    props: {
      postList: reducedAllBlogPosts,
      seriesList: allSeries,
    },
  };
};

export default function PostPage({
  postList,
  seriesList,
}: {
  postList: ReducedPost[];
  seriesList: Series[];
}) {
  const { searchValue, searchHandler } = useSearch();

  const filteredSeries = seriesList.filter((series) =>
    series.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredBlogPosts = postList.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Layout>
      <PageSEO title="Blog" description="Test" url="/blog" />

      <Title>Blog</Title>

      <motion.div variants={staggerHalf} initial="initial" animate="animate" exit="exit">
        <motion.div variants={fadeInHalf}>
          <PlainText>Test</PlainText>
        </motion.div>

        <motion.div variants={fadeInHalf}>
          <SearchInput
            className="relative mb-4 w-full"
            placeholder="시리즈북, 포스트 제목 검색"
            onChange={searchHandler}
          />
        </motion.div>

        <motion.div
          className="-my-12 -ml-8 flex items-center space-x-6 overflow-scroll py-12 pl-8 no-scrollbar"
          variants={staggerOne}
        >
          <AnimatePresence mode="wait">
            {filteredSeries.map((series) => (
              <motion.div key={series.slug} variants={fadeInSlideToLeft}>
                <Link as={series.slug} href={`/blog/[slug]`}>
                  <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                    <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700" />
                    <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-white">
                      {series.title}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-16 mb-4 flex items-end gap-2" variants={fadeInHalf}>
          <SubTitle>{!searchValue ? 'All Posts' : 'Filtered Posts'}</SubTitle>
          <span className="font-bold">({filteredBlogPosts.length})</span>
        </motion.div>

        <motion.div
          className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerHalf}
        >
          {filteredBlogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ amount: 0.6, once: true }}
              >
                <PostListItem post={post} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
}
