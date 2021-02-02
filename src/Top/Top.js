import React from "react";
import p from "./Top.module.css"

let App = () => {
    return (
        <div className={p.Bac}>
            <div>
                <form action="" target="_blank">
                    <button className={p.Home}>Home</button>
                </form>
                <form action="" target="_blank">
                    <button className={p.About_Me}>About Me</button>
                </form>
                <form action="" target="_blank">

                    <button className={p.Portfolio}>Portfolio</button>
                </form>
                <form action="" target="_blank">
                    <button className={p.Contact}>Contact</button>
                </form>
                <div className={p.Line}>
                </div>
                <a className={p.scroll_down_to_see_more}> Scroll down to see more</a>
                <div className={p.Double_Arrow}></div>
            </div>
        </div>
    );
}

export default App;
