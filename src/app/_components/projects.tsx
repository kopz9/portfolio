import Card from "./card/card";
import { dataMockup } from "./card/types";

export default function Projects() {
  return (
    <>
      <h2 className="mb-3 mt-8 text-center font-mono text-3xl font-semibold">
        Projetos
      </h2>
      {dataMockup.length > 0 ? (
        <section className="">
          {dataMockup.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </section>
      ) : (
        <p>Carregando projetos</p>
      )}
    </>
  );
}
