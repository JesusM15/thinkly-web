import SideBar from "../../components/SideBar";

export default function Layout({ children }){

    return <main className="flex gap-4 overflow-hidden">

        <SideBar />

        <section className="flex-1 p-5 scroll-auto">
            {children}
        </section>
    </main>
}