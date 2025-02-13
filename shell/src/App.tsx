import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() =>
  import("header/Header").then((module) => ({ default: module.default }))
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Chargement du Header...</p>}>
        <RemoteHeader />
      </Suspense>
      <p>Bienvenue dans l'application Shell !</p>
    </div>
  );
};

export default App;