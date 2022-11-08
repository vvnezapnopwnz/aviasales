// import "./App.css";
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";

import * as actions from '../../actions/'
function Counter({ filters,counter, inc, dec, rnd, asyncInc }) {
  // console.log({ counter, inc, dec, rnd })
  // console.log({ counter, inc, dec, rnd, filters })
  return (
    <div className="App">
      <h2 id="counter">{counter}</h2>
      <button id="inc" className="btn btn-primary btn-lg" onClick={() => inc()}>
        INC
      </button>
      <button onClick={() => dec()} id="dec" className="btn btn-primary btn-lg">
        DEC
      </button>
      <button
        onClick={() => {
          const payload = Math.floor(Math.random() * 10);
          rnd(payload);
        }}
        id="rnd"
        className="btn btn-primary btn-lg"
      >
        RND
      </button>
      <button id="incAsync" className="btn btn-primary btn-lg" onClick={() => asyncInc(5)}>
        INCASYNC
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  // const { counter } = state
    return {
        ...state,
    }
}

// const mapDispatchToProps = (dispatch) => {

//   // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//   // return {
//   //   // inc: () => dispatch(inc()),
//   //   // dec: () => dispatch(dec()),
//   //   inc, dec,
//   //   rnd
//   // }
//   return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
