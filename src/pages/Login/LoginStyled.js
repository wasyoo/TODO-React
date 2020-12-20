import styled from 'styled-components';

export default (Component) => styled(Component)`
    margin: 40px auto 0;
    padding: 0px 50px;
    h1 {
        margin-bottom: 30px;
    }
    input {
        padding: 16px 16px 16px 60px;
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
        width: 100%;
        margin: 10px;
    }
    .error {
        color: red;
        margin: 10px;
    }
    button {
        margin: 10px;
        padding: 16px;
        width: 100%;
        cursor: pointer;
        background-color: #5c92c1;
        color: #FFF;
        font-weight: bolder;
    }
`;