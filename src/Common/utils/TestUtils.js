export const isTestEnvironment = () => {
   if (process.env.IS_JEST) {
      return true
   }
   return false
}
export function resolveWithTimeout(response) {
   const timeOut = isTestEnvironment?1000:0
   return new Promise(resolve => {
      setTimeout(() => resolve(response), timeOut)
   })
}