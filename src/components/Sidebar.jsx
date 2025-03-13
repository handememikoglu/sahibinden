export default function Sidebar({navigate,page}){

    const changeMenu = (e) =>{
        e.preventDefault();
        const link = e.target.closest("a");
        if(link){
            const path = new URL (link.href, window.location.origin).pathname;
            console.log("🔀 Menü değiştiriliyor:", path);
            navigate(path);
        }
    }
    return(
        <div className="sidebar-container">
            <div className="sidebar-icon">
                <a href="/konut" onClick={changeMenu}><i className="fa-solid fa-house"></i> Konut</a>
                <a href="/vasita" onClick={changeMenu}><i className="fa-solid fa-car-side"></i> Araç</a>
            </div>
        </div>
    )
}