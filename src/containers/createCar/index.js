import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../../state/cars/actions";
import * as userActions from "../../state/user/actions";
import * as Styled from "./styles";

const Login = ({ addCar }) => {
  const [name, setName] = useState("");
  const [board, setBoard] = useState("");
  const [owner, setOwner] = useState("");

  return (
    <Styled.Container>
      <Styled.Title>Cadastrar</Styled.Title>
      <Styled.Form>
        <Styled.logo data="https://turbi.com.br/wp-content/uploads/2019/03/cropped-logo-turbi.png" />
        <Styled.Input
          value={name}
          autocomplete="off"
          onChange={({ target }) => setName(target.value)}
          placeholder=" nome "
        />
        <Styled.Row>
          <Styled.Input
            bottom="60"
            width="130"
            autocomplete="off"
            value={board}
            onChange={({ target }) => setBoard(target.value)}
            placeholder=" placa "
          />
          <Styled.Input
            left="4"
            bottom="60"
            width="130"
            autocomplete="off"
            value={owner}
            onChange={({ target }) => setOwner(target.value)}
            placeholder=" proprietário "
          />
        </Styled.Row>

        <Styled.button onClick={() => addCar({ name, board, owner })}>
          Cadastrar
        </Styled.button>
      </Styled.Form>
    </Styled.Container>
  );
};

const mapStateToProps = state => ({
  cars: state.cars
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, carsActions, userActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
