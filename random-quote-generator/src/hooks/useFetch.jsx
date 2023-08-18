import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function useFetch() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    const getData = async () => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    useEffect(() => {
        setLoading("Loading....")
        setData(null);

        getData().then(res => {
            setLoading(false);
            setData(res);
        })
    }, []);

    return { data, loading };
}

export default useFetch;

