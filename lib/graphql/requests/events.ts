import {fetchGraphql} from "@/lib/graphql/init";
import {GET_EVENTS,GET_EVENT_BY_SLUG} from "@/lib/graphql/queries";
import {getMonthandDate,formatDate} from "@/lib/utils";


export async function getEvents() {
    const data = await fetchGraphql(GET_EVENTS);
    return data?.evenements?.edges.map(({node}:any) => {
        const {day, month} = getMonthandDate(node.events.dateDeLevenement)
        return {
            id: node.id,
            title: node.title,
            content: node.content,
            slug: node.slug,
            image: node.featuredImage?.node.sourceUrl,
            date: {
                day,
                month
            }
        }
    });
}

export async function getEventBySlug(slug: string) {
    const data = await fetchGraphql(GET_EVENT_BY_SLUG, {id: slug});
    return {
        title: data.evenement.title,
        content: data.evenement.content,
        image: data.evenement.featuredImage?.node.sourceUrl,
        date: formatDate(data.evenement.events.dateDeLevenement)
    };
}