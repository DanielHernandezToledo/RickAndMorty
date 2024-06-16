const Buscador = ({ find, handleFindChange }) => {
    return (
        <div className="d-flex">
            <label className="text-success" htmlFor="characterFinder">Character Name:</label>
            <input
                id="characterFinder"
                type="text"
                className="form-control"
                placeholder="Character Name..."
                value={find}
                onChange={handleFindChange}
            />
        </div>
    )
}

export default Buscador