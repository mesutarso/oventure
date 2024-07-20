import {fetchGraphql} from "@/lib/graphql/init";
import {GET_POSTS,GET_POST_BY_SLUG} from "@/lib/graphql/queries";
import {formatDate} from "@/lib/utils";

export async function getPosts() {
    const data = await fetchGraphql(GET_POSTS);
    return data?.posts?.edges.map(({node}:any) => ({
        id: node.id,
        slug: node.slug,
        title: node.title,
        excerpt: node.excerpt,
        date: formatDate(node.date),
        image: node.featuredImage?.node.sourceUrl
    }));
}


export async function getPostBySlug(slug: string) {
    const data = await fetchGraphql(GET_POST_BY_SLUG, {id: slug});
    return {
        title: data.post.title,
        content: data.post.content,
        date: formatDate(data.post.date),
        image: data.post.featuredImage?.node.sourceUrl
    };
}