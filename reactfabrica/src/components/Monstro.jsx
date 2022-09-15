const Monstro = (props) => {
    const { id, name, email } = props.monstroUnico;
  
    return (
      <article key={id} className="monstros">
        <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </article>
    );
  };
  
  export default Monstro;