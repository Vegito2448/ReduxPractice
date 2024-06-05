import { useEffect } from "react";
import { getPokemons, useAppDispatch, useAppSelector } from "./store";

const PokemonApp = () => {
    const dispatch = useAppDispatch();
    const { pokemons, loading, page } = useAppSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            {loading && <span>Loading...</span>}

            {
                pokemons.map(({ url, name }) => (
                    <ul key={url}>
                        <li>{name}</li>
                    </ul>
                ))
            }

            <button
                aria-disabled={loading}
                disabled={loading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>

        </>
    );
};

export default PokemonApp;