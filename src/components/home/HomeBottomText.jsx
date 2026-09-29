import { Link } from "react-router";


const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 ">
      
      <div className="border-3 uppercase border-white rounded-full px-5 pt-2 leading-[6vw] flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw]" to="/projects">
          Projects
        </Link>
      </div>

      <div className="border-3 uppercase border-white rounded-full px-5 pt-1 leading-[6vw] flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw]" to="/agence">
          Agence
        </Link>
      </div>
      
    </div>
  );
};

export default HomeBottomText;
