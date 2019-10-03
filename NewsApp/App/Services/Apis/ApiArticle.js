import ApiEngineer from './ApiEngineer'

export const getDataArticle = (url) =>{
 return ApiEngineer.get(url)
}
