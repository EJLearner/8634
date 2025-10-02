function Quote(props: {text: string; name: string; rank: string; age: number}) {
  const {text, name, rank, age} = props;

  return (
    <div>
      <p>{text}</p>
      <p className="name-rank-age">
        {name}, {rank} {age}
      </p>
    </div>
  );
}

export {Quote};
