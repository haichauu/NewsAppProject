import ApiEngineer from './ApiEngineer'

export const getDataSource = (name, params) => {
    return ApiEngineer.get(name, params)
}
