import "./App.css";
import ToolBar from "./ToolBar";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Panes from "./Panes";
import StatusBar from "./StatusBar";
import { Group, Panel, Separator } from "react-resizable-panels";

function App() {
  return (
    <div className="app">
      <TopBar />
      <ToolBar />
      <Group className="workspace">
        <Panel defaultSize="200px" minSize="180px">
          <SideBar />
        </Panel>
        <Separator className="separator" />
        <Panel>
          <main>
            <Group orientation="vertical">
              <Panel>
                <Panes />
              </Panel>
              <Separator className="separator-horizontal" />
              <Panel defaultSize="260px" minSize="100px">
                <div className="terminal">
                  terminal
                </div>
              </Panel>
            </Group>
          </main>
        </Panel>
      </Group>
      <StatusBar />
    </div>
  );
}

export default App;