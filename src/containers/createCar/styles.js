import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.span`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1``;

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
  margin-top: 40px;
`;

export const Form = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 8px;
`;

export const Input = styled.input`
  width: ${({ width = "300" }) => `${width}px`};
  padding: 4px;
  background: #ffffff;
  border: 1px solid rgba(66, 82, 110, 0.25);
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  margin-top: ${({ top = "20" }) => `${top}px`};
  margin-left: ${({ left = "0" }) => `${left}px`};
  margin-bottom: ${({ bottom = "0" }) => `${bottom}px`};
`;

export const button = styled.button`
    margin-top: 40px;
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
`;
