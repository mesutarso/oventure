import { fetchGraphql } from "../init";
import { GET_TARIFS } from "../queries";

export const getTarifs = async () => {
  const {
    tarifs: { edges },
  } = await fetchGraphql(GET_TARIFS);
  return edges.map(({ node }: any) => {
    return {
      title: node.title,
      image: node.featuredImage.node.sourceUrl,
      price: node.tarifsField.price,
      tarifs: node.tarifsField.elements.map(({ element }: any) => element),
    };
  });
};
