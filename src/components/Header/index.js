import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const CustomHeader = ({ title, back }) => (
    <Header>
        {back &&
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
        }
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right>
            <Button transparent>
                <Icon name='heart' />
            </Button>
            <Button transparent>
                <Icon name='more' />
            </Button>
        </Right>
    </Header>
);

CustomHeader.defaultProps = {
    back: false
}
export default CustomHeader;