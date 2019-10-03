import ApiEngineer from './ApiEngineer'

export const getDataSource = (url) => {
    return ApiEngineer.get(url)
}
