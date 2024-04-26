import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn brn-secondary bg-pink-700 text-white text-xl">Breaking News!!</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
