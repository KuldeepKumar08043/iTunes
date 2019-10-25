import axios from 'axios';

export const onFormSubmit = (searchData) => {
    return function asynch(dispatch, getState) {

        axios.get('https://itunes.apple.com/search?term=' + searchData).then(res => {
            let ituneData = res.status === 200 || true ? res.data.results : '';
            dispatch({
                type: "USER_SEARCH",
                data: ituneData
            })
        });
    }
}