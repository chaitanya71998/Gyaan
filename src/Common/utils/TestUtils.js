export function resolveWithTimeout(response) {
    const timeOut = isTestEnvironment() ? 0 : 2000;
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), timeOut);
    });
  }
  
  export const isTestEnvironment = () => {
    if (process.env.IS_JEST) {
      return true;
    }
    return false;
  };
  