import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import { useAuthStore } from "../store/auth";
import Layout from "./layout";
import Streak from "../components/Streak";
import Button from "../components/Button";
import { AiOutlinePlus } from "react-icons/ai";


const DashboardPage = () => {
    const user = useAuthStore((state) => state.user);
    const { t } = useTranslation('common');
    const { t: tDash } = useTranslation('dashboard');

    return <Layout>
        <section className="flex justify-between ">
            <div className="flex-1">
                <h1 className="font-bold text-3xl" style={{color: colors.textPrimary}}>
                    ¡{t('Hi')}, {user?.username}!
                </h1>
                <p className="py-1.5 text-md" style={{color: colors.textSecondary}}>
                    {tDash('welcomeMessage')}
                </p>
            </div>
            <article className="flex flex-row  gap-4 items-center">
                <Streak 
                    user={user}
                />
                <button className="px-4 text-white font-semibold py-2 rounded-full flex flex-row gap-1 items-center" style={{
                    backgroundColor: colors.primary,
                }}>
                    <AiOutlinePlus 
                        color={"#fff"}
                        size={20}
                    />
                    Nuevo set
                </button>
            </article>
        </section>
    </Layout>
}

export default DashboardPage;