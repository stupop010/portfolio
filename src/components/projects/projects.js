import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import BackgroundImage from "gatsby-background-image"
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import cardDetails from "./cardDetails"

const Projects = () => {
  const { barber, blog, gym, movie, stockCli, expenseTracker } = useStaticQuery(
    query
  )
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const projectCardDetails = cardDetails(barber, gym, movie, stockCli, blog)

  return (
    <section id="projects">
      <div
        className={clsx("container", inView && "projects-on-screen")}
        ref={ref}
      >
        <h2 className="title">Projects</h2>
        <hr className="underline" />
        <div className="cards-container">
          {projectCardDetails.map((project, i) => (
            <div className="card" key={i}>
              <BackgroundImage
                fluid={project.img.childImageSharp.fluid}
                className="card-bg"
              >
                <div className="upper-card">
                  <div className="card-container">
                    <h3>{project.title}</h3>
                    <p>{project.txt}</p>
                  </div>
                </div>
                <div className="lower-card">
                  <div className="card-container">
                    <ul>
                      {project.demo && (
                        <li>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon icon={faChrome} /> - Live Demo
                          </a>
                        </li>
                      )}
                      <li>
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} /> - Source Code
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </BackgroundImage>
            </div>
          ))}
          <div className="card">
            <BackgroundImage
              fluid={expenseTracker.childImageSharp.fluid}
              className="card-bg"
            >
              <div className="upper-card">
                <div className="in-development">
                  <h3>Expense Tracker</h3>
                  <p>
                    Front-End tech: React, Apollo Client, Material-ui and D3
                  </p>
                  <p>Backend tech: Node.js, Apollo Server, MySql</p>
                </div>
              </div>
              <div className="lower-card">
                <div className="in-development">
                  <ul>
                    <li>
                      <a
                        href="https://competent-heyrovsky-6ce1fd.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faChrome} /> - Live Demo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/stupop010/expense-tracker-2.0/tree/master/client"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} /> - Front-End Source
                        Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/stupop010/expense-tracker-backend-2.0/tree/master/server"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} /> - Backend Source
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  query {
    barber: file(relativePath: { eq: "barber.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blog: file(relativePath: { eq: "blog.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gym: file(relativePath: { eq: "gym.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    movie: file(relativePath: { eq: "movie.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    stockCli: file(relativePath: { eq: "stock-cli.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    expenseTracker: file(relativePath: { eq: "expense-tracker.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Projects
