type CountryCode = "+90" | "+1" | "+44" | "+49" | "+33";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  countryCode?: CountryCode;
  onCountryCodeChange?: (value: CountryCode) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  inputClassName?: string;
  selectClassName?: string;
};

function formatPhone(raw: string, countryCode: CountryCode = "+1"): string {
  const digits = raw.replace(/\D/g, "").slice(0, countryCode === "+1" ? 10 : 10);

  if (countryCode === "+90") {
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    if (digits.length <= 8) return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
  }

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 9) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 9)} ${digits.slice(9)}`;
}

export function PhoneInput({
  value,
  onChange,
  countryCode = "+90",
  onCountryCodeChange,
  placeholder = "+1 (555) 123-4567",
  id,
  className = "",
  disabled = false,
  required = false,
  inputClassName,
  selectClassName,
}: PhoneInputProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 rounded-full border border-[#241B14]/10 bg-[#F6EFE8] px-2 text-[#241B14] transition focus-within:border-[#B86F3C]">
        <select
          aria-label="Country code"
          value={countryCode}
          onChange={(event) => onCountryCodeChange?.(event.target.value as CountryCode)}
          className={selectClassName ?? "min-h-[44px] rounded-full bg-transparent px-2 py-2 text-sm font-medium text-[#241B14] outline-none"}
          disabled={disabled}
        >
          <option value="+90">+90</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+49">+49</option>
          <option value="+33">+33</option>
        </select>

        <input
          id={id}
          type="tel"
          value={value}
          onChange={(event) => onChange(formatPhone(event.target.value, countryCode))}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          inputMode="numeric"
          autoComplete="tel"
          className={inputClassName ?? "min-h-[44px] flex-1 border-0 bg-transparent px-2 py-2 text-sm text-[#241B14] outline-none"}
        />
      </div>
    </div>
  );
}
