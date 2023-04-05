import { Container } from "@mui/material";
import Header from "../../components/Header";
import CardUser from "../../components/CardUser";
import { useEffect } from "react";
import { getUser } from "../../services/api";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState([''])

  useEffect(()=> {
    getUser().then((data) =>  setResults(data.results))
  },[])

  return (
    <>
      <Header />
      <Container fixed>
        <div className="contentMeu">
          {
           results.map((item, index) => (
            <CardUser
              nomeUsuario={`${item.name.title} ${item.name.first} ${item.name.last} `}
              emailUsuario={item.email}
              key={index}
            />
           ))
          }
        </div>
      </Container>
    </>
  );
}
