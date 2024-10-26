import Project from '../components/Project';

const Portfolio = (props) => {
    return(
        <div className="container">
      <section className="section">
        <h2 className="title has-text-centered">Portfolio</h2>

        {/* Cards Section */}
        <div className="columns is-multiline">
          {props.projectList.map((project, index) => (
            <Project project={project} key={index}/>
            // <div className="column is-one-third" key={index}>
            //   <div className="card">
            //     <div className="card-content">
            //       <p className="title is-4">{project.title}</p>
            //       <p>{project.description}</p>
            //     </div>
            //     <footer className="card-footer">
            //       <a 
            //         href={project.githubLink} 
            //         className="card-footer-item" 
            //         target="_blank" 
            //         rel="noopener noreferrer">
            //         View on GitHub
            //       </a>
            //     </footer>
            //   </div>
            // </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio