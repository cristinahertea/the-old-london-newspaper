import styled from 'styled-components'
import img from '../../images/background-tile.jpg'
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalContent = styled.div`
  position: absolute;
  width: 80%;
  margin: 10%;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  color: black;
  background-image: url(${img});
  box-shadow: 3px 3px 5px 5px black;
`
export const CloseButton = styled.div`
  border-radius: 50%;
  background-color: black;
  color: white;
  height: 20px;
  width: 20px;
  text-align: center;
  line-height: 1.1;
  margin: 5px;
  cursor: pointer;
`
export const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`
export const ModalContentText = styled.div`
  display: block;
  margin: 20px;
  margin-bottom: 30px;
`
export const ModalImage = styled.img`
  max-width: 340px;
  margin: 20px;
  display: block;
`
export const ModalBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.children[1] !== undefined) return 'auto 380px' //guard clause sau early return
    return 'auto'
  }};
`
