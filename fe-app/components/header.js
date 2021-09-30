import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <section>
      <div className="bg-blue-50">
        <Container>
          <div className="flex-row flex justify-between ">
            <h2 className="text-xl font-bold tracking-tight md:tracking-tighter leading-tight my-8 text-gray-800 ">
              <Link href="/">
                <a>
                  Zespół Szkolno Przedszkolny
                  <br /> w Ogrodniczkach
                </a>
              </Link>
            </h2>
            <h2 className="text-sm font-bold tracking-tight md:tracking-tighter leading-tight my-8 text-gray-800">
              Sekretariat: (85) 651 21 74
            </h2>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <ul className="flex-row flex justify-end items-center mt-8 mb-8">
            <li className="mr-8 text-xl text-gray-800">Strona główna</li>
            <li className="mr-8 text-xl text-gray-800">Szkoła</li>
            <li className="mr-8 text-xl text-gray-800">Galeria</li>
            <li className="mr-8 text-xl text-gray-800">Kontakt</li>
            <li className="mr-8 text-xl text-gray-800">Ogłoszenia</li>
            <li className="mr-8 text-xl text-gray-800">E-dziennik</li>
          </ul>
        </Container>
      </div>
    </section>
  );
}
