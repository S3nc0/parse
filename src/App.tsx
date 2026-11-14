import "./App.css";

function App(){
  return (
    <div className="app">
      <header>
        Top bar
      </header>

      <div className="toolbar">
        tool bar
      </div>

      <div className="workspace">
        <aside className="sidebar">
          Side bar
        </aside>
        <main>
          main
        </main>
      </div>

      <footer>
        Status bar
      </footer>
    </div>
  );
}

export default App;