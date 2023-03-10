import React from "react";
const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} className="w-[18px] h-[18px] border-[#2D5BFF] bg-[#2D5BFF]" />
    </>
  );
});
export default CheckBox;
