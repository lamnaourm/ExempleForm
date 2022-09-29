import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class ExForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      filiere: "tdi",
      filiere1: "CO",
      isChecked: true,
    };
  }

  handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(this.state.nom);
  };

  handleOnChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    this.setState({[name]: type==="checkbox"? e.target.checked :value});
  }

  render() {
    return (
      <form onSubmit={this.handleOnsubmit}>
        Nom :
        <input
          type="text"
          name="nom"
          value={this.state.nom}
          onChange={this.handleOnChange}
        />
        <br />
        Prenom :
        <input
          type="text"
          name="prenom"
          value={this.state.prenom}
          onChange={this.handleOnChange}
        />{" "}
        <br />
        Case a coche :
        <input
          type="checkbox"
          name="isChecked"
          checked={this.state.isChecked}
          onChange={this.handleOnChange}
        />
        <br />
        Filiere :
        <input
          type="radio"
          name="filiere"
          value="TDI"
          checked={this.state.filiere === "TDI"}
          onChange={this.handleOnChange}
        />
        <input
          type="radio"
          name="filiere"
          value="TRI"
          checked={this.state.filiere === "TRI"}
          onChange={this.handleOnChange}
        />
        <input
          type="radio"
          name="filiere"
          value="INFO"
          checked={this.state.filiere === "INFO"}
          onChange={this.handleOnChange}
        />
        <br />
        <select
          name="filiere1"
          value={this.state.filiere1}
          onChange={(e) => {
            this.setState({ filiere1: e.target.value });
          }}
        >
          <option value="DI">Developpement informatique</option>
          <option value="RI">Reseaux informatique</option>
          <option value="GE">Gestion des entreprise</option>
          <option value="CO">Comptabilite</option>
          <option value="CG">Controle de gestion</option>
        </select><br/>
        <input type="submit" value="Envoyer les donnees" />
      </form>
    );
  }
}
function App() {
  return (
    <div className="App">
      <ExForm />
    </div>
  );
}

export default App;
