import { useState } from "react";

function TopBar(){
    const [isDark, setIsDark] = useState(false);

    return (
    <header>
        <span>Parse</span>
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            <span className="icon">
                {isDark ? "light_mode" : "dark_mode"}
            </span>
        </button>
    </header>
    );
}

export default TopBar;