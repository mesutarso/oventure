import  {fetchGraphql} from "@/lib/graphql/init";
import {GET_OFFERS} from "@/lib/graphql/queries";

export async function getOffers() {
  const data = await fetchGraphql(GET_OFFERS);
  return data.offres.edges.map(({ node }:any) => node);
}