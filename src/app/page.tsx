import Form from "./_components/form";
import Projects from "./_components/projects";
import Socials from "./_components/socials";

export default function HomePage() {
  return (
    <>
      <main className="text min-h-screen bg-gray-600 p-8">
        <div className="text-center font-mono text-3xl font-bold">
          Olá, eu sou o Gustavo Eduardo.
          <p className="mx-auto mt-4 w-[500px] text-xl">
            Sou desenvolvedor Full-Stack, moro na capital de São Paulo e estou
            cursando o 4° semestre da faculdade de Análise e Desenvolvimento de
            Sistemas pelo SENAC
          </p>
        </div>
        <Projects />
        <Form />
        <Socials />
        
      </main>
    </>
  );
}
