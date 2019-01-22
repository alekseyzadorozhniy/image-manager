import React, { Component } from 'react';
import 'antd/dist/antd.css';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  uploadFile = ({ target }) => {
    const image = target.files[0];
    if (image) {
      this.setState({ images: [...this.state.images, image] });
    }
  };

  getImageUrl = image => URL.createObjectURL(image);

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.uploadFile} />
        {this.state.images.map((image, idx) => (
          <img key={idx} src={this.getImageUrl(image)} height="200" alt="" />
        ))}
      </div>
    );
  }
}

export default App;
