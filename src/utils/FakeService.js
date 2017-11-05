const methods = ['get', 'post', 'put', 'patch', 'del'];

class FakeService {
  constructor() {
    methods.forEach(method =>
      this[method] = (path, option, result, error) =>
        new Promise((resolve, reject) => {
          console.log('path', path);
          console.log('parameters', option);
          setTimeout(() => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }, 1000);
        })
    );
  }
}

export default FakeService;
