import * as React from 'react';
import './App.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {items: [], text: ''};
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Loopring Protocol Simulator</h1>
        </header>

        <form onSubmit={this.submit}>
          <div className="App-simulator">
            <p>
              {this.state.text}
            </p>
          </div>

          <button>
            Run simulator
          </button>
        </form>

      </div>
    );
  }

  private submit: (e: React.FormEvent<HTMLFormElement>) => void = {
    this.setState({items:[], text: "xxx" });
  }

}

export default App;
