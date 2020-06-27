// export const EnvironmentConstants = {
//    SLOTS_BOOKING_BASE_URL: 'https://15ae87d32ff6.ngrok.io'
// }

const envVariables = process.env

const Config = {}

Object.keys(envVariables).forEach(variable => {
   if (variable.includes('REACT_APP')) {
      const envKey = variable.replace('REACT_APP_', '')
      Config[envKey] = envVariables[variable]
   }
})

export default Config
