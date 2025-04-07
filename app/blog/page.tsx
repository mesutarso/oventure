
import { getAllPosts } from '@/actions/articles';
import BlogCard from '@/components/blog/card';
async function BlogPage() {
    const posts = await getAllPosts();
    return (
        <>
            <div className={"bg-gradient-to-tl from-blueDark to-blueLight "}>
                <div className="container section flex items-center min-h-[40vh] ">
                    <h1
                        className={
                            "text-3xl md:text-7xl text-white uppercase pt-24 font-black"
                        }
                    >
                        Blog
                    </h1>
                </div>
            </div>
            <div className="container section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        posts?.map((post: any, index: number) => (
                            <BlogCard key={index} {...post} />
                        ))
                    }
                </div>


            </div>
        </>
    )
}

export default BlogPage