import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Splash() {

  const navigate = useNavigate()

  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 5000);

  return (

    <React.Fragment>
      {redirectNow ?

        <React.Fragment>
          {navigate('/game')}
        </React.Fragment>

        :

        <React.Fragment>
          <h1>WELCOME!</h1>
          <p>Redirecting in 5 seconds</p>
        </React.Fragment >}

    </React.Fragment>


  );

}
