import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../../state/cars/actions";
import * as userActions from "../../state/user/actions";
import * as Styled from "./styles";

const DashBoard = ({ wsConnect, signOut, cars }) => {
  useEffect(() => {
    wsConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderCar = (car, index) => {
    return (
      <Styled.CardCar key={index}>
        <Styled.rowName>
          <Styled.nameCar bold="bold" fontSize="22">
            {car.name}
          </Styled.nameCar>
        </Styled.rowName>
        <Styled.rowName>
          <Styled.nameCar>Placa: {car.board}</Styled.nameCar>
        </Styled.rowName>
        <Styled.rowName>
          <Styled.nameCar>Proprietário: {car.owner}</Styled.nameCar>
        </Styled.rowName>
      </Styled.CardCar>
    );
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <Styled.logo data="https://turbi.com.br/wp-content/uploads/2019/03/cropped-logo-turbi.png" />
          <Styled.Title>Carros</Styled.Title>
          <Styled.Link left="25" href="/createCar" target="_blank">
            Cadastrar
          </Styled.Link>
          <Styled.button left="1" onClick={() => signOut()}>
            Sair
          </Styled.button>
        </Styled.Header>
      </Styled.Content>
      {Object.values(cars).map((car, index) => RenderCar(car, index))}
    </Styled.Container>
  );
};

const mapStateToProps = state => ({
  cars: state.cars
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, carsActions, userActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
