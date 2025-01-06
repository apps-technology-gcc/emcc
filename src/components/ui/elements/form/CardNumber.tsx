"use client";
import { cn } from "@/src/lib/utils";
import React, { useState, ChangeEvent } from "react";
import { textVariants } from "../Text";

interface CardInputProps {
  onChangeCardNumber?: (value: string) => void;
  onChangeExpiry?: (value: string) => void;
  onChangeCVC?: (value: string) => void;
  cardNumberValue?: string;
  expiryValue?: string;
  cvcValue?: string;
}

const CardInput: React.FC<CardInputProps> = ({
  onChangeCardNumber,
  onChangeExpiry,
  onChangeCVC,
  cardNumberValue = "",
  expiryValue = "",
  cvcValue = "",
}) => {
  const [cardNumber, setCardNumber] = useState(cardNumberValue);
  const [expiry, setExpiry] = useState(expiryValue);
  const [cvc, setCvc] = useState(cvcValue);
  const [isFocused, setIsFocused] = useState(false);

  // Format card number with spaces after every 4 digits
  const formatCardNumber = (input: string): string => {
    const cleaned = input.replace(/\D/g, "");
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ").substr(0, 19);
  };

  // Format MM/YY expiry input
  const formatExpiry = (input: string): string => {
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.length <= 2) return cleaned;
    return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    onChangeCardNumber?.(formatted.replace(/\s/g, ""));
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(e.target.value);
    setExpiry(formatted);
    onChangeExpiry?.(formatted);
  };

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, "");
    setCvc(cleaned);
    onChangeCVC?.(cleaned);
  };

  return (
    <div
      className={cn(
        "flex items-center border rounded-sm px-2.5 py-2 transition-colors duration-200",
        isFocused ? "border-primary-600" : "border-border"
      )}
    >
      {/* Card Number Input */}
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Card Number"
        maxLength={19}
        className={cn(
          textVariants({
            variant: "placeholder",
          }),
          "flex-grow border-0 focus:outline-none"
        )}
        pattern="\d*"
        inputMode="numeric"
      />

      {/* Expiry Input */}
      <input
        type="text"
        value={expiry}
        onChange={handleExpiryChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="MM/YY"
        maxLength={5}
        className={cn(
          textVariants({
            variant: "placeholder",
          }),
          "w-[80px] border-l border-border focus:outline-none text-center"
        )}
        pattern="\d*"
        inputMode="numeric"
      />

      {/* CVC Input */}
      <input
        type="text"
        value={cvc}
        onChange={handleCvcChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="CVC"
        maxLength={3}
        className={cn(
          textVariants({
            variant: "placeholder",
          }),
          "w-[60px] border-l border-border focus:outline-none text-center"
        )}
        pattern="\d*"
        inputMode="numeric"
      />
    </div>
  );
};

export default CardInput;
