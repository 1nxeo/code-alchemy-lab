import React from "react";
import EMOTION_1 from "/src/asset/icon/carrot.webp";
import EMOTION_2 from "/src/asset/icon/diamond.webp";
import EMOTION_3 from "/src/asset/icon/icecream.webp";
import EMOTION_4 from "/src/asset/icon/heart.webp";
import EMOTION_5 from "/src/asset/icon/ghost.webp";
import EMOTION_99 from "/src/asset/icon/none.webp";

interface EmoticonProps {
  code: number | string | undefined;
  size?: number;
  disable?: boolean;
}

export type EmotionTypes =
  | "EMOTION_1"
  | "EMOTION_2"
  | "EMOTION_3"
  | "EMOTION_4"
  | "EMOTION_5"
  | "EMOTION_99";

export default function Emoji({ code, size = 24, disable }: EmoticonProps) {
  const emotionIcons = new Map([
    ["EMOTION_1", EMOTION_1],
    ["EMOTION_2", EMOTION_2],
    ["EMOTION_3", EMOTION_3],
    ["EMOTION_4", EMOTION_4],
    ["EMOTION_5", EMOTION_5],
    ["EMOTION_99", EMOTION_99],
  ]);

  //   const disabledEmotionIcons = new Map([
  //     ["EMOTION_1", DISABLEDEMOTION_1],
  //     ["EMOTION_2", DISABLEDEMOTION_2],
  //     ["EMOTION_3", DISABLEDEMOTION_3],
  //     ["EMOTION_4", DISABLEDEMOTION_4],
  //     ["EMOTION_5", DISABLEDEMOTION_5],
  //     ["EMOTION_99", EMOTION_99],
  //   ]);
  //   const icon = disable
  //     ? disabledEmotionIcons.get(`EMOTION_${code}`)
  //     : emotionIcons.get(`EMOTION_${code}`);

  const icon = emotionIcons.get(`EMOTION_${code}`);
  return icon && <img src={icon} width={size} height={size} alt="" />;
}
