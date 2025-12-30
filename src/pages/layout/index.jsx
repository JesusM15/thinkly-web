import SideBar from "../../components/SideBar";

export default function Layout({ children }){

    return <main className="flex overflow-hidden">

        <SideBar />

        <section className="flex-1 p-0 scroll-auto">
            {children}
        </section>
    </main>
}