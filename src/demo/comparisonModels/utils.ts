export const getStyle = () => {
  const Space = 16;
  const BaseWidth = 167; // 此宽度的计算 margin 不参与计算
  const border = 1;

  const header = {
    width: BaseWidth - 2 * border,
  };

  const productImage = {
    width: BaseWidth,
    imageWidth: BaseWidth - Space,
  };

  const params = {
    width: BaseWidth,
  };

  return {
    border,
    Space,
    header,
    productImage,
    params,
  };
};
