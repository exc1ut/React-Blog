import React from 'react';


class Contact extends React.Component {
    render(){
        return(
            <div className="container">
            <form>
            <div className="headings">
                    <h1 className="label">
                        Contact <label>Us</label>
                    </h1>
                    <hr className="sline"/>
                </div>
                <div className="contact">
  <div className="form-row">
    <div className="form-group col-md-6">
      <input required="" type="text" className="form-control" id="inputEmail4" placeholder="Your name" />
    </div>
    <div className="form-group col-md-6">
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="inputAddress" placeholder="Subject" />
  </div>
  <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Your message"></textarea>
  </div>
  <div className="btnauto">
  <button type="submit" className="btn btn-primary center-block">Send message</button>
  </div>
  </div>
</form>
       </div>
        )
    }
}
export default Contact