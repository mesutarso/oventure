import Image from "next/image"

function Logo() {
    return (
        <div className="z-20 ">
            <Image src={'/logo.png'} alt="logo" width={300} height={40} className="mix-blend-multiply" />
        </div>
    )
}

export default Logo