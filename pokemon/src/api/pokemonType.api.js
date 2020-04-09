import httpClient from './httpClient'

const END_POINT = '/type'

const getAllType = ()  => httpClient.get(END_POINT);
const getType = (id) => httpClient.get(END_POINT,{ id });

export {
    getAllType,
    getType
}