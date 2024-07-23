import Posts from "@/components/blog/posts";

function Blog() {
    return (
        <>
        <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
            <div className="container section flex items-center min-h-[40vh] ">
                <h1 className={'text-3xl md:text-7xl text-white uppercase pt-24'}>Blog</h1>
            </div>
        </div>
            <div className="container section">

                <Posts/>
            </div>
        </>
    )
}

export default Blog
