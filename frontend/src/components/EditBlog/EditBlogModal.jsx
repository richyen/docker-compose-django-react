import React, { Component } from 'react';
import Styled from 'styled-components';
import { Modal } from 'semantic-ui-react';

import parse from 'html-react-parser';

const ModalHeader = Styled.p`
    font-size: ${props => props.theme.fontSizes.h3};
`;

const DescriptionContainer = Styled.div`
    padding: 15px;
`;

const ActionContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const CancelButton = Styled.div`
    display: flex;
    width: 150px;
    margin: 0 8px;
    padding: 15px 40px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border-style: solid;
    border-color: gray;
    border-width: 1px;
    cursor: pointer;
    text-transform: capitalize;
`;

const SaveButton = Styled(CancelButton)`
    background-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    border-style: none;

    &:hover {
        opacity: 70%;
    }
`;

class EditBlogModal extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Modal 
                dimmer='blurring' 
                open={this.props.modalOpen}
            >
                 <Modal.Header>
                    <ModalHeader>{parse(this.props.modalContent.title)}</ModalHeader>
                 </Modal.Header>
                 <Modal.Description>
                     <DescriptionContainer>
                        {parse(this.props.modalContent.description)}
                     </DescriptionContainer>
                 </Modal.Description>
                 <Modal.Actions>
                     <ActionContainer>
                        <SaveButton onClick={this.props.onPressAction}>{this.props.action}</SaveButton>
                        <CancelButton onClick={this.props.onPressCancel}>Cancel</CancelButton>
                     </ActionContainer>
                 </Modal.Actions>
            </Modal>
        )
    }
}

export default EditBlogModal;