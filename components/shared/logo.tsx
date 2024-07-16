import Image from "next/image"

function Logo() {
    return (
        <div className="z-20">
            <Image src={'/logo-transparent.png'} alt="logo" width={300} height={40} />
        </div>
    )
}

export default Logo