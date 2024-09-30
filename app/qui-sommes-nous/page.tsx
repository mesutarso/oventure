import Description from "@/components/about/description";
import Hero from "@/components/about/hero";
import Founders from "@/components/about/founders";
import Teams from "@/components/about/teams";

function QuiSommesNous() {
    return (
        <>
            <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
                <div className="container section flex items-center min-h-[40vh] ">
                    <h1 className={'text-3xl md:text-7xl text-white uppercase pt-24 font-black'} data-aos="zoom-out-down" data-aos-duration="2500">Qui sommes nous</h1>
                </div>
            </div>
            <Hero/>
            <Description/>
            {/* <Founders/> */}
            <Teams/>

        </>
    )
}

export default QuiSommesNous
