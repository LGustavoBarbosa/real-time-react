import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../../state/cars/actions";
import * as userActions from "../../state/user/actions";
import * as Styled from "./styles";

const Login = ({ singIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //addCar({ name: "Civic", board: "HRF-3453", onwer: "Turbi" });

  return (
    <Styled.Container>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form>
        <Styled.logo data="https://turbi.com.br/wp-content/uploads/2019/03/cropped-logo-turbi.png" />
        <Styled.Input
          value={email}
          autocomplete="off"
          onChange={({ target }) => setEmail(target.value)}
          placeholder=" email "
        />
        <Styled.Input
          bottom="60"
          autocomplete="off"
          value={password}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder=" senha "
        />
        <Styled.button onClick={() => singIn(email, password)}>
          Logar
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
