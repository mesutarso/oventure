'use client'

import Link from 'next/link'


type Props = {
    label: string
    href: string
    onClick?: () => void

}

function DrawerItem({ label, href,onClick}:Props) {
    return (
        <div>
            <Link href={href} className=''>
                <span onClick={onClick} className='hover:bg-neutral-200 px-4 py-1 rounded uppercase text-normal text-primary'>
                    {label}
                </span>
            </Link>
        </div>
    )
}

export default DrawerItem