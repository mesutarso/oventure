import Image from "next/image";

function Teachers() {
    return (
        <div className={'bg-black '}>
            <div className={'container section space-y-10'}>
                <h1 className={'text-center text-3xl font-semibold mb-4 '}>
                    Cours de formation par les enseignants de Climate School
                </h1>
                <p className={'text-center text-gray-400'}>
                    Cours de formation par les enseignants de Climate School
                </p>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}>
                   <div className="card bg-white border-4 border-b-8 border-primary rounded-2xl">
                       <div className="card-images">
                           <Image src={'/images/oventure-cover.png'} alt={'finance-school'} width={450} height={400} className={'rounded-t-2xl'}/>
                       </div>
                       <div className="content p-6 text-center">
                            <h2 className={'text-2xl font-bold'}>
                                Paola Arias
                            </h2>
                            <p>
                                Climatologue, co-autrice du 6e rapport du GIEC
                            </p>
                       </div>
                   </div>

                </div>
            </div>

        </div>
    )
}

export default Teachers
