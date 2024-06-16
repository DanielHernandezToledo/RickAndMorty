const Buscador = ({ find, handleFindChange }) => {
    return (
        <input
          type="text"
          className="form-control w-25"
          placeholder="Character Name..."
          value={find}
          onChange={handleFindChange}
        />
    )
}

export default Buscador