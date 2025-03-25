import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhatWeDo() {
  return (
    <section className="bg-[#0e342d] text-white mb-24">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Column */}
          <div className="w-full h-full max-h-[600px] relative rounded-lg overflow-hidden">
            <Image
              src="/images/D3-min_zkc2im.jpg"
              alt="Sunlight streaming through forest with purple wildflowers"
              width={600}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Partenariats pour l&apos;innovation</h2>
            <ul className="space-y-4">
              {[
                "Accompagnement des startups : Nous aidons les entreprises à développer des solutions financières axées sur le climat, telles que des technologies vertes, des systèmes de financement durable ou des modèles économiques circulaires.",
                "Validation des idées : Nous facilitons la validation des concepts liés à la finance climat, permettant aux entrepreneurs de tester et d’affiner leurs projets avant de les lancer sur le marché.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#4cd4c0] mr-3 mt-1.5 flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Content Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Accès aux financements</h2>
            <ul className="space-y-4">
              {[
                "Mise en relation avec des investisseurs : Connections de startups avec des investisseurs spécialisés dans la finance climat, tels que des fonds d'impact ou des investisseurs institutionnels soucieux de la Nouvelle Économie du Climat.",
                "Aide à la préparation de dossiers : Assistance aux entrepreneurs dans la préparation de business plans et de présentations convaincantes pour obtenir des financements.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#4cd4c0] mr-3 mt-1.5 flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
            
          {/* Image Column */}
          <div className="w-full h-full max-h-[600px] relative rounded-lg overflow-hidden">
            <Image
              src="/images/D22-min_cljznn.jpg"
              alt="Sunlight streaming through forest with purple wildflowers"
              width={600}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>


        </div>
      </div>
    </section>
  )
}

