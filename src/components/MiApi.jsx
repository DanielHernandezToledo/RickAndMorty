import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./Buscador";


export default function MiApi() {

    //Listado de personajes
    const [charactersData, setCharactersData] = useState([])

    //Filtro de personajes
    const [find, setFind] = useState("");

    // Avanzar o retroceder página
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    // Ordenar con sort
    const [sortOrder, setSortOrder] = useState("asc");

    //Conexión a api con valor de página variable dependiendo de valor de currentPage
    const characters = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

    //Contenido variable dependiendo de conexión con api
    let content


    const findCharacters = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCharactersData(data.results || [])
            setNextPage(data.info.next);
            setPrevPage(data.info.prev);
        } catch (e) {
            setCharactersData([])
        }
    }

    //Consulta al haber cambio de página
    useEffect(() => {
        findCharacters(characters)
    }, [currentPage])

    //Apunta al input y toma los valores
    const handleFindChange = (e) => {
        setFind(e.target.value);
    }

    const handleNextPage = () => {
        if (nextPage) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    //Filtra los datos de charactersData con el texto ingresado en find
    const charactersFilter = charactersData.filter((character) =>
        character.name.toLowerCase().includes(find.toLowerCase())
    ).sort(() => { })

    //Ordena de forma ascendente y descendente
    charactersFilter.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    
    content = charactersFilter.map(data =>
        <div className="col-xs-12 col-sm-6 col-md-3 my-2 d-flex justify-content-center" key={data.id}>
            <Card className="border-success bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        Type: {data.species}
                        <br />
                        Origin: {data.origin.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

    return (
        <>
            <div className="bg-black py-2" style={{minHeight:50+'vh'}}>
                <div className="container d-flex justify-content-between py-3">
                    <Buscador
                        find={find}
                        handleFindChange={handleFindChange}
                    />
                    <div className="sort-options d-flex">
                        <label htmlFor="sortOrder" className="text-success">Sort by Name: </label>
                        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}className="form-control"> 
                            <option value="asc">A - Z</option>
                            <option value="desc">Z - A</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {content}
                    </div>

                    <div className="d-flex justify-content-center gap-3 my-3">
                        <Button onClick={handlePrevPage} disabled={!prevPage} className="w-25">Anterior</Button>
                        <Button onClick={handleNextPage} disabled={!nextPage} className="w-25">Siguiente</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
