import "./App.css";
import ToolBar from "./ToolBar";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import StatusBar from "./StatusBar";

function App(){
  return (
    <div className="app">
      <TopBar />
      <ToolBar />
      <div className="workspace">
        <SideBar />
        <main>
          <div className="panes">
            <section className="editor">
              editor
            </section>
            <section className="preview">
              preview
            </section>
          </div>
          <div className="terminal">
            terminal
          </div>
        </main>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;