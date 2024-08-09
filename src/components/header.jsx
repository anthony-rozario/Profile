import {Name} from "./MetaData"

function Header() {
  return (
    <>
      <div className="justify-between flex px-[2vw] py-[1vh] shadow-lg z-10 items-center text-slate-50">
        <a href="/">
          <h1 className="font-sans uppercase font-semibold text-lg  items-center">
          {Name}
          </h1>
        </a>

        <div className="flex gap-6 ">
        <a href="" className="hover:text-slate-300">Home</a>
        <a href="" className="hover:text-slate-300">Projects</a>
        <a href="" className="hover:text-slate-300">About</a>
        <a href="" className="hover:text-slate-300">Contact</a>
        </div>

        {/* Social media links  */}
        <div className="flex gap-6">
          <div className="flex text-2xl gap-2 items-center">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="pi pi-instagram" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="pi pi-linkedin" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="pi pi-twitter" />
            </a>
            <a href={`http://`} target="_blank" rel="noopener noreferrer">
              <i className="pi pi-github" />
            </a>
          </div>
          {/* social media links ends */}

        {/* Resume downloads */}
          <a className="px-4 py-2 border-2 border-slate-300 bg-slate-950">
            Resume <i className="pi pi-download"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
