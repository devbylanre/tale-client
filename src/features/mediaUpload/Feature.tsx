import React from 'react';
import Header from './components/Header';
import Icon from '../../components/Icon/Icon';
import Modal from '../../components/Modal/Modal';
import { IoReloadOutline } from 'react-icons/io5';
import FormHandler from './components/FormHandler';

const MediaUploadFeature = () => {
  return (
    <Modal>
      <Modal.Action
        px={'md'}
        gap={'xs'}
        height={'32'}
        borderRadius={'lg'}
        color={'primary-40'}
        backgroundColor={'inherit'}
        pseudos={{ hover: { color: 'primary-30' } }}
      >
        Upload
        <Icon
          size={12}
          iconType={IoReloadOutline}
        />
      </Modal.Action>
      <Modal.Section>
        <Modal.Overlay />
        <Modal.Container>
          <Modal.Body>
            <Header />
            <FormHandler />
          </Modal.Body>
        </Modal.Container>
      </Modal.Section>
    </Modal>
  );
};

export default MediaUploadFeature;
