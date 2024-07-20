'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { ChevronRight } from 'lucide-react';

type Props = {
    label: string
    href: string
    subItems: { title: string, url: string }[]
    onClick?: () => void
}


function DrawerDropdown({ label, href, subItems,onClick }: Props) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <span className='hover:bg-neutral-200 px-4 py-1 rounded uppercase text-normal text-primary'>{label}</span> </AccordionTrigger>
                <AccordionContent>
                    <ul className="px-4">
                        {subItems.map((item, index) => (
                            <li key={index} className='mb-2' onClick={onClick}>
                                <Link href={item.url} >
                                    <span className='flex gap-2 items-center text-md text-primary' >
                                        <ChevronRight className='max-w-8' />
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}

export default DrawerDropdown