import { useState } from "react";

function Home() {

    const [count, setCount] = useState(0);

    const updateCounter = (e) => {
        setCount(count + 1);
    }


    return (
        <div>
            <h2>Counter</h2>
            <div className="display">
                {count}</div>
            <div className="buttons">
                <button className="btn"
                    onClick={updateCounter}>Count</button>
            </div>
        </div>
    )
}
export default Home;