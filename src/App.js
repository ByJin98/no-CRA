// App.js
import React from 'react';
import UseState from './UseState';
import Upload from './UseState/upload';
import UseEffect from './UseEffect';
import CleanUP from './UseEffect/CleanUP';
import UseRef from './UseRef';
import VarRef from './UseRef/VarRef';
import Count from './UseRef/Count';
import InputRef from './UseRef/InputRef';
import UseContext from './UseContext';
import UseMemo from './UseMemo';
import Airplane from './UseMemo/Airplane';
import UseCallback from './UseCallback';
import Size from './UseCallback/Size';

const App = () => {
  return (
    <>
      {/*//! useState */}
      {/* <UseState /> */}
      {/* <Upload /> */}

      {/*//! useEffect */}
      {/* <UseEffect /> */}
      {/* <CleanUP /> */}

      {/*//! useRef */}
      {/* <UseRef /> */}
      {/* <VarRef /> */}
      {/* <Count /> */}
      {/* <InputRef /> */}

      {/*//! useContext */}
      {/* <UseContext /> */}

      {/*//! useMemo */}
      {/* <UseMemo /> */}
      {/* <Airplane /> */}

      {/*//! useCallback */}
      {/* <UseCallback /> */}
      <Size />
    </>
  );
};
export default App;
