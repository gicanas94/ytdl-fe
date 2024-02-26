// @packages
import React from 'react';

// @app
import Container from 'components/Container';
import Converter from 'labs/Converter';

const App = () => (
  <div className="h-screen w-full bg-primaryDark p-6">
    <Container>
      <Converter className="mx-auto max-w-2xl" />
    </Container>
  </div>
);

export default App;
