import React from 'react'
import FormContact from "@/components/form/contact";

function Contact() {
    return (
        <>

    <div className={'bg-gradient-to-tl from-blueDark to-blueLight '}>
        <div className="container section flex items-center min-h-[40vh] ">
            <h1 className={'text-3xl md:text-7xl text-white uppercase pt-24 font-black'}>Contact</h1>
        </div>
    </div>
    <div className={"bg-gray-200"}>

        <div
            className={
                "section content container flex flex-col items-center gap-8 lg:flex-row"
            }
        >
            <div className={"w-full lg:w-1/2"}>
                <h3 className={"mb-8 text-3xl font-semibold text-primary"}>
                    Votre avis compte : <br/>
                    Demandez, proposer, suggérer, critiquer, complimenter, etc.

                </h3>
                <p>
                    Nous sommes à votre écoute pour toute suggestion, proposition,
                    critique et demande d&apos;informations, de renseignements, etc.
                </p>
                <div className={"grid grid-cols-1 gap-8 md:grid-cols-2"}>
                    <div className={""}>
                        <h4 className={"text-md my-2 font-semibold text-primary"}>
                            Pour informations générales
                        </h4>
                        <p>
                            <a href="mailto:info@cfef.cd">contact@oventure-drc.com</a>
                        </p>
                        <p>
                            <a href="243 829 441 411">+337 77 86 44</a>
                        </p>
                        <div className={"mt-4 h-1 w-[80%] bg-primary"}/>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <FormContact/>
            </div>
        </div>
    </div>
        </>
)
}

export default Contact
