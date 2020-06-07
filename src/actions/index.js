export const types = {
    NEWS_FETCH: "NEWS/FETCH",
    NEWS_SHOW: "NEWS/SHOW",
    NEWS_ERROR: "NEWS/ERROR",
    LIGHT_TOGGLE: "LIGHT/TOGGLE",
};

// Todas las acciones van a ser una función que devuelve una función con un parámetro dispatch que usaremos cada vez que queramos hacer el dispatch de alguna acción específica, enviando tipo de acción y/o value/payload, por supuesto. Dentro de cada acción puedo hacer todos los dispatch que quiero de las cosas diferentes que quiero. En este caso estoy haciendo un dispatch de tres acciones en momentos diferentes y una de esas incluso es antes de hacer el fetch que me traerá los datos de las noticias.
export const actions = {
    getNews: (endpoint) => (dispatch) => {
        dispatch({
            type: types.NEWS_FETCH
        });

        fetch(`https://api.canillitapp.com/${endpoint}`)
            .then(response => response.json())
            .then(repos => {
                dispatch({
                    type: types.NEWS_SHOW,
                    payload: repos
                })
            })
            .catch(error => {
                dispatch({
                    type: types.NEWS_ERROR,
                    payload: error
                })
            });
    },
    toggleLightMode: () => (dispatch) => {
        dispatch({
            type: types.LIGHT_TOGGLE
        });
    }
};