import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
import Footer from './components/Footer';
import useFetch from './hooks/useFetch';
import QuoteContainer from './components/QuoteContainer';


function App() {
    const { data, loading } = useFetch();
    const [color, setRandomColor] = useState();
    
    if (loading) {
        return (
            <QuoteContainer>
                {loading}
            </QuoteContainer>
        )
    }
    return (
        <QuoteContainer color={color} >
            <Card
                data={data}
                color={color}
                setRandomColor={setRandomColor}
            />
            <Footer />
        </QuoteContainer>
    )
}

export default App;
