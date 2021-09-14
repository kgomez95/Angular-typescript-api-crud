export const environment = {
  production: true,
  api: {
    baseUrl: 'http://localhost:5000',
    loginAction: '/api/auth/login',
    getDepartments: '/api/departments/getDepartments'
  },
  localStorage: {
    login: 'AngularTypescriptApiCrud_login'
  },
  routes: {
    auth: {
      login: '/auth/login'
    },
    departments: {
      search: '/departments',
      create: '/departments/create'
    },
    employees: {
      search: '/employees',
      create: '/employees/create'
    }
  }
};
