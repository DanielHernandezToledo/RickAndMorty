import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./Buscador";


export default function MiApi() {

    const [charactersData, setCharactersData] = useState([])
    const [find, setFind] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    const characters = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

    const findCharacters = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCharactersData(data.results || [])
            setNextPage(data.info.next);
            setPrevPage(data.info.prev);
        } catch (e) {
            content = <h1>No es posible conectar con el servidor</h1>
        }
    }

    useEffect(() => {
        findCharacters(characters)
    }, [currentPage])

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

    const charactersFilter = charactersData.filter((character) =>
        character.name.toLowerCase().includes(find.toLowerCase())
    )


    let content

    content = charactersFilter.map(data =>
        <div className="col-xs-12 col-sm-6 col-md-3 my-2" key={data.id}>
            <Card className="border-success bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.species}
                        <br />
                        {data.origin.name}
                    </Card.Text>
                    <Button variant="primary">View more</Button>
                </Card.Body>
            </Card>
        </div>
    )

    return (
        <>
            <div className="bg-black py-2">
                <div className="container-fluid d-flex align-items-center flex-column">
                    <Buscador
                        find={find}
                        handleFindChange={handleFindChange}
                    />
                    <div className="row">
                        {content}
                    </div>

                    <div className="pagination-buttons">
                        <Button onClick={handlePrevPage} disabled={!prevPage}>Anterior</Button>
                        <Button onClick={handleNextPage} disabled={!nextPage}>Siguiente</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
