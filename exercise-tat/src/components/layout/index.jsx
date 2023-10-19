import "./layout.scss";

export default function Layout({children}){
    return(
        <>
            <div className="bg-layout">
                <div className="layout-container position-relative mx-auto">
                <div>{children}</div>
                </div>
            </div>
        </>
    )
}