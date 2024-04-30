import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { IonButton, IonGrid, IonRow } from '@ionic/react';
interface AvatarImageEditorProps {
  width: number;
  height: number;
  setImageResult(imageResult: string): void;
}

const AvatarImageEditor: React.FC<AvatarImageEditorProps> = ({
  width,
  height,
  setImageResult
}) => {
  const fileInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const imageRef = useRef<AvatarEditor>({} as AvatarEditor);
  const [imageSelected, setImageSelected] = useState<string>('');

  const onSelectFile = () => {
    const files = fileInput.current?.files as FileList;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function (evt) {
      const imageResult = evt.target?.result as string;
      setImageSelected(imageResult);
    };
    reader.readAsDataURL(file);
  };

  const onClickSave = () => {
    if (imageRef) {
      const canvas = imageRef.current.getImageScaledToCanvas();
      setImageResult(canvas.toDataURL());
    }
  };

  return (
    <IonGrid style={{ height: '830px' }}>
      <IonRow className="ion-justify-content-end">
        <input
          ref={fileInput}
          hidden
          name="avatar"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onSelectFile}
        />
        <IonButton
          onClick={(ev) => {
            fileInput.current.click();
          }}
        >
          Image
        </IonButton>
        <IonButton onClick={onClickSave}>Ok</IonButton>
      </IonRow>
      <IonRow
        style={{ height: '100%' }}
        className="ion-justify-content-center ion-align-items-center  "
      >
        {imageSelected && (
          <AvatarEditor
            ref={imageRef}
            image={imageSelected}
            width={width}
            height={height}
            border={50}
            color={[255, 255, 255, 0.6]}
            scale={1}
            rotate={0}
          />
        )}
      </IonRow>
    </IonGrid>
  );
};

export default AvatarImageEditor;
