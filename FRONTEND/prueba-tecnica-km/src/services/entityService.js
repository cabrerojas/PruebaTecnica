import {
    httpGet, httpPost, httpPut, httpDelete,
    handleHttpError, createCancelation, 
    isCancel, handleCancelation, buildURLQuery
} from './httpService';

let get_CancelationTokens = []

export const get = async (entity_uri, options) => {
    let cancelationTokens = get_CancelationTokens[entity_uri];
    if (cancelationTokens) {
        cancelationTokens.cancel()
    }

    get_CancelationTokens[entity_uri] = createCancelation();
    
    let setbuildURLQuery = {
        ...options
    }

    const queryString = buildURLQuery(setbuildURLQuery);
    let uri = `${entity_uri}?${queryString}`

    let optionsDefault = {
        cancelToken: get_CancelationTokens[entity_uri].token
    }
    
    try {
        let response = await httpGet(uri, optionsDefault);
        return response.data;
    }
    catch (error) {
        if (isCancel(error)) {
            return handleCancelation(error)
        }

        return handleHttpError(error);
    }
}

export const buildUriById = (entity_uri, id) => `${entity_uri}/${id}`

export const getById = async (entity_uri, id) => {
    const URL = buildUriById(entity_uri, id);

    try {
        let response = await httpGet(URL);
        return response.data;
    }
    catch (error) {
        return handleHttpError(error);
    }
}

export const post = async (entity_uri, params) => {
    
    let headers = {
        'Content-Type': 'application/json'
    }

    try {
        let response = await httpPost(entity_uri, params, headers);
        return response.data;
    }
    catch (error) {
        return handleHttpError(error);
    }
}

export const deleteById = async (entity_uri, id) => {
    const URL = buildUriById(entity_uri, id);

    try {
        let response = await httpDelete(URL);
        return response.data;
    }
    catch (error) {
        return handleHttpError(error);
    }
}

export const put = async (entity_uri, entity) => {

    try {
        let response = await httpPut(entity_uri, entity);
        return response.data;
    }
    catch (error) {
        return handleHttpError(error);
    }
}