import Card from "../components/Card"
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";


export default function Connect() {
    const data = document.getElementById('seekings');
    var seekings = null;
    if (data !== null) {
        seekings = JSON.parse(data.textContent);
        // console.log(seekings);
        // console.log(seekings.length)
    }
    
    return (
        <Layout>
            <div>
                <div className="mt-24">
                    <SearchBar />
                    {seekings && seekings.map((item, idx) => {
                        return <Card key={idx} {...item}/>
                    })}
                </div>
            </div>
        </Layout>
    )
}
