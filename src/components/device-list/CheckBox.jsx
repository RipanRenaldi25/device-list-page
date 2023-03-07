import React from "react";
const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  return (
    <span className="flex justify-center items-center">
      <input type="checkbox" ref={resolvedRef} {...rest} className="border-[#2D5BFF] border-[3px] hover:ring rounded-sm" id="check" />
    </span>
  );
});
export default CheckBox;
