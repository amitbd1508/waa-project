
export const isAdmin = (keycloak) => {
  return keycloak &&
         keycloak.tokenParsed &&
         keycloak.tokenParsed.resource_access['waa-project-api'] &&
         keycloak.tokenParsed.resource_access['waa-project-api'].roles.includes('MANAGER')
}

export const handleLogError = (error) => {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.message);
  }
}
