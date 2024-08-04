import React from 'react';
import Header from './components/Header';
import Icon from '../../components/Icon/Icon';
import Modal from '../../components/Modal/Modal';
import { TiUpload } from 'react-icons/ti';
import FormHandler from './components/FormHandler';

const MediaUploadFeature = () => {
  return (
    <Modal>
      <Modal.Action
        px={'md'}
        size={14}
        gap={'xs'}
        weight={500}
        height={'32'}
        borderRadius={'lg'}
        color={'primary-60'}
        backgroundColor={'inherit'}
        pseudos={{ hover: { backgroundColor: 'primary-95' } }}
      >
        <Icon
          size={20}
          iconType={TiUpload}
        />
        Upload
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
