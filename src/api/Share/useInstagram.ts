const useInstagram = () => {
  const instagram = () => {
    const stickerUrl =
      'https://postfiles.pstatic.net/MjAyNDEyMjRfODIg/MDAxNzM1MDQxMDgyNDI4.43M7vN-gotaZTnYx4O-gBok6OLdd_Zm3lI0nPp54Wywg.DFH62vXG2RoNczEdqFhBz7X1qSD2bSOtLnhUsAV0Vggg.PNG/%EC%B6%94%EC%96%B5%EC%9D%98%EC%B9%A0%ED%8C%90.png?type=w773';
    const backgroundColor = '#FFFFFF';

    const instagramUrl = `instagram-stories://share?source_application=com.your.app&background_color=${backgroundColor}&sticker_image_url=${encodeURIComponent(
      stickerUrl
    )}`;

    // 모바일 환경에서 URL로 이동
    window.location.href = instagramUrl;
  };

  return instagram;
};

export default useInstagram;
