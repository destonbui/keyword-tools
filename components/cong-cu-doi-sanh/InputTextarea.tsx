"use client";

import { useContext } from "react";
import { Textarea } from "@nextui-org/react";
import {
  DoiSanhInputContext,
  DoiSanhInputContextType,
} from "./DoiSanhInputContext";

interface Props {}
const InputTextarea = (props: Props) => {
  const { input, setInput } = useContext(
    DoiSanhInputContext
  ) as DoiSanhInputContextType;
  return (
    <Textarea
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      label="Nhập từ khóa (Mỗi từ trên một dòng)"
      variant="bordered"
      labelPlacement="inside"
      spellCheck={false}
    />
  );
};
export default InputTextarea;
