import ModalImage from "react-modal-image"
import { Img } from './ModalImgStyles';

export const ModalImg = (prop) => {
  console.log(prop.smallImg)
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

