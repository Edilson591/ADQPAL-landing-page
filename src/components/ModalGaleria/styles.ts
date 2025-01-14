import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalOverlay = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 100000;
`;

export const ModalContent = styled.div`
  width: 90%;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  text-align: center;
  max-width: 700px;
  /* width: 100%; */
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const PrevButton = styled(NavigationButton)`
  left: 30px;
  opacity: 0.1;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const NextButton = styled(NavigationButton)`
  right: 30px;
  opacity: 0.1;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
