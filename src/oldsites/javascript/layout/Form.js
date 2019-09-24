import React from "react";
import "../../css/form.css";

export default class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      valueEmail:'',
      valueMessage:''
  }

  this.handleOnChangeEmail= this.handleOnChangeEmail.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleOnChangeMessage=this.handleOnChangeMessage.bind(this);
  }



handleOnChangeEmail(event){
    this.setState({
        valueEmail:event.target.value,
    })
}

handleOnChangeMessage(event){
  this.setState({
      valueMessage:event.target.value,
  })
}

handleSubmit(event){

  event.preventDefault();
  fetch(' https://affiongbassey.herokuapp.com/formPage', {
      method:'POST',
      headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)

  })

  this.setState({
    valueName:"",
    valueEmail:"",
    valueSubject:"",
    valueMessage:""
})
}

  render(){

      return (
        <div className="form-container">
          <form className="align-item" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="labels" for="exampleInputEmail1">Email</label>
              <input type="email" className="form-control  place" id="exampleInputEmail1" onChange={this.handleOnChangeEmail} value={this.state.valueEmail}   required={true} aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="labels" for="exampleInputPassword1">Message</label>
              {/* <input type="password" className="form-control place" id="exampleInputPassword1" required={true} placeholder="Password"/> */}
              <textarea value={this.state.valueMessage} className='form-control place lab ' required={true} onChange={this.handleOnChangeMessage} rows='7'  placeholder='write your message here' />
            </div>
            <div className="form-group form-check">
              {/* <input type="checkbox" className="form-check-input " id="exampleCheck1"/> */}
              {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )
  }
}
