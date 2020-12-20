import styled from 'styled-components';

export default (Component) => styled(Component)`
  margin: 40px auto 0;
  padding: 0px 50px;
  input {
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    width: 100%;
  }
`;