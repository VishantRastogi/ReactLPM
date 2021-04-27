/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled from 'styled-components';

export const ButtonSC = styled.button`
    position: ${(props) => (props.rel === "true" ? 'relative' : 'absolute')};;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15.76%;
    background: #3B286D;
    height: 53px;
    width: 287px;
    border-radius: 5px;
    color: #fff;
    border-color: transparent;
`;