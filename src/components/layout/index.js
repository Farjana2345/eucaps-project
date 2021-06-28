import Header from "../header/header";

function Layout ({children}){
    return(
        <div>
            <Header></Header>
            {children}
        </div>
    )
}
export default Layout;