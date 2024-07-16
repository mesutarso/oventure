import Partenaires from "./partenaires"

function Hero() {
    return (
        <div className='absolute inset-0 bg-hero h-full flex flex-col justify-center items-center text-white text-center'>
            <div className="container section lg:max-w-4xl space-y-10">
                <h1 className='text-3xl lg:text-6xl font-semibold ' data-aos="fade-up">
                    Catalyseur d&apos;innovation pour un monde durable.
                </h1>
                <p className='text-sm md:text-md text-normal text-[#ffffffb0]' data-aos="fade-up">
                    Sous le haut patronage du chef de l&apos;État Félix Antoine Tshisekedi Oventure RDC organise l’atelier de renforcement des capacités sur la finance climat <br /> les 20, 21 et 22 octobre 2024 au Centre financier de Kinshasa.
                </p>
                <div className="">
                    <Partenaires />
                </div>
            </div>

        </div>
    )
}

export default Hero