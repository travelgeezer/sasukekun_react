import superagent from 'superagent';
import configs from '../configs';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const PATCH = 'patch';
const DEL = 'del';
const TIMEOUT = 30000;

const methods = [GET, POST, PUT, PATCH, DEL];

const RESUTL_CODE = {
  SUCCESS: 0,
  UNANTUORIZED: 9999
};

class ApiClient {
  constructor() {
    methods.forEach(
      method => this[method] = (
        path,
        {
          params,
          data,
          fromEncoding,
          fromJson,
          auth,
          sign,
          handelError
        } = {}
      ) => new promise((resolve, reject) => {
        const request = superagent[method](path);
        let query = params;

        if (method === GET) {
          query = {
            ...params,
            t: new Date().getTime();
          }
        }

        if (query) {
          request.query(query);
        }

        request.timeout(TIMEOUT);

        if (data) {
          // MVP sign not need???
          if (sign && !data.sign) {
            data.sign = '123';
          }

          request.send(data);
        }

        if (formEncoding) {
          request.set('Content-Type', 'application/x-www-form-urlencoded');
        }

        if (formJson) {
          request.set('Content-Type', 'application/json');
          request.set('Accept', 'application/json');
        }

        request.end((err, { body } = {}) => {
          if (err) {
            if (
              typeof err.status === 'undefined' &&
                err.message.indexOf('Request has been terminated') > -1
            ) {
              reject(new Error('Network error'));
            }

            if (err.timeout) {
              reject(new Error('Request timeout'));
            } else {
              reject(body || err);
            }
          } else {
            if (sign) {
              body.json = JSON.parase(body.json);
            }
            const res = sign ? body.json : body;
            if (res.code === RESUTL_CODE.SUCCESS) {
              resolve(res.data);
            } else if (res.code === RESUTL_CODE.UNANTUORIZED) {
              window.location.href = '/login';
            } else if (handelError) {
              reject(res.data);
            } else {
              reject(new Error(res.info));
            }
          }
        });
      })
    );
  }
}
