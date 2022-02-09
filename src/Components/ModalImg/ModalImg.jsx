import ModalImage from "react-modal-image"
import { Img } from './ModalImgStyles';

export const ModalImg = (prop) => {
  return(
    <Img>
      <ModalImage
        small={prop.smallImg}
        medium={prop.largeImg}
        hideDownload={true}
        imageBackgroundColor={'none'}
        hideZoom={true}
        alt=""       
      />  
    </Img>
  );  
}

