import * as React from 'react';
import './index.scss';
export default class MyChecks extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox"></input>
      </div>
    );
  }
}
