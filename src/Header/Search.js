import React from React;
import {useState, useEffect} from React;

function Search() {

    const {data, SetDatas} = useState ([]);
    const [SearchTerm, setSearchTerm]= useState("");

    useEffect(( )=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => SetDatas(json))
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value)
    };

    console.log(SearchTerm);

    return (
        <>
            <div className="Search">
            <imput
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Recherche"
                onChange={handleSearchTerm}
            />
        </div>
        <div className="search_results">
            {datas
                .filter ((val) => {
                    return val.title.toLowCase().includes(SearchTerm.toLowCase())
                })
                .map((val)=> {
                    return <div className="search_result" key={val.id}>
                        {val.title}
                    </div>;
                })}
        </div>
        </>
    );
}
export default Search;