function Projects(){

    return(
<div className="ui container">
      {/* Here we pass our getRepoIssues function as a prop to SearchBar */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <ProjectList Projects={Projects} />
          </div>
        </div>
      </div>
    </div>
  );}

  export default Projects
