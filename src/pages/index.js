 
import Main from '../components/layouts/Main';
import {
  ArrowIcon,
} from '../components/elements/Icons';
import { GrGithub,   } from "react-icons/gr"

const LandingPage = () => {


  return (
    <Main>
      <h1 className="font-bold text-7xl text-gray-800 mb-2 max-w-2xl leading-[1.2em] text-center">
        <span className="text-transparent bg-clip-text bg-brand">
          Histories.cc
        </span>
      </h1>
      <h3 className="font-bold text-4xl text-gray-800 mb-12 max-w-2xl leading-[1.2em] text-center">
        Platforma pro sdílení historických fotografií
      </h3>
      {/* BUTTONS */}
      <div className="flex gap-4 flex-col flex-wrap px-4 sm:flex-row">
        {/* DOCUMENTATION */}
        <a
          className="button"
          href="/Histories-dokumentace.pdf"
        >
          Dokumentace .pdf
        </a>
        <a
          className="button"
          href="https://github.com/histories-cc/SOC_dokumentace"
        >
          Dokumentace .tex
        </a>

        {/* SOURCE CODE */}
        <a className="button" href="https://www.github.com/histories-cc/histories">
            <GrGithub className="w-6 h-6" />

          Zdrojový kód
        </a>

        <a className="button" href="https://b2018linhma.delta-www.cz/maturita/">
          Grafická část
        </a>


        {/* EXPLORE */}
        <a className="button-primary" href="https://www.histories.cc">
          Prozkoumat Histories
          <span className="w-4 h-4 text-white">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </Main>
  );
};

export default LandingPage;
