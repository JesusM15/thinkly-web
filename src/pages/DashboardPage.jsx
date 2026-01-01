import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import { useAuthStore } from "../store/auth";
import Layout from "./layout";
import Streak from "../components/Streak";
import Button from "../components/Button";
import RadiusButton from "../components/RadiusButton";
import LevelCard from "../components/LevelCard";
import { useNavigate } from "react-router";


const DashboardPage = (props) => {
    const user = useAuthStore((state) => state.user);
    const { t } = useTranslation('common');
    const { t: tDash } = useTranslation('dashboard');

    const navigate = useNavigate();

    return <Layout>
        <section className="flex justify-between border-b p-4 px-8 border-gray-200">
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
                <RadiusButton 
                    label={t('newSet')}
                    backgroundColor={colors.primary}
                    onClick={() => {
                        navigate({
                            pathname: '/formset/'
                        });
                    }}
                />
            </article>
        </section>
        <section className="bg-gray-100 px-8 h-full pt-8">

            <LevelCard user={user} />

        </section>
    </Layout>
}

export default DashboardPage;