import React from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Keycloak from 'keycloak-js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Dimmer, Header, Icon } from 'semantic-ui-react'
import { config } from './Constants'
import Navbar from "./misc/Navbar";
import Home from "./home/Home";

function App() {
  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}`,
    realm: "waa-project-service",
    clientId: "waa-project-api"
  })
  const initOptions = { pkceMethod: 'S256' }

  const handleOnEvent = async (event: any, error: any) => {
    console.log(error, event);
    if (event === 'onAuthSuccess') {
      if (keycloak.authenticated) {
        console.log("Authenticated")
      }
    }
  }

  const loadingComponent = (
    <Dimmer inverted active={true} page>
      <Header style={{ color: '#4d4d4d' }} as='h2' icon inverted>
        <Icon loading name='cog' />
        <Header.Content>Keycloak is loading
          <Header.Subheader style={{ color: '#4d4d4d' }}>or running authorization code flow with PKCE</Header.Subheader>
        </Header.Content>
      </Header>
    </Dimmer>
  )

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      LoadingComponent={loadingComponent}
      onEvent={(event, error) => handleOnEvent(event, error)}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    </ReactKeycloakProvider>
  )
}

export default App
