import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../Blog/BlogStyles.css";
import BlogPost from "./BlogPost.jsx";

const blogPosts = [
  {
    id: 1,
    title: "Vacunas para perros: cuáles poner y cuándo hacerlo",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
    description:
      "Si estás leyendo esto es porque alguna vez te ha asaltado alguna duda sobre las vacunas para perros. Cuándo ponerlas, cuándo administrar dosis de recuerdo...",
    buttonLabel: "Leer más...",
    buttonUrl: "#",
  },
  {
    id: 2,
    title: "Primavera y alergia en perros: síntomas y cómo actuar",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/03/24/23/29/havanese-7090054_960_720.jpg",
    description:
      "La llegada de la primavera significa el inicio de las alergias y no solo en nosotros los humanos, sino que la alergia en perros, aunque menos conocida, es también bastante...",
    buttonLabel: "Leer más...",
    buttonUrl: "#",
  },
  {
    id: 3,
    title: "Cómo elegir el mejor cuidador de perros estas vacaciones",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/12/23/06/40/pup-1926897_960_720.jpg",
    description:
      "¡Poooor fin empieza la cuenta atrás para las ansiadas vacaciones de Semana Santa!, y en Conecta-Dogs queremos echarte una mano, registrate con nosotros y encuentra al cuidador perfecto...",
    buttonLabel: "Leer más...",
    buttonUrl: "#",
  },
];

const Blog = () => {
  return (
    <>
      <div className="container col-12">
        <h2>Blog de Conecta-Dogs</h2>
      </div>
      <section className="blog custom-blog">
        <div className="my-4 p-4 border rounded-3">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-12 col-md-4" key={post.id}>
                <BlogPost {...post} />
              </div>
            ))}
            <div className="container text-center m-3">
              <button
                type="button"
                className="action-button shadow animate blue"
              >
                Ver todas las publicaciones
              </button>
            </div>
          </div>
        </div>
      </section>

      <Link
        to="#navbar"
        className="simplescrollup__button simplescrollup__button--hide"
        spy="true"
        smooth="true"
        duration={800}
      >
        <h2>
          <i className="fas fa-arrow-circle-up"></i>
        </h2>
      </Link>
    </>
  );
};

export default Blog;
