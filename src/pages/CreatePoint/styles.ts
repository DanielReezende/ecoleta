import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 36px;
    }
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;

  legend {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: var(--text-color);
    }
  }

  div.field {
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    input[type=text],
    input[type=email],
    input[type=number] {
      flex: 1;
      background: #F0F0F5;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: #6C6C80;
    }

    input::placeholder{
      color: #A0A0B2;
    }
  }

  div.field-group{
    flex: 1;
    display: flex;

    .field + .field{
      margin-left: 24px;
    }

    input + input {
      margin-left: 24px;
    }
  }

`;
