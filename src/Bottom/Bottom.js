import React from "react";
import p from "./Bottom.module.css"
let App =()=> {
    return (
        <div className={p.Bot}>
            <form action="" target="_blank">
                <button className={p.Home}>Home</button>
            </form>
            <form action="" target="_blank">
                <button className={p.About_Me_}>About Me</button>
            </form>
            <form action="" target="_blank">

                <button className={p.Portfolio}>Portfolio</button>
            </form>
            <form action="" target="_blank">
                <button className={p.Contact}>Contact</button>
            </form>
            <div className={p.Line}>
            </div>
            <div>
                <p className={p.Jason_Wood}></p>
                <a className={p.About_Me}> About Me</a>
                <a className={p.Lorem1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>
                <a className={p.Lorem2}>Duis aute irure dolor in reprehenderit in voluptate velit <br/> esse cillum dolore eu fugiat nulla pariatur</a>
                <a className={p.Jason_Wood2}>Jason Wood</a>
            </div>
            <a className={p.keep}>Keep scrolling there is still more to come</a>
            <a className={p.Double_Arrow}></a>
        </div>
    );
}

export default App;
