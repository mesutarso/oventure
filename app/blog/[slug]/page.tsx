import {getPostBySlug} from "@/lib/graphql/requests/posts";
import React from "react";
import Image from "next/image";


type Props = {

    params: {
        slug: string
    }
}

async function Page({params}: Props) {

    const post = await getPostBySlug(params.slug)
    return (
        <>
            <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
                <div className="container section flex items-center justify-between min-h-[40vh] ">
                    <h1 className={'text-3xl md:text-4xl text-white max-w-md pt-24'}>{post.title}</h1>
                    <div className={'pt-24'}>
                        <Image src={post.image} alt={post.title} width={400} height={400} className={'rounded'}/>
                    </div>
                </div>
            </div>
            <div className="container section">
                <div dangerouslySetInnerHTML={
                    {__html: post.content}
                } className="content prose prose-md max-w-full"/>
            </div>

        </>
    )
}

export default Page
