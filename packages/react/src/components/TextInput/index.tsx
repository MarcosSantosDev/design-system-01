import { ComponentProps, ElementRef, forwardRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ prefix, ...props }, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  );
});

TextInput.displayName = 'TextInput';