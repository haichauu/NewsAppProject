export const loadDataArticle = (id) => {
    return {
        type: 'LOAD_DATA_ARTICLE',
        url:  'https://newsapi.org/v1/articles?source=' + id + '&apiKey=8acf329a8769447e9bc1c73cb0e76d7d'
    }
}


export const getArticleDataSuccess = (data) => {
    return{
        type: 'GET_DATA_ARTICLE_SUCCESS',
        data
    }
}

export const getAricleDataFailure = (data) => {
    return{
        type: 'GET_DATA_ARTICLE_FAILURE',
    }

}