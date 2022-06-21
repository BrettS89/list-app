import { FC, useState } from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from '@expo/vector-icons/FontAwesome5';
import IconButton from '../../../../components/icon-button';
import Button from '../../../../components/button';
import Typography from '../../../../components/typography';
import styles from './styles';
import colors from '../../../../shared/colors';

interface Props {
  isOpen: boolean;
  setModalOpen(open: boolean): void;
  onComplete(data: { public: boolean, file?: Blob }): void;
}

const FinishModal: FC<Props> = ({ isOpen, setModalOpen, onComplete }) => {
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const onTapComplete = () => {
    onComplete({
      public: isPublic,
    });
  };

  return (
    <Modal
      transparent
      visible={isOpen}
      animationType='fade'
    >
      <View style={styles.finishModal}>
        <View style={styles.finishModalContent}>
          <View style={styles.finishModalTitleContainer}>
            <Typography styles={styles.finishModalTitle}>
              Great job!
            </Typography>
          </View>

          <View>
            <TouchableOpacity style={styles.finishModalRow}>
              <Icon name='image' style={styles.finishModalImageIcon} />
              <Typography styles={styles.finishModalPhotoText}>
                Add a photo
              </Typography>
            </TouchableOpacity>
            <View style={styles.finishModalRow}>
              <Checkbox
                value={isPublic}
                onValueChange={setIsPublic}
                color={colors.main}
                style={{ marginLeft: 2 }}
              />
              <Typography styles={styles.finishModalShareText}>
                Share your accomplishment
              </Typography>
            </View>
          </View>

          <View style={styles.finishModalButtonContainer}>
            <Button
              styles={styles.finishModalButton}
              onPress={onTapComplete}
            >
              Complete
            </Button>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Typography>
                Cancel
              </Typography>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    </Modal>
  );
};

export default FinishModal;
