import React, { useState } from "react";
import Nav from "./components/Nav";
import IntroPage from "./pages/IntroPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [menu, setMenu] = useState<string>("intro");

  return (
    <div className="w-screen h-screen flex justify-end">
      <Nav menu={menu} setMenu={setMenu} />
      {menu === "intro" ? <IntroPage /> : menu === "skill" ? <SkillsPage /> : <ProjectsPage />}
    </div>
  );
};

export default App;
