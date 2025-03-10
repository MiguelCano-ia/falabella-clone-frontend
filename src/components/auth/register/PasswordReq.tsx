interface Props {
  watchPassword: string;
  hasTyped: boolean;
}

export const PasswordReq = ({ watchPassword, hasTyped }: Props) => {
  const validationChecks = [
    { id: 1, text: "Min. 8 caracteres", valid: watchPassword.length >= 8 },
    { id: 2, text: "1 número", valid: /\d/.test(watchPassword) },
    { id: 3, text: "1 minúscula", valid: /[a-z]/.test(watchPassword) },
    { id: 4, text: "1 mayúscula", valid: /[A-Z]/.test(watchPassword) },
    { id: 5, text: "Sin espacio", valid: !/\s/.test(watchPassword) },
    {
      id: 6,
      text: 'Sin usar  `" , ~ ç ñ N',
      valid: !/[\\'",~çñN]/.test(watchPassword),
    },
  ];

  return (
    <>
      {validationChecks.map((req) => (
        <div key={req.id} className="flex items-center">
          <span
            className={`text-[12px] mr-2 text-foreground ${
              hasTyped
                ? req.valid
                  ? "text-[#0DA137]"
                  : "text-[#BC001C]"
                : undefined
            }`}
          >
            •
          </span>
          <span
            className={`text-[12px] text-foreground ${
              hasTyped
                ? req.valid && hasTyped
                  ? "text-[#0DA137]"
                  : "text-[#BC001C]"
                : undefined
            }`}
          >
            {req.text}
          </span>
        </div>
      ))}
    </>
  );
};
