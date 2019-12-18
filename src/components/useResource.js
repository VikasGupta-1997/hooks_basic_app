import { useState, useEffect } from 'react';
import axios from 'axios';
const useResource = (resource) => {
    const [resources, setResources ] = useState([])
    useEffect( 
        () => {
            (
                async (resource) => {
                console.log('ghjk',resource)
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
                setResources(response.data)
                // this.setState({resources: response.data}
                }
            )
            (resource)
        },
        [resource] 
        );
    return resources;
}
export default useResource