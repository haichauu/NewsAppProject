import constants from '../constants'

export const loadDataArticle = (id) => {
    return {
        type: constants.LoadDataArticle,
        name: 'articles',
        params: {
            source: id,
            apiKey: '8acf329a8769447e9bc1c73cb0e76d7d'
        }
    }
}


export const getArticleDataSuccess = (data) => {
    return{
        type: constants.GetDataArticleSuccess,
        data
    }
}

export const getAricleDataFailure = (data) => {
    return{
        type: constants.GetDataArticleFailure,
    }

}