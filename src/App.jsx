import MainContainer from "./MainContainer";
import SideNav from "./SideNavbar";

function App() {
  return (
    <div className="flex bg-gray-50 h-screen ">
      <SideNav />
      <MainContainer />
    </div>
  );
}

export default App;
