import { User } from "phosphor-react";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";

export type AvatarProps = ComponentProps<typeof AvatarImage>;

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
};
