import "./App.css";
import TopBar from "./TopBar";

function App(){
  return (
    <div className="app">
      <TopBar />

      <div className="toolbar">
        tool bar
      </div>

      <div className="workspace">
        <aside className="sidebar">
          Side bar
        </aside>
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

      <footer>
        Status bar
      </footer>
    </div>
  );
}

export default App;