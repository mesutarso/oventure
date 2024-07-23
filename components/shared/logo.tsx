import Image from "next/image"
import Link from "next/link"

type Props = {
    isSticky?: Boolean
}

function Logo({ isSticky }: Props) {
    return (
        <>
            {
                isSticky ? (
                    <Link href={'/'}>
                        <Image src={'/logo-transparent.png'} alt="logo" width={300} height={40} className="mix-blend-multiply" />
                    </Link>

                ) : (
                    <Link href={'/'}>
                        <Image src={'/logo.png'} alt="logo" width={300} height={40} className="mix-blend-multiply" />
                    </Link>
                )
            }
        </>
    )
}

export default Logo