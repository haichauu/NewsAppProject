import ApiEngineer from './ApiEngineer'

export const getDataArticle = (name, params) => {
    return ApiEngineer.get(name, params)
}
