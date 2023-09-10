"use client";

import { useContext, useState, useEffect } from "react";
import { Button, Checkbox, Textarea, Tooltip } from "@nextui-org/react";
import {
  DoiSanhInputContext,
  DoiSanhInputContextType,
} from "./DoiSanhInputContext";
import { CopyIcon } from "../CopyIcon";
import removeVietnameseTones from "@/utils/removeVietnameseTones";

interface Props {}
const CumTuResultDisplay = (props: Props) => {
  const [removeTones, setRemoveTones] = useState(false);
  const [result, setResult] = useState<string>("");
  const [resultCopy, setResultCopy] = useState<string>("");

  const { input } = useContext(DoiSanhInputContext) as DoiSanhInputContextType;

  useEffect(() => {
    if (!removeTones) {
      let keywordsArray = input.replace(/^\s+|\s+$/g, "").split("\n");

      setResult('"' + keywordsArray.join('"\n"') + '"');
      if (keywordsArray.length === 1) {
        setResultCopy('"' + keywordsArray.join('"\n"') + '"');
      } else {
        setResultCopy('"""' + keywordsArray.join('"""\n"""') + '"""');
      }
    } else {
      let tonesRemovedInput = removeVietnameseTones(input);
      let keywordsArray = tonesRemovedInput
        .replace(/^\s+|\s+$/g, "")
        .split("\n");

      setResult('"' + keywordsArray.join('"\n"') + '"');

      if (keywordsArray.length === 1) {
        setResultCopy('"' + keywordsArray.join('"\n"') + '"');
      } else {
        setResultCopy('"""' + keywordsArray.join('"""\n"""') + '"""');
      }
    }
  }, [removeTones, input]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-6">
        <label
          className="flex-grow text-base sm:text-lg"
          htmlFor="doi-sanh-cum-tu-result"
        >
          Đối sánh cụm từ
        </label>
        <Checkbox
          isSelected={removeTones}
          onValueChange={setRemoveTones}
          size="sm"
        >
          Bỏ dấu
        </Checkbox>
        <Tooltip color="foreground" content="Copy">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(resultCopy);
            }}
            size="sm"
            className="scale-80"
            isIconOnly
            aria-label="Copy"
          >
            <CopyIcon />
          </Button>
        </Tooltip>
      </div>

      <Textarea
        id="doi-sanh-cum-tu-result"
        value={input.length > 0 ? result : ""}
        isReadOnly
        variant="flat"
        labelPlacement="outside"
      />
    </div>
  );
};
export default CumTuResultDisplay;
