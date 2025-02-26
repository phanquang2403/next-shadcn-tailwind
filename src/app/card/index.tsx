"use client";
import { useState } from "react";
import customerCard from "./card.module.scss";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const CardComp = () => {
  const [expending, setExpending] = useState<boolean>(false);
  return (
    <div
      className={clsx({
        [customerCard.card]: expending,
      })}
    >
      CardComp
      <Button onClick={() => setExpending((prev) => !prev)}>
        dsdsssssssssssss
      </Button>
    </div>
  );
};

export default CardComp;
