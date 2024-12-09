import {
  Input as GluestackInput,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  erroMessage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  erroMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!erroMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid} mb="$2" w="$full">
      <GluestackInput
        h="$14"
        isInvalid={invalid}
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? "$red500" : "$green500"
        }}
        $invalid={{
          borderWidth: 1,
          borderColor: "$red500"
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          px="$4"
          bg="$gray700"
          color="$white"
          placeholderTextColor="$gray300"
          fontFamily="$body"
          {...rest}
        />
      </GluestackInput>
      <FormControlError>
        <FormControlErrorText color="$red500">
          {erroMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
