import { fetchGraphql } from "@/lib/graphql/init";
import { GET_SERVICES, GET_SERVICE_BY_SLUG } from "@/lib/graphql/queries";

export const getServices = async () => {
  const {
    services: { edges },
  } = await fetchGraphql(GET_SERVICES);
  return edges.map(({ node }: any) => {
    return {
      id: node.id,
      title: node.title,
      content: node.content,
      image: node.featuredImage.node.sourceUrl,
      slug: node.slug,
    };
  });
};

export const getServiceBySlug = async (slug: string) => {
  const data = await fetchGraphql(GET_SERVICE_BY_SLUG, { id: slug });
  return {
    title: data.service.title,
    content: data.service.content,
    image: data.service.featuredImage.node.sourceUrl,
    video: data.service.services?.video?.node.mediaItemUrl,
    gallery:
      data.service.services?.gallerie?.edges.map(({ node }: any) => {
        return {
          src: node.sourceUrl,
          original: node.sourceUrl,
          height: 500,
          width: 500,
        };
      }) || [],
  };
};
