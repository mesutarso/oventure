import Image from 'next/image'
import Link from 'next/link'

type Post = {
    title: string
    excerpt: string
    date: string
    content: string
    image: string
    categories: string
    similarPosts: {
        title: string
        slug: string
        date: string
        image: string
        excerpt: string
        categories: string
    }[]
}

type Props = {
    post: Post
}

function BlogDetails({ post }: Props) {
    return (
        <div className="container section">

            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center gap-4 text-gray-600">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.categories}</span>
                    </div>
                </div>

                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>


                {post.similarPosts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {post.similarPosts.map((similarPost) => (
                                <Link
                                    key={similarPost.slug}
                                    href={`/blog/${similarPost.slug}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <div className="relative h-48">
                                            <Image
                                                src={similarPost.image}
                                                alt={similarPost.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                                                {similarPost.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2">
                                                {similarPost.date}
                                            </p>
                                            <div
                                                className="text-gray-700 line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: similarPost.excerpt }}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogDetails