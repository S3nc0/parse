import "./App.css";
import ToolBar from "./ToolBar";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import StatusBar from "./StatusBar";
import { Group, Panel, Separator } from "react-resizable-panels";

function App(){
  return (
    <div className="app">
      <TopBar />
      <ToolBar />
      <div className="workspace">
        <SideBar />
        <main>
          <Group className="panes">
            <Panel defaultSize="47%">
              <section className="editor">editor</section>
            </Panel>
            <Separator />
            <Panel defaultSize="53%">
              <section className="preview">preview</section>
            </Panel>
          </Group>
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