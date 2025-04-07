import { getPostBySlug } from "@/actions/articles"
import BlogDetails from "@/components/blog/details"


type Props = {
    params: Promise<{ slug: string }>

}

async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    return (
        <div>
            <div className={"bg-gradient-to-tl from-blueDark to-blueLight "}>
                <div className="container section flex items-center min-h-[40vh] ">
                    <h1
                        className={
                            "text-3xl md:text-7xl text-white uppercase pt-24 font-black"
                        }
                    >
                        Blog Detail
                    </h1>
                </div>
            </div>
            <BlogDetails post={post} />
        </div>
    )
}

export default BlogDetailPage