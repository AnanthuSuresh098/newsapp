import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Topstories } from "../Components/Topstories";
import { Beststories } from "../Components/Beststories";
import { Newstories } from "../Components/Newstories";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topstories" element={<Topstories />} />
        <Route path="/beststories" element={<Beststories />} />
        <Route path="/newstories" element={<Newstories />} />
      </Routes>
    </>
  );
};
