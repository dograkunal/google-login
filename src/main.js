import React from "react";
import { useEffect } from "react";

function Main({ clientId }) {
  function handleCredentialResponse(Response) {
    console.log("Encoded JwT ID Token" + Response.credential);
  }

  useEffect(() => {
    console.log(window, "window");

    window.onload = () => {
      console.log(window.google, "google");
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.prompt();
    };
  });

  window.googleLoginHandler = (payload) => {
    console.log(payload);
  };

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={clientId}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="googleLoginHandler"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="filled_blue"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}

export default Main;
