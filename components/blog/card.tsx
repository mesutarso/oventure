'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
    title: string;
    slug: string;
    date: string;
    image: string;
    categories: string;
    excerpt: string;
}

function BlogCard({ title, slug, date, image, categories, excerpt }: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-full"
        >
            <Link href={`/blog/${slug}`}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg ">
                    <div className="relative h-48 w-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                        <CardDescription className="line-clamp-3" dangerouslySetInnerHTML={{ __html: excerpt }} />
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{date}</span>
                            <span>{categories}</span>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        </motion.div>
    )
}

export default BlogCard;
