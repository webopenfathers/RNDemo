export const getStyle = () => {
  const Space = 16;
  const border = 1;
  // 此宽度的计算 margin 不参与计算
  // 在RN中盒子模型默认是 box-sizing: border-box
  // 因此设置的宽度实际上包括了(width = content + padding + border)
  const BaseWidth = 167;

  const header = {
    width: BaseWidth,
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
