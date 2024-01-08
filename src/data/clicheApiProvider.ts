import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';


const getProvider = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider => ({
    getList: async (resource: string, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            ordering: order === 'ASC' ? field : `-${field}`,
            offset: (page - 1) * perPage,
            limit: page * perPage,
        };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;
        const { json } = await httpClient(url);
        return { data: json.results, total: json.count }
    },

    getOne: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}/`)
        return { data: json }
    },

    getMany: async (resource, params) => {
        const query = { id: params.ids };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;
        const { json } = await httpClient(url);
        return { data: json }
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            [params.target]: params.id,
            ordering: order === 'ASC' ? field : `-${field}`,
            offset: (page - 1) * perPage,
            limit: page * perPage,
        };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;
        const { json } = await httpClient(url);
        return { data: json.results, total: json.count };
    },

    update: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}/`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        })
        return { data: json };
    },

    // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    updateMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}/`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => json.id) })),

    create: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        })
        return { data: { ...params.data, id: json.id } as any }
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}/`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    deleteMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}/`, {
                    method: 'DELETE',
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => json.id) })),
});


export default getProvider(import.meta.env.VITE_CLICHE_API_URL)
