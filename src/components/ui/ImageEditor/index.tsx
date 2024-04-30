import React, { useState, useRef } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { IonButton, IonGrid, IonRow } from '@ionic/react';
interface ImageEditorProps {
  width: number;
  height: number;
  setImageResult(imageResult: string): void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  width,
  height,
  setImageResult
}) => {
  const fileInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const imageRef = useRef<ReactCropperElement>(null);
  const [imageSelected, setImageSelected] = useState<string>('');
  const [croppedImage, setCroppedImage] = useState<string>('');
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

  const onCrop = () => {
    const imageElement: any = imageRef?.current;
    const cropper: any = imageElement?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    // console.log(cropper.getCroppedCanvas().toDataURL());
  };

  const onClickSave = () => {
    if (croppedImage) {
      setImageResult(croppedImage);
    }
  };

  return (
    <IonGrid>
      <IonRow className="">
        <input
          ref={fileInput}
          hidden
          name="avatar"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onSelectFile}
        />
        <IonButton
          color="dark"
          onClick={(ev) => {
            fileInput.current.click();
          }}
        >
          Elegir Imagen
        </IonButton>
        <IonButton onClick={onClickSave}>Ok</IonButton>
      </IonRow>
      <IonRow>
        {imageSelected && (
          <Cropper
            src={imageSelected}
            style={{ height: '576', width: '1024' }}
            // Cropper.js options
            aspectRatio={16 / 9}
            viewMode={1}
            dragMode="move"
            center={false}
            minCropBoxHeight={height}
            minCropBoxWidth={width}
            cropBoxResizable={false}
            guides={true}
            crop={onCrop}
            ref={imageRef}
          />
        )}
      </IonRow>
    </IonGrid>
  );
};

export default ImageEditor;
