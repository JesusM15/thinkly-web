import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSetById } from "../../../api/sets";
import Layout from "../layout";
import colors from "../../constants/colors";
import QuestionTypeCard from "../../components/QuestionTypeCard";
import { IoListOutline } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
import GraphManagerPage from "./GraphManagerPage";

export default function SetCreatorPage(){
    const { id } = useParams();
    const [ set, setSet ] = useState(null);
    const [ questionMode, setQuestionMode ] = useState(null);

    const getSetData = async (id) => {
        const data = await getSetById(id);
        setSet(data);
    };

    useEffect(() => {
        if(id){
            getSetData(id);
        }
    }, [id]);

    return <Layout>

  <section className="h-screen" style={{
            background: colors.background,
        }}>
            <header className="bg-white border border-gray-100 px-12 py-3">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl" style={{
                        color: colors.textPrimary
                    }}>
                        {set?.title}
                    </h1>
                    <span className="text-sm" style={{
                        color: colors.textSecondary
                    }}>
                        {set?.questions?.length || 0} Preguntas
                    </span>
                    <ul className="">
                        {
                            set?.tags?.map((tag) => (
                                <li key={tag} className="inline-block bg-indigo-100 rounded-md px-3 py-1 text-xs 
                                font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </header>
            {questionMode === 'graph_question' && <GraphManagerPage set={set} /> }

              {!questionMode && <>
                <section className="grid grid-cols-2 p-12 gap-6 flex-wrap">
                    <QuestionTypeCard
                        type="multiple_choice"
                        title="Pregunta de opción múltiple"
                        description="Pregunta clasica con varias opciones, donde solo una es correcta."
                        onSelect={(type) => {
                            console.log("Selected question type:", type);
                        }}
                        Icon={IoListOutline}
                        textColor="text-indigo-700"
                        bgColor="bg-indigo-100"
                    />
                    
                    

                    <QuestionTypeCard
                        type="graph_question"
                        title="Grafo interactivo"
                        description="Pregunta visual con nodos, conexiones y caminos."
                        onSelect={(type) => {
                            setQuestionMode(type);
                        }}
                        Icon={PiGraph}
                        textColor="text-purple-700"
                        bgColor="bg-purple-100"
                    />



                </section>
                
                <section>

                </section>
              </>  }

        </section>
    </Layout>
}