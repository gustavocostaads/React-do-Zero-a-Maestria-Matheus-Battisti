import { useState } from "react";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([
    { id: 1, nome: "Gustavo", idade: 35, profissão: "Desenvolvedor" },
    { id: 2, nome: "Douglas", idade: 15, profissão: "Youtuber" },
    { id: 3, nome: "Júlia", idade: 10, profissão: "Streamer" },
  ]);

  const bigAge = () => {
    setUserDetails((prevDetails) => {
      console.log(prevDetails);
      return prevDetails.filter((user) => (user.idade > 18));
    });
  };

  return (
    <div>
      <ul>
        {userDetails.map((details) => (
          <li key={details.id}>
            {details.nome} - {details.idade} - {details.profissão}
          </li>
        ))}
      </ul>
      <button onClick={bigAge}>Quem é maior de 18 anos?</button>
    </div>
  );
};

export default UserDetails;
