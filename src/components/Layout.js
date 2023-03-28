import { Outlet } from "react-router-dom";
import Search from "./Search";

export default function Layout({children}){
    return (
        <div id="container">
            <header>
                <h1>MOVIESEARCH</h1>
            </header>  
            <nav>
                
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}