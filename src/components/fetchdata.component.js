import { useEffect, useState } from "react";

function Fetchdata() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Api Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>Title</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((row, indx) => {
                        return (
                            <tr key={indx}>
                                <td>{row.id}</td><td>{row.title}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default Fetchdata;