import Link from "next/link";
import Logo from "../shared/logo";
import Partenaires from "../home/partenaires";

const now = new Date();
const year = now.getFullYear();

export default function Footer() {
  return (
    <>
      <Partenaires />
      <footer className="text-white bg-blueDark">
        <div className="container section">
          <div className=" max-w-7xl px-4 sm:px-6">
            <div className="xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12">
              <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="mb-2 font-medium ">Addresse</div>
                <p className="font-thin">3098 Av. Batetela / blvd du 30 juin, Immeuble Crown Tower , 9e niveau ,local 904, Kinshasa, Democratic Republic of the Congo
                </p>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="mb-2 font-medium ">Téléphones</div>
                <p className="font-thin">Reception: +243 994 235 789</p>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="mb-2 font-medium ">Email</div>
                <p className="font-thin">
                  <Link href="mailto:contact@decarbone.org">
                  contact@decarbone.org
                  </Link>
                </p>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="mb-2 font-medium ">Réseaux Sociaux</div>
                <ul className="mb-4 -ml-2 rtl:ml-0 rtl:-mr-2 flex md:order-1 md:mb-0">
                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm "
                      aria-label="Twitter"
                      href="https://x.com/oventuredrc?s=21"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-twitter h-5 w-5"
                      >
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100"
                      aria-label="Instagram"
                      href="https://www.instagram.com/oventuredrc?igsh=MTE0OTF4YTF6a2lqYw%3D%3D&utm_source=qr"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-instagram h-5 w-5"
                      >
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M16.5 7.5l0 .01"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100"
                      aria-label="Facebook"
                      href="https://www.facebook.com/Oventuredrc?mibextid=LQQJ4d"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-facebook h-5 w-5"
                      >
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100"
                      aria-label="RSS"
                      href="https://www.linkedin.com/in/oventure-drc-5ab529313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-rss h-5 w-5"
                      >
                        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M4 4a16 16 0 0 1 16 16"></path>
                        <path d="M4 11a9 9 0 0 1 9 9"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-muted py-6 text-sm  md:flex md:items-center md:justify-between md:py-8">
              <ul className="mb-4 flex pl-2 rtl:pl-0 rtl:pr-2 md:order-1 md:mb-0">
                <li>
                  <a
                    className="duration-150 ease-in-out placeholder:transition"
                    aria-label="Terms &amp; Conditions"
                    href="/terms"
                  >
                    Termes &amp; Conditions
                  </a>
                  <span className="mr-1 rtl:mr-0 rtl:ml-1"> · </span>
                </li>
                <li>
                  <a
                    className="duration-150 ease-in-out placeholder:transition "
                    aria-label="Privacy Policy"
                    href="/privacy"
                  >
                    Politique de Confidentialité.
                  </a>
                </li>
              </ul>
              <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
                <span>
                Powered by {" "}
                  <a
                    className="font-semibold text-slate-900"
                    href="https://iconesrdc.com/"
                    target="_blank"
                  >
                    <b>ICÔNES créa et stratégies</b>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
