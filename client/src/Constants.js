const prod = {
  url: {
    // production config
    KEYCLOAK_BASE_URL: '',
    API_BASE_URL: '',
  }
}

const dev = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:8080",
    API_BASE_URL: 'http://localhost:8081'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
