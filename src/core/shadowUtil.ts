interface IGetBoxShadow {
  shadowValueX: number;
  shadowValueY: number;
  color: string;
  blur?: number;
  inset?: boolean;
}

export const getBoxShadow = (values: IGetBoxShadow[]): string =>
  values
    .map(
      ({ color, shadowValueX, shadowValueY, blur, inset }) =>
        `${inset ? "inset " : ""}${shadowValueX}px ${shadowValueY}px ${
          blur
            ? blur
            : Math.ceil((Math.abs(shadowValueX) + Math.abs(shadowValueY)) / 2)
        }px ${color}`
    )
    .join(",");
