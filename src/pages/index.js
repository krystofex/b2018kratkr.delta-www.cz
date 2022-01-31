import Main from '../components/layouts/Main';
import { GithubIcon, ArrowIcon } from '../components/elements/Icons';

const LandingPage = () => {
  return (
    <Main>
      <h1 className="font-bold text-7xl text-gray-800 mb-12 max-w-2xl leading-[1.2em] text-center">
        {"Let's get started with "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9000]  to-[#D12FC4]">
          Histories
        </span>
      </h1>
      {/* BUTTONS */}
      <div className="flex gap-4 flex-col sm:flex-row">
        {/* DOCUMENTATION */}
        <a
          className="button"
          href="https://github.com/histories-cc/SOC_dokumentace"
        >
          Documentation
        </a>

        {/* SOURCE CODE */}
        <a className="button" href="https://www.github.com/histories-cc">
          <span className="w-6 h-6">
            <GithubIcon />
          </span>
          Source code
        </a>

        {/* EXPLORE */}
        <a className="button-primary" href="https://www.histories.cc">
          Explore
          <span className="w-4 h-4">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </Main>
  );
};

export default LandingPage;
