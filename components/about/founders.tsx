import Image from "next/image";

function Founders() {
  return (
    <div
      className={"container section"}
      data-aos="zoom-out-down"
      data-aos-duration="2500"
    >
      <h1
        className={
          "text-3xl md:text-4xl font-semibold text-blueDark uppercase text-center mb-8"
        }
      >
        Nos fondateurs
      </h1>
      <div className="flex items-start gap-10 justify-center flex-wrap">
        <div
          className={
            "card max-w-[403px] min-h-[400px] rounded-2xl border-2 border-b-8 border-primary"
          }
        >
          <div className="card-image w-full md:w-[400px] h-[400px] relative">
            <Image
              src={"/founders/founders-1.jpg"}
              alt={"founders"}
              fill
              className={"rounded-t-2xl object-cover "}
            />
          </div>
          <div className="card-content p-5">
            <h3>
              <strong className={"text-primary text-xl font-semibold mb-2"}>
                Richard Impenge Sapu
              </strong>
            </h3>
            <p className="role">
              <strong className={"text-blueDark text-lg font-semibold"}>
                Président
              </strong>
            </p>
            <p className="description font-normal text-sm">
              Diplômé de Stanford University et de l’ESCP, Richard possède plus
              de 15 ans d&apos;expérience dans les nouvelles technologies et le
              conseil. Passionné par l’innovation, il a développé des solutions
              disruptives dans les secteurs de la finance, de la mobilité et du
              retail. Reconnu pour son expertise, Richard a acquis une
              expérience globale en travaillant aux quatre coins du monde. Sa
              carrière internationale s&apos;étend aux États-Unis, en Europe, en
              Asie et en Afrique. Engagé, il a notamment contribué à définir et
              implémenter la stratégie de levée de fonds de la Fondation
              Positive Planet, fondée par Jacques Attali.
            </p>
          </div>
        </div>
        <div
          className={
            "card max-w-[405px] min-h-[400px] rounded-2xl  border-2 border-b-8 border-primary "
          }
        >
          <div className="card-image w-[400px] h-[400px] relative">
            <Image
              src={"/founders/founders-2.jpg"}
              alt={"founders"}
              fill
              className={"rounded-t-2xl object-cover "}
            />
          </div>
          <div className="card-content p-5">
            <h3>
              <strong className={"text-primary text-xl font-semibold mb-2"}>
                Dr. Roberto Ridolfi
              </strong>
            </h3>
            <p className="role">
              <strong className={"text-blueDark text-lg font-semibold"}>
                Chief Strategy Officer
              </strong>
            </p>
            <p className="description font-normal text-sm">
              Roberto est une sommité et un expert reconnu dans le domaine du
              climat. Défenseur infatigable de la durabilité, il a précédemment
              occupé le poste de Directeur de l&apos;Union Européenne en charge
              du climat. Tout au long de sa carrière, Roberto a promu le rôle
              crucial de la société civile dans la durabilité. Conseiller en
              investissement chevronné, son esprit innovant a permis de créer
              des emplois durables grâce à des stratégies de financement. Son
              expertise couvre le Plan d&apos;Investissement de l&apos;UE, les
              Objectifs de Développement Durable (ODD) et le financement mixte.
              En tant qu&apos;ancien Ambassadeur de l&apos;UE, il possède une
              vaste expérience en négociation internationale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
