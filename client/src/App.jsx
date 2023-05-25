import { useMutation, useQuery } from "@apollo/client";
import "./App.css";
import { GET_ALL_USERS, REGISTER_USER } from "./main";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  const [
    registerUser,
    { data: userData, loading: mutationLoading, error: mutatitonError },
  ] = useMutation(REGISTER_USER);

  if (error || mutatitonError) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{error.message}</h1>
      </div>
    );
  }

  if (loading || mutationLoading) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>CARGANDO LOS DATOS...</h1>
      </div>
    );
  }

  console.log({ userData });

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() =>
          registerUser({
            variables: {
              input: {
                email: "melanie@gmail.com",
                firstName: "melanie",
                gender: "mujer",
                lastName: "Heredia",
                password: "123456789",
              },
            },
          })
        }
      >
        Registro
      </button>
      {data &&
        data.getAllUsers.map(({ email, firstName, gender, _id, lastName }) => (
          <div
            key={_id}
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: "4px",
              height: "150px",
              margin: "10px 20px",
              minWidth: "600px",
              padding: "20px",
            }}
          >
            <h4>
              Hola me llamo {firstName} {lastName}
            </h4>
            <p>Sexo: {gender ?? ""}</p>
            <p>Email: {email ?? ""}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
