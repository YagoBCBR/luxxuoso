import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: center;
    align-items: center;    
`;

export const Title = styled.Text``;

export const Logo = styled.Image`
    width: 50%;
    height: 8%;
    margin: 10px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    color: #000;
    background-color: #fff;
    width: 60%;
    font-size: 15px;
    padding: 10px;
    margin: 5px;
    border-radius: 50px;
    text-align: center;
    border: solid 1px #995D90;
    box-shadow: 0px 15px #000;
`;

export const Button = styled.TouchableOpacity`
    background-color: #995D90;
    width: 60%;
    font-size: 15px;
    padding: 10px;
    margin: 5px;
    border-radius: 50px;
`;

export const ButtonText = styled.Text`
    color: #FFF
    text-align: center;
`;