import { Name } from "./MetaData";

function Header() {

  const Iconstyles= "text-[#848D99] p-2";
  return (
    <div className="bg-[#010508] border-b border-b-[#31363C]">
      <div className="justify-between flex px-4 py-3 items-center text-[#E6ECF2] pt-4">
        <div className="flex gap-4 items-center">
         {/* <MenuBar /> */}
         <button className="text-sm flex border text-[#848D99] border-[#31363C] rounded-md p-2 justify-center ">
        <i className="pi pi-bars" />
      </button>

          <div className="flex gap-4 items-center">
            <a href="https://github.com/4nth0nyr0zar10" className="pi pi-github text-3xl" />
            <a className="font-sans font-semibold text-sm items-center" href="/">
              {Name}
            </a>
          </div>
        </div>

        <div className="flex gap-2 ">

        <button className="text-sm text-start items-center flex border w-80 text-[#848D99] border-[#31363C] rounded-md py-1 px-2 gap-2 ">
            <i className="pi pi-search text-base" />
            <h3>Type <i className="border border-[#848D99] text-[11px] px-[3px] pb-0.5  rounded ">/</i> to search</h3>
          </button>

          <i className="text-[#31363C] text-xl">|</i>

        <button className="text-xs items-center flex border text-[#848D99] border-[#31363C] rounded-md px-3 justify-center gap-4">
          <i className="pi pi-plus font-bold" />
          <i className="pi pi-sort-down-fill text-[8px]" />
        </button>

        <button className="text-sm font-light items-center flex border text-[#848D99] border-[#31363C] rounded-md p-2 justify-center ">
            <i className="fa-regular fa-circle-dot" />
          </button>

        <button className="text-sm font-light items-center flex border text-[#848D99] border-[#31363C] rounded-md p-2 justify-center ">
            <i className="fa-solid fa-code-pull-request" />
          </button>

       {/* <InboxButton /> */}
       <button className="text-base items-center flex border text-[#848D99] border-[#31363C] !rounded-md p-2 justify-center " >
            <i className="pi pi-inbox" />
          </button>

        </div>
      </div>
      <div className="bg-[#010508] flex px-3 text-[#E7ECF3]">

        <a href="" className="hover:border-b-2 border-[#C46F5A]"><i className={`pi pi-user ${Iconstyles}`} />Overview</a>
        <a href="" className="hover:border-b-2 border-[#C46F5A]"><i className={`pi pi-address-book ${Iconstyles}`} />Abouts</a>
        <a href="" className="hover:border-b-2 border-[#C46F5A]"><i className={`pi pi-box ${Iconstyles}`} />Projects</a>
      </div>
    </div>
  );
}

export default Header;
