

export default function Layout({children}){
    return (
        <div id="container">
            <header>
                <h1>MOVIESEARCH</h1>
            </header>  
            <main>
                {children}
            </main>
        </div>
    )
}