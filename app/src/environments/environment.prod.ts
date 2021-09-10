export const environment = {
  production: true,
  api: {
    baseUrl: 'http://localhost:5000',
    loginAction: '/api/auth/login'
  },
  localStorage: {
    login: 'AngularTypescriptApiCrud_login'
  },
  routes: {
    auth: {
      login: '/auth/login'
    },
    departments: {
      search: '/departments'
    },
    employees: {
      search: '/employees'
    }
  }
};
