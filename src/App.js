// App.js
import React from 'react';
import UseState from './UseState';
import Upload from './UseState/upload';
import UseEffect from './UseEffect';
import CleanUP from './UseEffect/CleanUP';
import UseRef from './UseRef';
import VarRef from './UseRef/VarRef';
import Count from './UseRef/Count';

const App = () => {
  return (
    <>
      {/** useState */}
      {/* <UseState /> */}
      {/* <Upload /> */}

      {/** useEffect */}
      {/* <UseEffect /> */}
      {/* <CleanUP /> */}

      {/** useRef */}
      {/* <UseRef /> */}
      {/* <VarRef /> */}
      <Count />
    </>
  );
};
export default App;
