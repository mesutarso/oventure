import React from 'react'
import {BentoGrid,BentoGridItem} from "@/components/ui/bento-grid";
import {getPosts} from "@/lib/graphql/requests/posts";


async function Posts() {
    const posts = await getPosts();
    return (
        <div>

            <BentoGrid>
                {posts?.map((post: any) => (
                    <BentoGridItem
                        key={post.slug}
                        title={post.title}
                        description={post.excerpt}
                        image={post.image}
                        slug={post.slug}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Posts
