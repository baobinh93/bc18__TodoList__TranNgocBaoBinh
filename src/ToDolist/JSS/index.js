import styled from "styled-components";

export const Container = styled.div`
  background-color: #343a4c;
  padding: 15px;
  margin-top: 15px;
`;
export const Heading = styled.div`
  color: #fff;
`;

export const Button = styled.button`
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #343a4c;
    transition: all 0.2s linear;
  }
`;

export const SpanText = styled.span`
  padding: 5px 10px;
`;

export const NoteStyle = styled.div`
  font-size: 1rem;
  padding: 10px;
  color: red;
`;
