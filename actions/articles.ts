"use server";

import { fetchGraphql } from "@/lib/graphql/init";
import { GET_ALL_POST, GET_POST_BY_SLUG } from "@/lib/graphql/queries";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const getAllPosts = async () => {
  const {
    data: { posts },
  } = await fetchGraphql(GET_ALL_POST);
  return posts.edges?.map((edge: any) => {
    return {
      title: edge.node?.title,
      slug: edge.node?.slug,
      date: format(new Date(edge.node?.date), "d MMMM yyyy", { locale: fr }),
      image: edge.node?.featuredImage?.node?.sourceUrl || "/images/hero2.webp",
      excerpt: edge.node?.excerpt,
      categories: edge.node?.categories?.edges.map(
        (category: any) => category.node?.name
      )[0],
    };
  });
};

export const getPostBySlug = async (slug: string) => {
  const {
    data: { post },
  } = await fetchGraphql(GET_POST_BY_SLUG, { slug });
  return {
    title: post?.title,
    excerpt: post?.excerpt,
    date: format(new Date(post?.date), "d MMMM yyyy", { locale: fr }),
    content: post?.content,
    image: post?.featuredImage?.node?.sourceUrl || "/images/hero2.webp",
    categories: post?.categories?.edges.map((edge: any) => edge.node)[0]?.name,
    similarPosts: post?.categories?.edges
      .map((edge: any) => edge.node)[0]
      ?.posts?.edges.map((edge: any) => {
        return {
          title: edge.node?.title,
          slug: edge.node?.slug,
          date: format(new Date(edge.node?.date), "d MMMM yyyy", {
            locale: fr,
          }),
          image:
            edge.node?.featuredImage?.node?.sourceUrl || "/images/hero2.webp",
          excerpt: edge.node?.excerpt,
          categories: post?.categories?.edges.map((edge: any) => edge.node)[0]
            ?.name,
        };
      })
      .filter((item: any) => item.slug !== post?.slug),
  };
};
