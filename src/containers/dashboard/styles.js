import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 6px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  border-radius: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

export const ItemHeader = styled.div``;

export const Title = styled.h1`
  font-size: 22px;
  margin-left: 1%;
  line-height: 3;
`;

export const logo = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  ${({ data }) => data && `background-image: url(${data})`};
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 40%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 300px;
  padding: 4px;
  background: #ffffff;
  border: 1px solid rgba(66, 82, 110, 0.25);
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  margin-top: ${({ top = "20" }) => `${top}px`};
  margin-bottom: ${({ bottom = "0" }) => `${bottom}px`};
`;

export const button = styled.button`
    background-color: #009ddf;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px
    width: 150px;
    height: 15px;
    line-height: 0px;
    margin-left: ${({ left = "0" }) => `${left}%`};
    margin-top: 20px;
    :hover {
      background-color: #21bdff;
    }
`;

export const Link = styled.a`
    background-color: #009ddf;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px
    width: 150px;
    height: 15px;
    line-height: 0px;
    margin-top: 20px;
    margin-left: ${({ left = "0" }) => `${left}%`};
`;

export const nameCar = styled.span`
  font-size: ${({ fontSize = "16" }) => `${fontSize}px`};
  font-weight: ${({ bold = "normal" }) => `${bold}`};
`;

export const rowName = styled.span`
  height: 36px;
`;

export const CardCar = styled.div`
  width: 180px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 16px;
  padding: 10px;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
`;
