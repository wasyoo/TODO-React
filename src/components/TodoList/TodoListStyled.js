import styled from 'styled-components';

export default (Component) => styled(Component)`
  padding: 0px 50px;
  list-style: none;
  .footer {
      display: flex;
      justify-content: space-between;
      align-items:center;
      background-color: #FFF;
      font-size: 13px;
      height: 50px;
      padding: 10px;
      span {
        width: 30%;
      }
      ul {
        list-style: none;
        width: 70%;
        display: flex;
        justify-content: space-around;
        li {
          padding: 5px;
          cursor: pointer;
          &:hover {
            border-radius: 5px;
            border: 1px solid #808080;
          }
          &.active {
            border-radius: 5px;
            border: 1px solid #808080;
          }
        }
      }
  }
`;