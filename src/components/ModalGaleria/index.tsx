import { useState } from "react";
import * as S from "./styles";

interface PropsImageGalleryPage {
  teste: { url: string; descricao: string }[];
}

function ImageGalleryPage({ teste }: PropsImageGalleryPage) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);


  const handleClose = () => setCurrentIndex(null);

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev === 0 ? teste.length - 1 : prev! - 1));
    }
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev === teste.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <S.PageContainer>
      <S.GalleryContainer>
        {teste.map((src, index) => (
          <S.Thumbnail
            key={index}
            src={src.url || ""}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.GalleryContainer>

      <S.ModalOverlay isVisible={currentIndex !== null} onClick={handleOverlayClick}>
          <S.CloseButton onClick={handleClose}>&times;</S.CloseButton>
        <S.ModalContent>
          {currentIndex !== null && (
            <>
              <S.Image
                src={teste[currentIndex].url}
                alt={`Imagem ${currentIndex}`}
              />
              <S.PrevButton onClick={handlePrev}>&lt;</S.PrevButton>
              <S.NextButton onClick={handleNext}>&gt;</S.NextButton>
            </>
          )}
        </S.ModalContent>
      </S.ModalOverlay>
    </S.PageContainer>
  );
}

export default ImageGalleryPage;
