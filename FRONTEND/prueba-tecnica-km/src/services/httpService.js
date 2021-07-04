import axios from "axios";

export const httpGet = (uri, options) => axios.get(uri, options)

export const httpPost = (uri, params, options) => axios.post(uri, params, options)

export const httpPut = (uri, params, options) => axios.put(uri, params, options)

export const httpDelete = (uri, options) => axios.delete(uri, options)

export const handleHttpError = (error) => {
    console.error(error)
    return {
        error,
        response: error || error.response || error.response.data
    }
}

export const createCancelation = () => axios.CancelToken.source()

export const isCancel = (error) => axios.isCancel(error)

export const handleCancelation = (error) => {
    return {
        cancelled: true
    };
}

export const buildURLQuery = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => {
            let dato = '';
            if(params[k] || params[k] === 0) 
                dato = params[k];
            let url = esc(k) + '=' + esc(dato) 
            return url
        })
        .join('&');
    return query;
}