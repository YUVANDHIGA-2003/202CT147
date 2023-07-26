
import React from "react";
class register extends React.Component {
  
  constructor(props) {
    super(props);
    state = { items: [], text: '' };
    handleChange = handleChange.bind(this);
    handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      
      <div>
        <h3>REGISTER</h3>
        <register items={super.state.items} />
        <form onSubmit={super.handleSubmit}>
          <label htmlFor="Enter Name">
            Enter User Name
          </label>
          <input
            id="name"
            onChange={super.handleChange}
            value={super.state.text}
          />
          <button>
            Submit{super.state.items.length}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    super.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (super.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: super.state.text,
      id: Date.now()
    };
    super.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

 React.render(register);



export default register;