const style = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading:
    "font-poppins font-semibold xs:text-[35px] text-[29px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[29px] text-[25px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  paragraph: "font-poppins font-semibold xs:text-[26px] text-[18px] text-white",

  button: "font-poppins font-normal xs:text-[20px] text-[16px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingY: "sm:py-16 py-6",
  paddingX: "sm:px-16 px-6",
  padding: "sm:px-16 px-4 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  margin: "sm:mt-16 mt-6",
};

export const layout = {
  section1: `flex flex-row ${style.margin}`,
  sectionImgReverse: `flex md:flex-row flex-col-reverse ${style.paddingY}`,
  sectionReverse: `flex md:flex flex-col`
}

export default style;