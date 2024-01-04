import { useRef } from "react";

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onCompositionStart" | "onCompositionEnd" | "onChange"
  > {
  onChange?: (value: string) => void;
}

function Input(props: InputProps) {
  const compositionRef = useRef<boolean>(true);

  const onInnerChange = (value: string) => {
    if (!compositionRef.current) return;
    props.onChange?.(value);
  };

  return (
    <input
      type="text"
      {...props}
      onCompositionStart={() => {
        compositionRef.current = false;
      }}
      onCompositionEnd={(e) => {
        compositionRef.current = true;
        props.onChange?.(e.data);
      }}
      onChange={(e) => onInnerChange(e.target.value)}
    />
  );
}

export default Input;
