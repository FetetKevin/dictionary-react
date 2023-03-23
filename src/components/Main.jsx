import Definition from "./Definition";
import { useState, useEffect } from "react";

export default function Main() {
    const [apiData, setApiData] = useState({});
    const data = apiData[0];
    const [search, setSearch] = useState("hello");

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
            );
            setApiData(await result.json());
        };

        fetchData();
    }, []);

    let i = 0;
    const meanings = data?.meanings.map((el) => (
        <Definition key={i++} data={el} />
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const result = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
            );
            setApiData(await result.json());
        };
        fetchData();
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const play = () => {
        audio.play();
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type a word"
                    onChange={handleChange}
                    value={search}
                />
                <button type="submit">
                    <i className="fa fa-search search"></i>
                </button>
            </form>

            <div className="content">
                <div className="top">
                    <div className="left">
                        <h1>{data?.word}</h1>
                        {data ? (
                            <h2>{data?.phonetics[1]?.text}</h2>
                        ) : (
                            <h2>
                                Sorry pal, we couldn't find definitions for the
                                word you were looking for.
                            </h2>
                        )}
                    </div>

                    {data?.phonetics[1]?.audio && (
                        <button className="play" onClick={play}>
                            <i className="fa fa-play"></i>
                            <audio
                                id="audio"
                                src={data?.phonetics[1]?.audio}
                            ></audio>
                        </button>
                    )}
                </div>

                {meanings}

                {data && (
                    <div className="source">
                        <h4>source</h4>
                        <a href={data?.sourceUrls[0]} target="_blank">
                            {data?.sourceUrls[0]}
                        </a>
                    </div>
                )}
            </div>
        </main>
    );
}
