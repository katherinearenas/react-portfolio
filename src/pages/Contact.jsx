const Contact = () => {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Contact Katherine</h1>
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your Name" />
              </div>
            </div>
  
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Your Email" />
              </div>
            </div>
  
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Your Message"></textarea>
              </div>
            </div>
  
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  export default Contact