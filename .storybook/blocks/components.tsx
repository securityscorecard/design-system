import styled from "styled-components";

export const Table = styled.table`
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  color: #2a2a2a;
`;

export const TableHead = styled.thead`
  background-color: #f3f3f3;
  tr {
    border-bottom: 2px solid #dadada;
    > th + th {
      border-left: 1px solid #dadada
    }
  }

  th {
    text-align: left;
    font-weight: 700;
    padding: 1rem 0.5rem;
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #dadada;
  }
  td {
    padding: 0.75rem 0.5rem;
  }
`;

export const Token = styled.code`
  background: #f3f3f3;
  border: 1px solid #dadada;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
`;
